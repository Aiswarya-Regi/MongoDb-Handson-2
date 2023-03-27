const mongodb = require('../database/connection')
const employeeEnrollment = async (req,res)=>{
    const employeeData = req.body;
    try{
        const result = await mongodb.insertToDB(employeeData)
        console.log("Result of databse operation");
        return res.status(200).send(result)
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const getEmployeeData = async(req,res)=>{
    // const yearGrad = req.body.yearGrad
    // const overallExp = req.body.overallExp
    // const findValue = req.body.salary
    // const findValue = req.body.overallExp
    try{
        const result = await mongodb.findDB()
        console.log("result");
        return res.status(200).send(result)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

const updateEmployeeData = async(req,res)=>{
    try{
        const result = await mongodb.updateDB()
        console.log("Result of databse operation");
        return res.status(200).send(result)
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const deleteEmployeeData = async(req,res)=>{
    try{
        const result = await mongodb.deleteDB()
        console.log("Result of databse operation");
        return res.status(200).send(result)
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}


module.exports = {employeeEnrollment,getEmployeeData,updateEmployeeData,deleteEmployeeData}