var shotP1S1, shotP1S2, shotP1S3;
var shotP2S1, shotP2S2, shotP2S3, shotP2S4, shotP2S5, shotP2S6, shotP2S7, shotP2S8, shotP2S9, shotP2S10, shotP2S11;
var shotP3S1, shotP3S2, shotP3S3;
var shotP4S1;
var music;
var button;
var playing = false;
var counter, time, musicTime, pgmTime;
var angle = 0;
var xName;
var randomP0, randomP1, randomP2;
var checkP0, checkP1S1, checkP1S2;
var fontAnother;
var clue = ["3.45pm", "Pier 7", "Rosebud"];
var clueTxt;
var topLeft, topRight, botRight, botLeft, inCenter, middleLeft, botCenter;
var nameX1, nameY1, nameX2, nameY2, nameX3, nameY3, nameX4, nameY4;
var namePosP1 = 0;
var namePosP2 = 0;
var namePosP3 = 0;
var namePosP4 = 0;
var sWeight = 0;
var scribble1, scribble2, scribbleL1, scribbleL2, scribbleL3, scribbleL4, scribbleL5, scribbleL6;
var scribbleHachure;
var scribbleRectFin1, scribbleRectFin2, scribbleRectFin3, scribbleRectFin4, scribbleLP1, scribbleLP2, scribbleLP1;
var RectFin1, RectFin2, RectFin3, RectFin4;
var scribbleC;
var diamScribble;
var P2L1y, P2L2x, P2L3y, P2L4x;
var xCoords = [];
var yCoords = [];
var xleft, xright;
var ytop, ybottom;
var hachureAngle;
var curvPx, curvPy, curvDelta;
var nameSize, nameAlpha;
var thePlayButton;
var coverVideo;
var rectHeight;
var RectFinSize = 20;


function preload() {
  //Cover Video
  coverVideo = loadImage("ntsc-assets/img/video-cover-noplay-360.jpg")

  //Audio
  music = loadSound("ntsc-assets/audio/music.mp3");

  //Intro
  shotP1S1 = createVideo('ntsc-assets/video/P1-S1.mov');
  shotP1S2 = createVideo('ntsc-assets/video/P1-S2.mov');
  shotP1S3 = createVideo('ntsc-assets/video/P1-S3.mov');

  //Main
  shotP2S1 = createVideo('ntsc-assets/video/P2-S1.mov');
  shotP2S2 = createVideo('ntsc-assets/video/P2-S2.mov');
  shotP2S3 = createVideo('ntsc-assets/video/P2-S3.mov');
  shotP2S4 = createVideo('ntsc-assets/video/P2-S4.mov');
  shotP2S5 = createVideo('ntsc-assets/video/P2-S5.mov');
  shotP2S6 = createVideo('ntsc-assets/video/P2-S6.mov');
  shotP2S7 = createVideo('ntsc-assets/video/P2-S7.mov');
  shotP2S8 = createVideo('ntsc-assets/video/P2-S8.mov');
  shotP2S9 = createVideo('ntsc-assets/video/P2-S9.mov');
  shotP2S10 = createVideo('ntsc-assets/video/P2-S10.mov');

  //Last Shot
  shotP3S1 = createVideo('ntsc-assets/video/P3-S1.mov');
  shotP3S2 = createVideo('ntsc-assets/video/P3-S2.mov');
  shotP3S3 = createVideo('ntsc-assets/video/P3-S3.mov');

  //Title
  shotP4S1 = createVideo('ntsc-assets/video/P4-S1.mov');

  //Font
  fontAnother = loadFont('ntsc-assets/font/another.ttf');
}

function setup() {
  var myCanvas = createCanvas(640, 360);
  myCanvas.parent("#myCanvas");
  background(255, 123, 12);
  counter = 0;
  counterLineW = 0;

  thePlayButton = select('#playbutton');
  thePlayButton.mousePressed(toggleVid);

  shotP1S1.hide();
  shotP1S2.hide();
  shotP1S3.hide();

  shotP2S1.hide();
  shotP2S2.hide();
  shotP2S3.hide();
  shotP2S4.hide();
  shotP2S5.hide();
  shotP2S6.hide();
  shotP2S7.hide();
  shotP2S8.hide();
  shotP2S9.hide();
  shotP2S10.hide();
  // shotP2S11.hide();

  shotP3S1.hide();
  shotP3S2.hide();
  shotP3S3.hide();

  shotP4S1.hide();

  randomP0 = randP0(1);
  randomP1 = randP1(4);
  randomP2 = randP2(1);

  seq1Shot1 = randomP0[0];

  seq2Shot1 = randomP1[0];
  seq2Shot2 = randomP1[1];
  seq2Shot3 = randomP1[2];
  seq2Shot4 = randomP1[3];

  seq3Shot1 = randomP2[0];

  seq4Shot1 = shotP4S1;

  checkP1();
  checkP2S1();
  checkP2S2();
  checkP2S3();
  checkP2S4();
  checkP3S1();

  xName = 280;
  nameSize = 0;
  nameAlpha = 0;

  clueTxt = floor(random(3));

  //Position names-titles
  topLeft = createVector(width * .33, height * .33);
  topRight = createVector(width * .66, height * .33);
  botLeft = createVector(width * .33, height * .66);
  botRight = createVector(width * .66, height * .66);
  inCenter = createVector(width * .5, height * .5);
  botCenter = createVector(width * .5, height * .66);
  middleLeft = createVector(width * .33, height * .5);

  scribble1 = new Scribble();
  scribble2 = new Scribble();
  scribbleL1 = new Scribble();
  scribbleL2 = new Scribble();
  scribbleL3 = new Scribble();
  scribbleL4 = new Scribble();
  scribbleL5 = new Scribble();
  scribbleL6 = new Scribble();
  scribbleHachure = new Scribble();
  scribbleC = new Scribble();

  //Position Scribble Fin
  RectFin1 = createVector(random(0, .25 * width), random(0, height));
  RectFin2 = createVector(random(.25 * width, .5 * width), random(0, height));
  RectFin3 = createVector(random(.5 * width, .75 * width), random(0, height));
  RectFin4 = createVector(random(.75 * width, width), random(0, height));

  scribbleLP1 = new Scribble();
  scribbleLP2 = new Scribble();
  scribbleLP3 = new Scribble();
  scribbleRectFin1 = new Scribble();
  scribbleRectFin2 = new Scribble();
  scribbleRectFin3 = new Scribble();
  scribbleRectFin4 = new Scribble();

  diamScribble = 0;

  P2L1y = random(height);
  P2L2x = random(width);
  P2L3y = random(height);
  P2L4x = random(width);

  xleft = 0;
  xright = width;
  ytop = 0;
  ybottom = height;

  hachureAngle = random(270, 315);

  curvPx = random(0, width);
  curvPy = random(0, height);
  curvDelta = random(0, 300);

  e = random(height);
}

function draw() {

  if (playing) {
    counter += 1;
  } else {
    counter = counter;
  }

  if (counter === 0) {
    image(coverVideo, 0, 0);
    fill(0, 185);
    rect(0, 0, width, height)
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 0, 0);
    noStroke();
    textFont(fontAnother);
    text("Click 'Play' to start the video", width / 2, height / 2);


  } else {
    if (counter > 0 && counter < 300) {
      clear();
      image(seq1Shot1, 0, 0);

      if (playing) {
        seq1Shot1.play();
      } else {
        seq1Shot1.pause();
      }


      //SHOT P2S1
    } else if (counter >= 300 && counter < 600) {
      clear();
      image(seq2Shot1, 0, 0);

      if (playing) {
        seq2Shot1.play();
      } else {
        seq2Shot1.pause();
      }

      var diamGrowth = 1;


      //FadeIN-FadeOUT the name
      // Stroke Weight

      if (counter < 500) {

        if (nameAlpha <= 255) {
          nameAlpha += 10;
        }

        if (sWeight <= 3) {
          sWeight += 0.01;
          if (diamScribble < 50) {
            diamScribble += diamGrowth;
          }
        }

      } else if (counter >= 500 && counter < 600) {
        sWeight -= 0.02;

        if (nameAlpha >= 0) {
          nameAlpha -= 10;
        }

        if (diamScribble > 0) {
          diamScribble -= diamGrowth;
        }

      } else if (counter >= 600) {
        sWeight = 0;
        diamScribble = 0;
        nameAlpha = 0;

      }

      strokeWeight(sWeight);

      if (namePosP1 === "topLeftPos") {
        nameX1 = topLeft.x;
        nameY1 = topLeft.y;
      } else if (namePosP1 === "topRightPos") {
        nameX1 = topRight.x;
        nameY1 = topRight.y;
      } else if (namePosP1 === "botRightPos") {
        nameX1 = botRight.x;
        nameY1 = botRight.y;
      } else if (namePosP1 === "botLeftPos") {
        nameX1 = botLeft.x;
        nameY1 = botLeft.y;
      } else if (namePosP1 === "inCenterPos") {
        nameX1 = inCenter.x;
        nameY1 = inCenter.y;
      } else if (namePosP1 === "middleLeftPos") {
        nameX1 = middleLeft.x;
        nameY1 = middleLeft.y;
      } else if (namePosP1 === "botCenterPos") {
        nameX1 = botCenter.x;
        nameY1 = botCenter.y;
      }

      push();
      //the lines
      for (var i = 0; i <= width; i = i + width / 5) {
        stroke(255, 0, 0, 125);
        scribbleL1.scribbleLine(nameX1, nameY1, i, height);
        stroke(255, 0, 0, 125);
        scribbleL2.scribbleLine(nameX1, nameY1, i * 1.5, 0);
      }
      //the circle
      stroke(255);
      noFill();
      scribble1.scribbleEllipse(nameX1, nameY1, diamScribble, diamScribble);
      pop();

      textAlign(CENTER, CENTER);
      textFont(fontAnother);
      textSize(36);
      fill(255, nameAlpha);
      text('Juliet Goodrain', nameX1, nameY1);
      fill(255, 0, 0, nameAlpha);
      text('J l  t Go dr  n', nameX1 + random(-1, 1), nameY1 + random(-1, 1));


      //SHOT P2S2
    } else if (counter >= 600 && counter < 900) {
      clear();
      image(seq2Shot2, 0, 0);

      if (playing) {
        seq2Shot2.play();
      } else {
        seq2Shot2.pause();
      }

      if (namePosP2 === "topLeftPos") {
        nameX2 = topLeft.x;
        nameY2 = topLeft.y;
      } else if (namePosP2 === "topRightPos") {
        nameX2 = topRight.x;
        nameY2 = topRight.y;
      } else if (namePosP2 === "botRightPos") {
        nameX2 = botRight.x;
        nameY2 = botRight.y;
      } else if (namePosP2 === "botLeftPos") {
        nameX2 = botLeft.x;
        nameY2 = botLeft.y;
      } else if (namePosP2 === "inCenterPos") {
        nameX2 = inCenter.x;
        nameY2 = inCenter.y;
      } else if (namePosP2 === "middleLeftPos") {
        nameX2 = middleLeft.x;
        nameY2 = middleLeft.y;
      } else if (namePosP2 === "botCenterPos") {
        nameX2 = botCenter.x;
        nameY2 = botCenter.y;
      }

      //Fade in/out the name + Stroke Weight
      if (counter < 800) {
        if (nameAlpha <= 255) {
          nameAlpha += 10;
        }
        if (sWeight <= 3) {
          sWeight += 0.01;
        }
      } else if (counter >= 800 && counter < 900) {
        if (nameAlpha >= 0) {
          nameAlpha -= 10;
        }
        sWeight -= 0.02;
      } else if (counter >= 900) {
        sWeight = 0;
        nameAlpha = 0;

      }

      strokeWeight(sWeight);

      push();
      noFill();
      stroke(255, 0, 0);
      scribbleL3.scribbleLine(0, P2L1y, P2L2x, height);
      scribbleL4.scribbleLine(P2L2x, height, width, P2L3y);
      scribbleL5.scribbleLine(width, P2L3y, P2L4x, 0);
      scribbleL6.scribbleLine(P2L4x, 0, 0, P2L1y);
      pop();


      textAlign(CENTER, CENTER);
      textFont(fontAnother);
      textSize(36);
      fill(255, nameAlpha);
      text('Bryan Pierce', nameX2, nameY2);
      fill(255, 0, 0, nameAlpha);
      text('B   n P  rce', nameX2 + random(-1, 1), nameY2 + random(-1, 1));


      //SHOT P2S3
    } else if (counter >= 900 && counter < 1200) {
      clear();
      image(seq2Shot3, 0, 0);

      if (playing) {
        seq2Shot3.play();
      } else {
        seq2Shot3.pause();
      }

      if (namePosP3 === "topLeftPos") {
        nameX3 = topLeft.x;
        nameY3 = topLeft.y;
      } else if (namePosP3 === "topRightPos") {
        nameX3 = topRight.x;
        nameY3 = topRight.y;
      } else if (namePosP3 === "botRightPos") {
        nameX3 = botRight.x;
        nameY3 = botRight.y;
      } else if (namePosP3 === "botLeftPos") {
        nameX3 = botLeft.x;
        nameY3 = botLeft.y;
      } else if (namePosP3 === "inCenterPos") {
        nameX3 = inCenter.x;
        nameY3 = inCenter.y;
      } else if (namePosP3 === "middleLeftPos") {
        nameX3 = middleLeft.x;
        nameY3 = middleLeft.y;
      } else if (namePosP3 === "botCenterPos") {
        nameX3 = botCenter.x;
        nameY3 = botCenter.y;
      }

      if (counter < 1100) {
        if (nameAlpha <= 255) {
          nameAlpha += 10;
        }
        if (sWeight <= 3) {
          sWeight += 0.01;
        }
      } else if (counter >= 1100 && counter < 1200) {
        if (nameAlpha >= 0) {
          nameAlpha -= 10;
        }
        sWeight -= 0.02;
      } else if (counter >= 1200) {
        sWeight = 0;
        nameAlpha = 0;
      }

      strokeWeight(sWeight);

      push();
      noFill();
      stroke(255, 0, 0, 125);
      for (var i = 0; i <= width; i = i + width / 5) {
        stroke(255, 0, 0, 125);
        scribbleC.scribbleCurve(0 + i, 0, 0 + i, height, nameX3 + curvDelta, nameY3 - curvDelta, curvPx, curvPy);
      }
      pop();

      textAlign(CENTER, CENTER);
      textFont(fontAnother);
      textSize(36);
      fill(255, nameAlpha);
      text('Dan  l Shif  an', nameX3, nameY3);
      // textSize(42);
      fill(255, 0, 0, nameAlpha);
      text('D  iel S   fm n', nameX3 + random(-1, 1), nameY3 + random(-1, 1));


    } else if (counter >= 1200 && counter < 1500) {
      clear();
      image(seq2Shot4, 0, 0);

      if (playing) {
        seq2Shot4.play();
      } else {
        seq2Shot4.pause();
      }

      if (namePosP4 === "topLeftPos") {
        nameX4 = topLeft.x;
        nameY4 = topLeft.y;
      } else if (namePosP4 === "topRightPos") {
        nameX4 = topRight.x;
        nameY4 = topRight.y;
      } else if (namePosP4 === "botRightPos") {
        nameX4 = botRight.x;
        nameY4 = botRight.y;
      } else if (namePosP4 === "botLeftPos") {
        nameX4 = botLeft.x;
        nameY4 = botLeft.y;
      } else if (namePosP4 === "inCenterPos") {
        nameX4 = inCenter.x;
        nameY4 = inCenter.y;
      } else if (namePosP4 === "middleLeftPos") {
        nameX4 = middleLeft.x;
        nameY4 = middleLeft.y;
      } else if (namePosP4 === "botCenterPos") {
        nameX4 = botCenter.x;
        nameY4 = botCenter.y;
      }


      if (counter < 1400) {
        if (nameAlpha <= 255) {
          nameAlpha += 10;
        }
        if (sWeight <= 3) {
          sWeight += 0.01;
        }
      } else if (counter >= 1400 && counter < 1500) {
        if (nameAlpha >= 0) {
          nameAlpha -= 10;
        }
        sWeight -= 0.02;
      } else if (counter >= 1500) {
        sWeight = 0;
        nameAlpha = 0;
      }


      push();
      stroke(255, 0, 0);
      strokeWeight(sWeight);
      scribbleRectFin1.scribbleRoundedRect(RectFin1.x, RectFin1.y, RectFinSize, RectFinSize, 5);
      scribbleRectFin2.scribbleRoundedRect(RectFin2.x, RectFin2.y, RectFinSize, RectFinSize, 5);
      scribbleRectFin3.scribbleRoundedRect(RectFin3.x, RectFin3.y, RectFinSize, RectFinSize, 5);
      scribbleRectFin4.scribbleRoundedRect(RectFin4.x, RectFin4.y, RectFinSize, RectFinSize, 5);
      // stroke(255, 0, 0, 125);
      scribbleLP1.scribbleLine(RectFin1.x, RectFin1.y, RectFin2.x, RectFin2.y);
      scribbleLP2.scribbleLine(RectFin2.x, RectFin2.y, RectFin3.x, RectFin3.y);
      scribbleLP3.scribbleLine(RectFin3.x, RectFin3.y, RectFin4.x, RectFin4.y);
      pop();


      textAlign(CENTER, CENTER);
      textFont(fontAnother);
      textSize(36);
      fill(255, nameAlpha);
      text('Jeremy Dowell', nameX4, nameY4);
      // textSize(42);
      fill(255, 0, 0, nameAlpha);
      text('Je  my  owe l', nameX4 + random(-1, 1), nameY4 + random(-1, 1));


    } else if (counter >= 1500 && counter < 1686) {
      clear();
      image(seq3Shot1, 0, 0);

      if (playing) {
        seq3Shot1.play();
      } else {
        seq3Shot1.pause();
      }

      textAlign(CENTER, CENTER);
      textFont(fontAnother);
      textSize(52);
      fill(0);

      text(clue[clueTxt], width * .5 + random(-5, 0), height * .5);

    } else if (counter >= 1686 && counter < 2008) {
      clear();
      image(seq4Shot1, 0, 0);

      if (playing) {
        seq4Shot1.play();
      } else {
        seq4Shot1.pause();
      }

      //THE FINAL MESSAGE
    } else if (counter >= 2008) {
      clear();
      counter = 2010;
      background(0);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      noStroke();
      text("THIS IS JUST THE BEGINNING", width / 2, height / 3);
      textSize(22)
      text("To discover an other version, click on\n the button 'Generate New Credits' then hit 'Play'", width / 2, height / 1.5);
    }
  }

}


function toggleVid() {
  if (playing) {
    thePlayButton.value('play');
    music.pause();
  } else {
    thePlayButton.value('pause');
    music.play();
  }
  playing = !playing;
}
