import React, { useState, useEffect } from "react";
import "./MappingPlanner.css";
import edurecdata from "../dataraw/json/EdurecSEP_raw.json";
import Datatable from "../datatable";
import { Grid } from "semantic-ui-react";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function MappingPlanner() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["School_ID"]);

  useEffect(() => {
    setData(edurecdata);
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div className="background">
      <Grid>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={14}>
          <div>
            <Grid celled>
              <Grid.Row style={{ background: "#f7f7f7ff" }}>
                <div>
                  <br />
                  <h2 className="MappingPlanner_title">
                    Pre-approved Mapping List
                  </h2>
                  <br />
                  <div className="input_box">
                    <input
                      type="text"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                    />
                  </div>
                  <br />
                  <br />
                  {columns &&
                    columns.map((column) => (
                      <label>
                        <input
                          type="checkbox"
                          checked={searchColumns.includes(column)}
                          onChange={(e) => {
                            const checked = searchColumns.includes(column);
                            setSearchColumns((prev) =>
                              checked
                                ? prev.filter((sc) => sc !== column)
                                : [...prev, column]
                            );
                          }}
                        />
                        {column}
                      </label>
                    ))}
                  <br />
                </div>
              </Grid.Row>
              <Grid.Row>
                <div>
                  <Datatable data={search(data)} />
                </div>
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
    </div>
  );
}
