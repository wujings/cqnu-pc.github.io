const tutorial = require("../nav/tutorial");
const history = require("../nav/history");
const ann = require("../nav/ann");
const more = require("../nav/more");

module.exports = [
  { text: "首页", link: "/" },
  ann,
  tutorial,
  history,
  more,
];
