/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
	const regExpression = /([\d\.\/]+)|(\D+$)/g;
	const wrongExpressionRegex = /(\d+\/.+\/\d+)/g;
	this.getNum = function(input) {
		if(input.match(wrongExpressionRegex)){
			return 0;
		}
		let result;
		result = input.match(regExpression);
		if(result.length>1){
			return eval(result[0])
		}else{
			return 1
		}
	};
  
	this.getUnit = function(input) {
		let result = input.match(regExpression);
		if(this.getReturnUnit(result[1])){
				result = result[1].toLowerCase();
		}
		else if(this.getReturnUnit(result[0])){
			return result[0];
		}
		else{
			result = null;
		}
		return result;
	};
  
	this.getReturnUnit = function(initUnit) {
		let result;
		if(initUnit){
			initUnit = initUnit.toLowerCase();
		}
		switch (initUnit){
			case "mi":
				result = "km";
				break;
			case "lbs":
				result = "kg";
				break;
			case "gal":
				result = "l";
				break;
			case "km":
				result = "mi";
				break;
			case "kg":
				result = "lbs";
				break;
			case "l":
				result = "gal";
				break;
			default:
				result = null;
		}
		return result;
	};

	this.spellOutUnit = function(unit) {
		let result;
		if(unit){
			unit = unit.toLowerCase();
		}
		switch (unit){
				case "km":
					result = "kilometers";
					break;
				case "kg":
					result = "kilograms";
					break;
				case "l":
					result = "liters";
					break;
				case "lbs":
					result = "pounds";
					break;
				case "gal":
					result = "gallons";
					break;
				case "mi":
					result = "miles";
					break;
				default:
					result = null;
		}
		return result;
	};
  
	this.convert = function(initNum, initUnit) {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		let result;
		if(initNum, initUnit){
			initUnit = initUnit.toLowerCase();
		}
		switch (initUnit){
			case "gal":
				result = initNum*galToL;
				break;
			case "l":
				result = initNum/galToL;
				break;
			case "lbs":
				result = initNum*lbsToKg;
				break;
			case "kg":
				result = initNum/lbsToKg;
				break;
			case "mi":
				result = initNum*miToKm;
				break;
			case "km":
				result = initNum/miToKm;
				break;
			default:
				result = null;
				break;
		}
		return (result)? Number(result.toFixed(5)) : null;
	};
  
	this.getString = function(initNum, initUnit, returnNum, returnUnit) {
		return (initNum+" "+this.spellOutUnit(initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnUnit));
	};
  
}

module.exports = ConvertHandler;
