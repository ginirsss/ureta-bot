// Description:
//   Transforma un texto en el idioma de El Bellotu
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot flaku <texto>
//
// Author:
//   @jorgeepunan

var garabatus = ['sapoculiao','cómete un pan con pico','chúpalo','sale conchetumare'];

function flakuTranslator (string) {

  var result  = string.split(" ");
  var replace = [];
  result.forEach( function(word) {
    replace.push( word.replace(/\o$/, "u") );
  });
  return replace.join(" ");

}

module.exports = function(robot) {
  robot.respond(/flaku (.*)/i, function(res) {
    var textu = res.match[1];

    res.send( flakuTranslator( textu ) );
    res.send( flakuTranslator( garabatus[Math.floor(Math.random() * garabatus.length)] ) );

  });
};
