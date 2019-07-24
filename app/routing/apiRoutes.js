const friendList = require('../data/friends.js');

module.exports = (app) => {
  app.get('/api/friends', (req,res) => {
    res.json(friendList);
  });

  app.post('/api/friends', (req,res) => {
    //grabs the new friend's scores to compare with friends in friendList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;


    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
     
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      scoresArray.push(scoresDiff);
    }

    // Compare and find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    // Return best match
    var bff = friendList[bestMatch];
    res.json(bff);

    
    friendList.push(req.body);
  });
};