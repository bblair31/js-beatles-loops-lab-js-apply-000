function theBeatlesPlay(musicians,instruments) {
  var play = []
  for (var i = 0; i < musicians.length; i++) {
   play.push(musicians[i] + instruments[i]) 
  }
  return play
}
