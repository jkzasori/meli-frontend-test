// import axios from "axios";
const express = require("express");
const extServices = require("../externalAPI/meli/meliItems");

const router = express.Router();

router.get("/items", async (req, res) => {
  const error = function (errorMessage) {
    res.status(500).json({ error: errorMessage });
  }
  return extServices
    .itemSearch(req.query.q)
    .then((response) => {
      return res.json(response);
    }).catch((errorMessage) => {
      return error(errorMessage)
    })
});

router.get("/items/:id", async (req, res) => {
  const error = function (errorMessage) {
    res.status(500).json({ error: errorMessage });
  }
  return extServices
    .itemDetail(req.params.id)
    .then((response) => {
      return res.json(response);
    }).catch((errorMessage) => {
      return error(errorMessage)
    })
});

module.exports = router;
