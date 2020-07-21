const express = require("express");
const router = express.Router();
const Module = require("../models/Module");

exports.articles = async (req, res, next) => {
  const articles = await Article.find({
    models: {
      $elemMatch: {
        year: req.query.year,
        category: req.query.type,
        name: req.query.model,
      },
    },
  });
  res.send(articles);
};
