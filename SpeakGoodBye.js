(function(window){
  var byeSpeaker={speak};
  var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker=byeSpeaker;
})(window);