console.log("Correct Pause v1.8.1 - Started Successfully");

window.onkeydown = keyDownHandler;
window.onkeyup = keyUpHandler;

let latestAction;

// Is it embed type of video? (like https://www.youtube.com/embed/ftl3ZCr_Cn4)
let isEmbed = /^.*:\/\/www\.youtube\.com\/embed.*$/.test(window.location.href);

// Elements on which if focused pressing space won't play/pause the video
let forbiddenElements = ['ytd-searchbox', 'contenteditable-root', 'gsfi ytd-searchbox', 'style-scope yt-formatted-string', 'search', 'style-scope tp-yt-paper-input']

// Determines if play/pause is allowed (e.g: when typing in search or comments)
function isSpaceAllowed() {
  // This line makes spacebar work properly on embed videos
  if (isEmbed && document.activeElement.classList.contains('html5-video-player')) return false;

  for (let i = 0; i < forbiddenElements.length; i++) {
    let element = forbiddenElements[i];
    if (document.activeElement.className === element || document.activeElement.id === element)
      return false;
  }

  return true;
}

function keyDownHandler(e) {
  if (!isSpaceAllowed()) return;

  let vid = document.querySelector('video');
  const key = e.code;

  if (key != 'Space') return;

  if (vid.paused || vid.ended) play(vid);
  else pause(vid);
}

function keyUpHandler(e) {
  if (!isSpaceAllowed()) return;

  let vid = document.querySelector('video');
  const key = e.code;

  if (key != 'Space') return;

  if (latestAction === 'play') play(vid);
  if (latestAction === 'pause') pause(vid);
}

function play(video) {
  latestAction = 'play';
  video.play();
}

function pause(video) {
  latestAction = 'pause';
  video.pause();
}