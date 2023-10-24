"use strict";

const { connect } = require("mongoose");

const dbConnection = function () {
  connect(process.env.MONGODB)
    .then(() => console.log("*DB Connected*"))
    .catch((err) => console.log("*DB Not Connected", err));
};

module.exports = dbConnection;
