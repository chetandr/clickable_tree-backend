const express = require("express");
const router = express.Router();
const dimension = require("./functions/dimensionDetail");
const scenariotable = require("./data/executeBasicQuery/scenariotable");
const alloplans = require("./data/executeBasicQuery/alloplans");
const resources = require("./data/executeBasicQuery/resources");
const demandprofile = require("./data/executeBasicQuery/demandprofile");
const demand = require("./data/executeAggregateQuery/demand");
const resource = require("./data/executeAggregateQuery/resource");
const buffer = require("./data/executeAggregateQuery/buffer");

router.post("/executeBasicQuery", (req, res) => {
	switch (req.body.name) {
		case "DIMENSIONDETAIL":
			res.send(dimension.dimensionDetail(req.body.filterSpec.value));
			break;
		case "SCENARIOTABLE":
			res.send(scenariotable);
		case "ALLOPLANS":
			res.send(alloplans);
		case "RESOURCES":
			res.send(resources);
		case "DEMANDPROFILE":
			res.send(demandprofile);
		default:
			return "no response";
	}
});

router.post("/executeAggregateQuery", (req, res) => {
	switch (req.body.entityType) {
		case "DEMAND":
			res.send(demand);
			break;
		case "BUFFER":
			res.send(buffer);
		case "RESOURCE":
			res.send(resource);
		default:
			return "no response";
	}
});

router.post("/", (req, res) => {
	res.send("Welcome ");
});

module.exports = router;
