const { Country } = require('../../../../models');

/*
@route    GET /api/db/get
@desc     Test select * from countries;
@access   public
*/
const testSelect = async (req, res) => {
  try {
    const countries = await Country.findAll();
    return res.json({ msg: 'success', countries });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/db/ins
@desc     Test insert into db
@access   public
*/
const testInsert = async (req, res) => {
  try {
    await Country.create({ country: 'Afghanistan', countryCode: 'AF' });
    return res.json({ msg: 'success' });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/db/del
@desc     send how to delete in db
@access   public
*/
const testDelete = async (req, res) => {
  const how = 'Country.destroy({where: countryId: 1})';
  return res.json({ how });
};

module.exports = { testSelect, testInsert, testDelete };
