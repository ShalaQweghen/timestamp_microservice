var Helpers = {
  parseDate: function(date) {
    var monthNames = ["January", "February", "March", "April",
                     "May", "June", "July", "August", "September",
                     "October", "November", "December"];

    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  },

  validDate: function(date) {
    return new Date(date).toString() !== "Invalid Date";
  },
  
  prepareDate: function(param) {
    if (this.validDate(param)) {
      return new Date(param);
    } else if (this.validDate(Number(param))) {
      return new Date(Number(param));
    }
  }
};

module.exports = Helpers;

