const team = {
    _players: [
        {
          firstName: 'Ronaldo',
          lastName: 'Christian',
          age: 32
        },
        {
          firstName: 'David',
          lastName: 'Beckam',
          age: 22
        },
        {
          firstName: 'Messi',
          lastName: 'Leo',
          age: 23
        }
    ],
    _games: [
        {
          opponent: 'Broncos',
          teamPoints: 42,
          opponentPoints: 27
        },
        {
          opponent: 'Game2',
          teamPoints: 52,
          opponentPoints: 67
        },
        {
          opponent: 'Game3',
          teamPoints: 92,
          opponentPoints: 37
        }
    ],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
  
    addPlayer (firstName, lastName, age) {
        let newPlayer = {
            firstName,
            lastName,
            age
        };
        this._players.push(newPlayer);
    },
  
    addGame (opponent, teamPoints, opponentPoints) {
        let newGame = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this._games.push(newGame);
    }
};
  
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players); 
console.log(team.games); 