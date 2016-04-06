/*
  Kode-eksempler CodingPirates Odense Minecraft workshop marts 2016
*/
var Drone = require('drone');
var spawn = require('spawn');

// Funktion med argument
// I spillet skrives /js argument(tekst)
// tekst skal være en tekst-streng fx /js argument('Bo og Bente')
function argument(tekst) {
  echo('Du skrev: ' + tekst);

  // Kontrol af tekst-streng
  if (tekst == 'Bo og Bente') {
    echo('Hvem er ' + tekst + ' ..?');
  }
}
exports.argument = argument


// Funktion med løkke
// I spillet skrives /js lars()
function lars() {
  var i = 0;
  // gør dette 10 gange
  for (i = 0; i < 10; i++) {
    echo('Nu har jeg talt til: ' + String(i));
  }
}
exports.lars = lars


// Funktion der kalder en anden funktion
// I spillet skrives /js toFunk()
function toFunk() {
  echo('Jeg skriver dette fra toFunk()');

  var tekst = mereTekst();
  echo(tekst);
}
exports.toFunk = toFunk

function mereTekst() {
  var nogetTekst = 'Det her kommer fra mereTekst()';
  return nogetTekst;
}


// Funktion med et tilfældigt tal
// I spillet skrives /js lykkeTal()
function lykkeTal() {
  // Tilfældigt tal mellem 1 og 10
  var randomTal = Math.floor((Math.random() * 10) + 1);
  echo('Dit lykketal er: ' + randomTal);
}
exports.lykkeTal = lykkeTal


// Send besked og katte-miau til alle spillere
// I spillet skrives /js besked('hejsa')
function messagePlayers( message ) {
  var sounds = require('sounds');
  var players = utils.players();
  for (var i = 0;i < players.length; i++) {
    sounds.catMeow( players[i].location );
    echo(players[i], message);
  }
}
exports.besked = messagePlayers;


// Drone der kaster grise ned fra himlen. Spørg ikke om hvorfor.
// I Minecraft skrives /js grisseRegn(n)  n: et tal, fx 10
function grisseRegn( antalGrise ) {
  console.log('Det regner med grise ...');
  var d = new Drone(self);
  d.chkpt('start');
  d.up(10);
  var i = 0;
  for (i = 0; i < antalGrise; i++) {
    // Andre mobs: http://minecraft.gamepedia.com/Mob#List_of_mobs
    spawn('PIG', d.getLocation());
    d.right(1);
  }
  d.move('start');
}
Drone.extend( grisseRegn )
