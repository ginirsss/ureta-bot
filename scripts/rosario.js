// Description:
//   Rosario pix
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   rosario

var rosario = [
  'http://img.lagaceta.com.ar/fotos/notas/2012/04/16/486492_20120416100840.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/67/e4/05/67e4050ad9fdc772dcef528e00ef6e2d.jpg',
  'http://images.performgroup.com/di/library/Goal_Argentina/54/1e/messi-con-la-camiseta-de-newells-di-maria-camiseta-rosario-central_gjnc1cab2q8k1q4d47bs45v46.jpg?t=2074508893&w=620&h=430',
  'http://cdn.elperiscopio.cl/wp-content/uploads/2016/02/bielsa.jpeg',
  'http://www.rosariotipica.com.ar/theme/Rosariotipica/img/fondos/Fondo-Costa-Rosario2013.jpg',
  'https://a1.muscache.com/ac/pictures/26271201/35b5afda_original.jpg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70',
  'http://4.bp.blogspot.com/-_ShqJafhkdQ/Us4RA--ZXQI/AAAAAAAAJ4w/VHgdISOHbGM/s1600/IMG_3297.JPG'
];

module.exports = function(robot) {
  robot.hear(/rosario/gi, function(res) {

    res.send( rosario[Math.floor(Math.random() * rosario.length)] );

  });
};
