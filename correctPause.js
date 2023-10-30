console.log("Correct Pause v1.1 - Started Successfully");

window.onkeyup = keyUpHandler;
window.onkeydown = keyDownHandler;

let latestAction;
let focused = false;

document.querySelector('.ytd-searchbox').addEventListener('focus', function(event) {
  focused = true;
}, true);

document.querySelector('.ytd-searchbox').addEventListener('blur', function(event) {
  focused = false;
}, true);

function keyUpHandler(e) {
  if (focused) return;
  let vid = document.querySelector('video');
  const key = e.code;

  if (key != 'Space') return;

  if (latestAction === 'play') play(vid);
  if (latestAction === 'pause') pause(vid);
}

function keyDownHandler(e) {
  if (focused) return;
  let vid = document.querySelector('video');
  const key = e.code;

  if (key != 'Space') return;

  if (vid.paused || vid.ended) play(vid);
  else pause(vid);
}

function play(video) {
  latestAction = 'play';
  video.play();
}

function pause(video) {
  latestAction = 'pause';
  video.pause();
}