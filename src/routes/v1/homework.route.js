const express = require('express');
const homeworkController = require('../../controllers/homework.controller');

const router = express.Router();

//careerUrl 

router.post('/createnewhomework', homeworkController.createNewHomework);
router.get('/allhomeworks', homeworkController.getAllHomeworks);
router.get('/searchhomeworks', homeworkController.searchHomeworks);//pass in search paramter
router.put('/edithomework', homeworkController.editHomework);  // 
router.delete('/deletehomework', homeworkController.deleteHomework);  // 
router.get('/gethomeworkbyid', homeworkController.getHomeworkById);






module.exports = router;