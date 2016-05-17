// Description:
//   Transforma un texto en el idioma de flashero
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot flash <texto>
//
// Author:
//   @jorgeepunan


var flashearte = {
  "se" : "ce",
  "ce" : "se",
  "ze": "se",
  "v":"b",
  "b":"v",
  "h" : "",
  "H": ""
};

function flashTranslator(string){
  string = string.replace(new RegExp("(" + Object.keys(flashearte).map(function(i){
    return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }).join("|") + ")", "g"), function(s){
    return flashearte[s];
  });
  return string;
}

module.exports = function(robot) {
  robot.respond(/flash (.*)/i, function(res) {
    var texto = res.match[1];

    res.send( flashTranslator( texto ) );

  });
};
