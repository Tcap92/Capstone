const { Router } = require("express");
const Show = require("../models/Show");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newShow = new Show.model(request.body);
  newShow.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Show.model.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:name", (request, response) => {
  Show.model.findOne({ anime_name: request.params.name }, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.get("/:name/facts", (request, response) => {
  Show.model.findOne({ anime_name: request.params.name }, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record.facts);
  });
});
module.exports = router;
