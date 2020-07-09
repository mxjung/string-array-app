/** API routes for array of strings. */

const express = require('express');
const router = new express.Router();

const arrayOfStrings = ['hello', 'there'];

/** GET /   get array of strings
 *
 * Returns:
 * => [ string1, string2, ... ]
 *
 */

router.get('/', async function getInputs(req, res, next) {
  try {
    console.log('inside GET /api');
    return res.json(arrayOfStrings);
  } catch (err) {
    return next(err);
  }
});

/** POST /   adds string element to end of array
 *
 * Returns new array with added string:
 * => [ string1, string2, ... ]
 *
 */

router.post('/', (req, res, next) => {
  try {
    console.log('inside POST /api');

    // prepend string to arrayOfStrings
    arrayOfStrings.unshift(req.body.username);
    return res.json(arrayOfStrings);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
