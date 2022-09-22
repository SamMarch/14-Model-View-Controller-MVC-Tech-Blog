const moment = require("moment");

const displayTime = (time) => {
  return moment(time).format("MMM Do YYYY, h:mm:ss a");
};

module.exports = { displayTime };
