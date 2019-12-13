const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    console.log("look here", req.body);
    // db.Items
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => {
    //     console.error(err)
    //     res.status(422).json(err)
    //   });
  },
  findById: function(req, res) {
    db.Items
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  create: function(req, res) {
    console.log("over here", req.body);
    // db.Items
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => {
    //     console.error(err)
    //     res.status(422).json(err)
    //   });
  },
  update: function(req, res) {
    db.Items
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    db.Items
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }
};