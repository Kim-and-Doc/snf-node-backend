const { User } = require('../../../../models');

/*
@route    GET /api/fill/user
@desc     select * from users;
@access   public
*/
const getDbUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json({ msg: 'success', users });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/fill/user/create
@desc     create test user
@access   public
*/
const createUser = async (req, res) => {
  try {
    const testUser = await User.findAll({ where: { email: 'test@gmail.com' } });
    if (testUser.length === 0) {
      await User.create({
        firstName: 'Test', lastName: 'Me', email: 'test@gmail.com', password: 'password',
      });
      return res.json({ msg: 'success, test user created' });
    }
    return res.json({ msg: 'Test User already exists' });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/fill/user/delete
@desc     delete test user
@access   public
*/
const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { email: 'test@gmail.com' },
    });
    return res.json({ msg: 'success, test user deleted' });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

module.exports = { getDbUser, createUser, deleteUser };
