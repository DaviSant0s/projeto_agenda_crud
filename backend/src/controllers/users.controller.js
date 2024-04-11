const UserModel = require('../model/user.model');

const create = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.create({
      email,
      password
    });

    return res.status(201).json(user);

  } catch (err) {

    return res.status(400).json({
      error: '@users/create',
      message: err.message || 'Failed to create'
    });

  }

}

const list = async (req, res) => {
  try {
    const users = await UserModel.find({}, { password: 0});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({
      error: '@users/list',
      message: err.message || 'Failed to list users'
    });
  }
}

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id, { password: 0 })

    if(!user) {
      throw new Error();
    }

    return res.status(200).json(user);

  } catch (err) {
    return res.status(400).json({
      error: '@users/getById',
      message: err.message || `User not found ${id}`,
    });
  }
}


const update = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const userUpdated = await UserModel.findByIdAndUpdate(id, {
      email,
      password
    }, { new: true});

    if(!userUpdated){
      throw new Error();
    }

    return res.status(200).json(userUpdated);

  } catch (err) {
    return res.status(400).json({
      error: '@users/update',
      message: err.message || `User not found ${id}`
    });
  }
}

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const userDeleted = await UserModel.findByIdAndDelete(id);
  
    if(!userDeleted){
      throw new Error();
    }
  
    return res.status(204).send();
    
  } catch (err) {

    return res.status(400).json({
      error: '@users/remove',
      message: err.message || `User not found ${id}`
    });
    
  }

}

module.exports = {
  list,
  getById,
  create,
  update,
  remove
}