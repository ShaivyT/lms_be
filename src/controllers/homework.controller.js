const httpStatus = require('http-status');
const {homeworkService, recordService } = require('../services');

const createNewHomework = async (req, res) => {
  const comp = await homeworkService.createNewHomework(req.body);
res.status(httpStatus.CREATED).send(comp);
};

const deleteHomework = async (req, res) => {
const {_id} = req.query

const deletedRecs = await recordService.deleteManyByHomeworkId(_id);
const comp = await homeworkService.deleteHomework(_id);
res.status(httpStatus.CREATED).send(comp);
};

const editHomework = async (req, res) => {
  const comp = await homeworkService.editHomework(req.body);
res.status(httpStatus.CREATED).send(comp);
};

const getAllHomeworks = async (req, res) => {
   comp = await homeworkService.getAllHomeworks()
   res.status(httpStatus.CREATED).send(comp);
} 

const searchHomeworks = async (req, res) => {
  const {keyword} = req.query
  comp = await homeworkService.searchHomeworks(keyword)
  res.status(httpStatus.CREATED).send(comp);

};

const getHomeworkById = async (req, res) => {
  const query= req.query
  const comp = await homeworkService.getHomeworkById(query.Id);
res.status(httpStatus.CREATED).send(comp[0]);
};


module.exports = {
  createNewHomework,
  getAllHomeworks,
  searchHomeworks,
  editHomework,
  deleteHomework,
  getHomeworkById
  
};
