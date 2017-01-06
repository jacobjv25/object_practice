function Auburn (city, founded, team, coach, natChampionships, secChampionships, heismanWinners, famousAlum, famousAlum2, famousAlum3) {
  this.city = city;
  this.founded = founded;
  this.team = team;
  this.coach = coach;
  this.natChampionships = natChampionships;
  this.secChampionships = secChampionships;
  this.heismanWinners = heismanWinners;
  this.famousAlum = famousAlum;
  this.famousAlum2 = famousAlum2;
  this.famousAlum3 = famousAlum3;
}

var auburnTigers = new Auburn('Auburn', '1939', 'Tigers', 'Gus Malzahn', '2', '8', '3', 'Bo Jackson', 'Pat Sulivan', 'Cam Newton');
console.log(auburnTigers);

Auburn.prototype.toString = function() {
  return this.city + ' ' +
         this.founded + ' ' +
         this.team + ' ' +
         this.coach + ' ' +
         this.natChampionships + ' ' +
         this.secChampionships + ' ' +
         this.heismanWinners + ' ' +
         this.famousAlum + ' ' +
         this.famousAlum2 + ' ' +
         this.famousAlum3 + ' ' +
}

console.log(auburnTigers);
