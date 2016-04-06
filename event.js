/*
  Kode-eksempler CodingPirates Odense Minecraft workshop marts 2016
*/

var utils = require('utils');
var items = require('items');

// I spillet skrives /js testjs()
function hejVerden() {
    echo('Hejsa verden');
}
exports.testjs = hejVerden;

// Spiller logger på server
function playerJoinsServer( event ) {
  var playerName = event.player.name
  console.log(playerName + ' joined the server ...');
}
events.playerJoin( playerJoinsServer );


// Spiller forlader server
function playerExits( event ) {
  var playerName = event.player.name
  console.log(playerName + ' left the server ...');
}
events.playerQuit( playerExits );


// Skriver en besked, hver gang der spawnes noget
function spawnMessage( event) {
  spawnedEntity = event.entity.entityType;
  //console.log('A ' + spawnedEntity + ' just spawned!');

    // Speciel besked hvis det er en gris
    if (spawnedEntity.toString() == 'PIG' ) {
      console.log('And it was a pig!');
    }
}
events.entitySpawn( spawnMessage );


// Skriver en besked når noget bliver slået ihjel
function somethingKilled( event) {
  var killerName = 'Unknown';
  killedEntity = event.entity.entityType; // hvad blev slået ihjel?
  killer = event.damageSource.damageDealer; // hvem gjorde det?

  if (killer != null) {
    killerName = killer.name;
  }
  // console.log(killerName + ' killed a ' + killedEntity);

  if (killedEntity.toString() == 'PIG' ) {
     console.log(killerName + ' killed a pig');
  }
}
events.entityDeath( somethingKilled );
