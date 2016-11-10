// Description:
//   Transforma un texto en el idioma de viejo guaton
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot tu|tú <texto>
//
// Author:
//   @chagoculiao

var frases = ['dale, yo lo compro','dale','buena, dale','Cuba es la raja, la recorri completa','Perú es la raja, lo recorri completo','tengo listo el resort más la raja que hay en ese lugar','se me olvido tomar la pastilla','planificate para que veamos el desarrollo y yo lo hago'];

function santiTranslator (string) {

  var result  = string.split(" ");
  var replace = [];
  result.forEach( function(word) {
    replace.push( word.replace("ando", "andriu").replace("iendo","iendrew") );
  });
  return replace.join(" ");

}

module.exports = function(robot) {
  robot.respond(/t[u|ú] (.*)/i, function(res) {
    var texto = res.match[1];
    console.log(texto);

    res.send( ':chago: ~ ' + santiTranslator( texto ) );
    res.send( ':chago: ~ ' + frases[Math.floor(Math.random() * frases.length)] );

  });
};
