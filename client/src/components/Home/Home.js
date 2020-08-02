import React from "react";
import { Parallax } from "react-parallax";
import "./Home.css";

const image1 = "https://i.imgur.com/hmnfQtT.png";
const image2 = "https://i.imgur.com/18GruKj.png";
const image3 = "https://i.imgur.com/THCYwtW.png";
const image4 = "https://i.imgur.com/o2gKiTm.png";
const image5 = "https://i.imgur.com/aN7s9jT.png";

const inlineStyle = {
  color: "#fff",
  fontSize: "150%",
  left: "50%",
  top: "65%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

const inlineStyle2 = {
  color: "#fff",
  fontSize: "120%",
  left: "50%",
  top: "70%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

const inlineStyle3 = {
  color: "#fff",
  fontSize: "120%",
  left: "70%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

function home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={image1} strength={300}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            Confused about SEP? Use this site to help you figure out what
            modules to map and which schools to pick! Scroll down to find out
            more about our features! :)
          </div>
        </div>
      </Parallax>

      <h1 className="divider">I</h1>

      <Parallax bgImage={image2} strength={300}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle2}>
            School review page offers information and senior reviews on each
            school available. You can make use of the side navigation bar to
            navigate through the different schools in the various continents and
            countries. Each school review page will try to cover similar areas
            of the author's experience, for example Location, School Culture,
            Modules to Map, Accomodations and so on!
          </div>
        </div>
      </Parallax>

      <h1 className="divider">II</h1>

      <Parallax bgImage={image3} strength={300}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle3}>
            Instead of having to command+f to find specific modules in module
            rec, or having to manually type the school code/module code, you can
            now begin by simply checking the boxes you wish to filter by! (e.g.
            NUS module code, or continent you wish to focus on). The system will
            then generate a list of filtered data that match your checked
            criteria! We hope that this will provide more filter options, and a
            more streamlined/efficient user experience in searching for suitable
            schools!
          </div>
        </div>
      </Parallax>
      <h1 className="divider">III</h1>
      <Parallax bgImage={image4} strength={300}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle2}>
            Next we have the backpack function where you can drop schools you
            have currently shortlisted to compare their features side-by-side.
            You can search up to three schools, which will then generate similar
            sections of information for an easier side by side comparison as you
            decide on your final rankings!
          </div>
        </div>
      </Parallax>
      <h1 className="divider">IV</h1>
      <Parallax bgImage={image5} strength={300}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle3}>
            The Ask! Forum is where you can raise any other queries you have,
            and create posts or scroll through posts in different categories and
            threads! To use this feature, you simply have to create an account
            with your email and password :)
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default home;
