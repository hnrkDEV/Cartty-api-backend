const catchAsync = require('../utils/catchAsync');
const List = require('../models/listModel');  
const User = require('../models/userModel');

exports.createList = catchAsync(async (req, res) => {
  const { name, collaborators } = req.body;

  const newList = await List.create({
    name,
    owner: req.user.id,
    collaborators
  });

  res.status(201).json({
    status: 'success',
    data: {
      list: newList
    }
  });


  });