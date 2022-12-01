const getAllCars = async (req, res, next) =>{
    let cars;
    try{
        cars = await Car.find()
    }catch(err){
    console.log(err)
    }
    if(!cars){
        return res.status(404).json({message: "No Vehicles Found"})
    }
    return res.status(200).json({cars});
}



const getById = async (req, res, next) =>{
    const id = req.params.id;
    let car;
    try{
        car = await Car.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!car){
        return res.status(404).json({message: "No Vehicle Found"})
    }
    return res.status(200).json({car})
};


//add a car to the DB by way of the URL 
const addCar = async (req, res, next)=>{
    const {make_model, price, year, engine, available } = req.body;
    let vehicle;
    try{
        vehicle = new Car({
            make_model,
            price,
            year,
            engine,
            available,
        });
        await vehicle.save();
    }catch(err){
        console.log(err)
    }
    if(!vehicle){
        return res.status(500).json({message : "Unable to Add Vehicle"})
    }
    return res.status(201).json({vehicle})
};


// create function to update a value based on it ID. 

const updateCar = async (req, res, next) => {
    const id = req.params.id;
    const {make_model, price, year, engine, available } = req.body;
    let car;
    try{
        car = await Car.findByIdAndUpdate(id, {
            make_model,
            price,
            year,
            engine,
            available
        });
        car = await car.save();
    }catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: "Unable to update by this ID value"})
    }
    return res.status(200).json({car});
};


//delete a car from your DB by creating a function to be assigned for your deleting URL
const deleteCar = async (req,res, next) => {
    const id = req.params.id;
    let car;
    try{
        car = await Car.findByIdAndRemove(id);
    } catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({ message: "Unable to Delete By This ID"});
    }
    return res.status(200).json({message: "Vehicle Successfully Deleted"})
};

//export functions to be used for URLS for functionality

exports.getAllCars = getAllCars;
exports.getById = getById;
exports.addCar = addCar;
exports.updateCar = updateCar;
exports.deleteCar = deleteCar;
