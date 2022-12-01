const express = require("express");
const router = express.Router();
const Car = require("../Model/VehicleInfo");
const carControllers = require("../Controllers/car-controllers");

//assign functionality to requests for URLs

//localhost:3001/cars/get
router.get("/get", carControllers.getAllCars);

//localhost:3001/cars/update
router.post("/update", carControllers.addCar);

//localhost/3001/cars/get/:id
router.get("/get/:id", carControllers.getById);

//localhost:3001/cars/update/:id
router.put("/update/:id", carControllers.updateCar);

//localhost:3001/cars/delete/:id
router.delete("/delete/:id", carControllers.deleteCar);

module.exports = router;
