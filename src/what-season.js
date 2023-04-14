const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function  getSeason(date){

	let data = new Date(date)
	let month = data.getMonth()
	const months = {
		'winter': 'winter',
		'spring': 'spring',
	 	'summer': 'summer',
		'autumn': 'autumn'
	}

	if (date === undefined) {
		return "Unable to determine the time of year!";
	}else if (!(date instanceof Date) || date.hasOwnProperty("toString")) {
		throw new Error("Invalid date!");
	}else {

		if(month === 11 || month === 0 || month === 1){
			return months.winter
		} 
		if(month >= 2 && month <=4){
			return months.spring
		} 
		if(month >= 5 && month <=7){
			return months.summer
		} 
		if(month >= 8 && month <=10){
			return months.autumn
		} 
	}
}

module.exports = {
  getSeason
};
