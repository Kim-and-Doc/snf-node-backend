const csv = require('csv-parser');
const fs = require('fs');
const { Country } = require('../../../../models');

/*
@route    GET /api/fill/country
@desc     select * from Countries;
@access   public
*/
const getDbCountry = async (req, res) => {
  try {
    const countries = await Country.findAll();
    return res.json({ msg: 'success', countries });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/fill/country/create
@desc     Populate countries
@access   public
*/
const populateCountry = async (req, res) => {
  try {
    const countries = await Country.findAll();
    if (countries.length !== 244) {
      if (countries.length !== 0) await Country.destroy({ where: {}, truncate: true });
      let countryId = 0;
      fs.createReadStream(`${__dirname}/countries.csv`).pipe(csv()).on('data', async (row) => {
        countryId += 1;
        await Country.create({
          countryId, countryCode: row.countryCode, country: row.country,
        });
      });
      return res.json({ msg: 'success, Country populated' });
    }
    return res.json({ msg: 'Country already populated' });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/fill/country/create
@desc     Populate countries
@access   public
*/
const findCountry = async (req, res) => {
  try {
    const { code } = req.params;
    const country = await Country.findOne({ where: { countryCode: code.toUpperCase() } });
    if (country) {
      return res.json({ msg: 'success', country: country.dataValues });
    }
    return res.json({ msg: `fail, ${code} is not a country code` });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

module.exports = { getDbCountry, populateCountry, findCountry };
