/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
			let initUnit = convertHandler.getUnit(input);
			let returnUnit = convertHandler.getReturnUnit(initUnit);
			const regExpression = /([\d\.\/]+)|(\D+$)/g;
			let initNum = convertHandler.getNum(input);
			let returnNum = convertHandler.convert(initNum, initUnit);
			let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
			if(returnNum&&returnUnit){
				res.json({
					initNum: initNum,
					initUnit: initUnit,
					returnNum: returnNum,
					returnUnit: returnUnit,
					string: toString
				})
			}
			else if(!initNum&&!returnNum&&!returnUnit){
				res.send("invalid number and unit");
			}
			else if(initNum==0){
				res.send("invalid number")
			}
			else{
				res.send("invalid unit")
			}
    });
};
