const Homework = require('../models/homework.model');

const createNewHomework = async (input) => {
  const homework = await Homework.create(input);
  ;
  return homework;
};

const editHomework = async (input) => {
  try {

    const homework = await Homework.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    return homework;
  }
  catch(e){
    console.log(e,'ERROR');
  }
};

const getAllHomeworks = async () => {
  const homework = await Homework.find({});
  return homework;
};

const deleteHomework = async (_id) => {
  const homework = await Homework.findByIdAndDelete(_id)
  return homework;
};

const searchHomeworksByKeyWord = async (searchText) => {

  const regex = new RegExp(searchText,'gmi')

  const comp = await Homework.find(
    {$or:
  [
    {homeworkName :{$regex: regex}},
    {careerUrl :{$regex: regex}},
]
})
   return comp;
  
};


const searchHomeworks = async (keyword) => {
  const regex = new RegExp(keyword,'gmi')
  const homework = await Homework.find(
    {$or:
  [
    {homeworkName :{$regex: regex}},
    {careerUrl :{$regex: regex}},
]
})
  return homework;
};

const getHomeworkById = async (Id) => {
  const com = await Homework
  .find({_id:Id})
  return com;
};


module.exports = {
  createNewHomework,
  getAllHomeworks,
  searchHomeworks,
  editHomework,
  deleteHomework,
  searchHomeworks,
  searchHomeworksByKeyWord,
  getHomeworkById,
   
  };
  

