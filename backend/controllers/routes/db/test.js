const env = require('../../../../config/env');
const { Country } = require('../../../../models');

const testSelect = async (req, res) => {
  try {
    const countries = await Country.findAll();
    return res.json({ msg: 'success', countries });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

const testInsert = async (req, res) => {
  try {
    Country.create({ country: 'Afghanistan', countryCode: 'AF' });
    return res.json({ msg: 'success' });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

const testDelete = async (req, res) => {
  const how = 'Country.destroy({where: countryId: 1})';
  return res.json({ how });
};

module.exports = { testSelect, testInsert, testDelete };
