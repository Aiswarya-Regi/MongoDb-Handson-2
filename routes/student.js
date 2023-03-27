const router = require('express').Router()
const studentController = require('../controllers/student')

router.get('/employee',studentController.getEmployeeData)
router.post('/employee',studentController.employeeEnrollment);
router.put('/employee',studentController.updateEmployeeData)
router.delete('/employee',studentController.deleteEmployeeData)


module.exports = router