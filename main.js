const neonPads = document.querySelectorAll(".drum-pad").length;

for (let i = 0; i < neonPads; i++) {
  document
    .querySelectorAll(".drum-pad")
    [i].addEventListener("click", function () {
      let buttonInnerHTML = this.innerHTML;

      padPlay(buttonInnerHTML);

      padPress(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
  padPlay(event.key);

  padPress(event.key);
});

document.addEventListener("touchstart", touch2Mouse, { passive: false });
document.addEventListener("touchmove", touch2Mouse, { passive: false });
document.addEventListener("touchend", touch2Mouse, { passive: false });

function touch2Mouse(e) {
  let theTouch = e.changedTouches[0];
  let mouseEv;

  switch (e.type) {
    case "touchstart":
      mouseEv = "mousedown";
      break;
    case "touchend":
      mouseEv = "mouseup";
      break;
    case "touchmove":
      mouseEv = "mousemove";
      break;
    default:
      return;
  }

  let mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(
    mouseEv,
    true,
    true,
    window,
    1,
    theTouch.screenX,
    theTouch.screenY,
    theTouch.clientX,
    theTouch.clientY,
    false,
    false,
    false,
    false,
    0,
    null
  );
  theTouch.target.dispatchEvent(mouseEvent);
}

function padPress(currentKey) {
  let activeButton = document.querySelector("#" + currentKey);

  activeButton.classList.add("active");

  setTimeout(function () {
    activeButton.classList.remove("active");
  }, 100);
}

function padPlay(key) {
  switch (key) {
    case "z":
      let kick = new Audio("sounds/library1/pos1.wav");
      kick.play();
      break;

    case "x":
      let hihat = new Audio("sounds/library1/pos3.wav");
      hihat.play();
      break;

    case "c":
      let snare = new Audio("sounds/library1/pos2.wav");
      snare.play();
      break;

    case "a":
      let perc = new Audio("sounds/library1/pos4.wav");
      perc.play();
      break;

    case "s":
      let vox = new Audio("sounds/library1/pos5.wav");
      vox.play();
      break;

    case "d":
      let bass = new Audio("sounds/library1/pos6.wav");
      bass.play();
      break;

    case "q":
      let loop1 = new Audio("sounds/library1/pos7.wav");
      loop1.play();
      break;

    case "w":
      let loop2 = new Audio("sounds/library1/pos8.wav");
      loop2.play();
      break;

    case "e":
      let loop3 = new Audio("sounds/library1/pos9.wav");
      loop3.play();
      break;

    default:
      console.log(key);
  }
}
