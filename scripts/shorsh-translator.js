// Description:
//   Transforma un texto en el idioma portugueish
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot shorsh <texto>
//
// Author:
//   @ginirsss

var garabatinhos = [
  'busca en google poh culiao',
  'revisa la wea flakuliao',
  'ginazo',
  'chagazo',
  'fresaso',
  'llorandreazo',
  'dia libre el culiao',
  'hola mai',
  'hola pai',
  'consultita rica',
  'ando caliente CTM',
  'araxa',
  'no pesco a ningun culiao',
  'revisaste la wea CTM?',
  'Kate reculia',
  'Sheman culia fea',
  'Beto es el mejor y más lindo',
  'llorandrew culiao callate',
  'me pica un coco',
  'hiciste commit reculiao',
  'anima la wea con CSS3, como hombre culiao'
  ];

function shorshTranslator (string) {

  var result  = string.split(" ");
  var replace = [];
  result.forEach( function(word) {
    replace.push( word.replace(/\o$/, "u") );
  });
  return replace.join(" ");

}

module.exports = function(robot) {
  robot.respond(/shorsh (.*)/i, function(res) {
    var textu = res.match[1];

    res.send( shorshTranslator( textu ) );
    res.send( shorshTranslator( garabatinhos[Math.floor(Math.random() * garabatinhos.length)] ) );

  });
};
