const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const homeworkSchema = mongoose.Schema(
  {
    homeworkName: {
      type: String,
      required: true,
      index: true,
      unique:true
    },
    homeworkUrl: {
      type: String,
    },
    points: {
      type: Number,
    },
    homeworkIndex: {
      type: String,
    },
  
  },
  {
    timestamps: true,
  }
);

homeworkSchema.plugin(uniqueValidator);
const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;
