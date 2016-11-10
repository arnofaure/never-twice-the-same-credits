// Create a random sequence
// Based on the code by Jeremy Dowell

function shuffleSeq(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function randP0(n) {
  var nums = [0, 1, 2];
  shuffleSeq(nums);
  return nums.slice(0, n);
}

function randP1(n) {
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffleSeq(nums);
  return nums.slice(0, n);
}

function randP2(n) {
  var nums = [0, 1, 2];
  shuffleSeq(nums);
  return nums.slice(0, n);
}


//Check individual shots (5sec./each)
function checkP1() {

  if (seq1Shot1 === 0) {
    seq1Shot1 = shotP1S1;
  } else if (seq1Shot1 === 1) {
    seq1Shot1 = shotP1S2;
  } else if (seq1Shot1 === 2) {
    seq1Shot1 = shotP1S3;
  }
}

function checkP2S1() {

  if (seq2Shot1 === 0) {
    seq2Shot1 = shotP2S1;
    namePosP1 = "botRightPos";

  } else if (seq2Shot1 === 1) {
    seq2Shot1 = shotP2S2;
    namePosP1 = "topLeftPos";

  } else if (seq2Shot1 === 2) {
    seq2Shot1 = shotP2S3;
    namePosP1 = "inCenterPos";

  } else if (seq2Shot1 === 3) {
    seq2Shot1 = shotP2S4;
    namePosP1 = "middleLeftPos";

  } else if (seq2Shot1 === 4) {
    seq2Shot1 = shotP2S5;
    namePosP1 = "botLeftPos";

  } else if (seq2Shot1 === 5) {
    seq2Shot1 = shotP2S6;
    namePosP1 = "inCenterPos";

  } else if (seq2Shot1 === 6) {
    seq2Shot1 = shotP2S7;
    namePosP1 = "botRightPos";

  } else if (seq2Shot1 === 7) {
    seq2Shot1 = shotP2S8;
    namePosP1 = "inCenterPos";

  } else if (seq2Shot1 === 8) {
    seq2Shot1 = shotP2S9;
    namePosP1 = "botLeftPos";

  } else if (seq2Shot1 === 9) {
    seq2Shot1 = shotP2S10;
    namePosP1 = "botLeftPos";

  }

  // } else if (seq2Shot1 === 10) {
  //   seq2Shot1 = shotP2S11;
  //   namePosP1 = "inCenterPos";
  // }
}

function checkP2S2() {

  if (seq2Shot2 === 0) {
    seq2Shot2 = shotP2S1;
    namePosP2 = "botRightPos";

  } else if (seq2Shot2 === 1) {
    seq2Shot2 = shotP2S2;
    namePosP2 = "topLeftPos";

  } else if (seq2Shot2 === 2) {
    seq2Shot2 = shotP2S3;
    namePosP2 = "inCenterPos";

  } else if (seq2Shot2 === 3) {
    seq2Shot2 = shotP2S4;
    namePosP2 = "middleLeftPos";

  } else if (seq2Shot2 === 4) {
    seq2Shot2 = shotP2S5;
    namePosP2 = "botLeftPos";

  } else if (seq2Shot2 === 5) {
    seq2Shot2 = shotP2S6;
    namePosP2 = "inCenterPos";

  } else if (seq2Shot2 === 6) {
    seq2Shot2 = shotP2S7;
    namePosP2 = "botRightPos";

  } else if (seq2Shot2 === 7) {
    seq2Shot2 = shotP2S8;
    namePosP2 = "inCenterPos";

  } else if (seq2Shot2 === 8) {
    seq2Shot2 = shotP2S9;
    namePosP2 = "botLeftPos";

  } else if (seq2Shot2 === 9) {
    seq2Shot2 = shotP2S10;
    namePosP2 = "botLeftPos";

  }
}


function checkP2S3() {

  if (seq2Shot3 === 0) {
    seq2Shot3 = shotP2S1;
    namePosP3 = "botRightPos";

  } else if (seq2Shot3 === 1) {
    seq2Shot3 = shotP2S2;
    namePosP3 = "topLeftPos";

  } else if (seq2Shot3 === 2) {
    seq2Shot3 = shotP2S3;
    namePosP3 = "inCenterPos";

  } else if (seq2Shot3 === 3) {
    seq2Shot3 = shotP2S4;
    namePosP3 = "middleLeftPos";

  } else if (seq2Shot3 === 4) {
    seq2Shot3 = shotP2S5;
    namePosP3 = "botLeftPos";

  } else if (seq2Shot3 === 5) {
    seq2Shot3 = shotP2S6;
    namePosP3 = "inCenterPos";

  } else if (seq2Shot3 === 6) {
    seq2Shot3 = shotP2S7;
    namePosP3 = "botRightPos";

  } else if (seq2Shot3 === 7) {
    seq2Shot3 = shotP2S8;
    namePosP3 = "inCenterPos";

  } else if (seq2Shot3 === 8) {
    seq2Shot3 = shotP2S9;
    namePosP3 = "botLeftPos";

  } else if (seq2Shot3 === 9) {
    seq2Shot3 = shotP2S10;
    namePosP3 = "botLeftPos";

  }
}

function checkP2S4() {

  if (seq2Shot4 === 0) {
    seq2Shot4 = shotP2S1;
    namePosP4 = "botRightPos";

  } else if (seq2Shot4 === 1) {
    seq2Shot4 = shotP2S2;
    namePosP4 = "topLeftPos";

  } else if (seq2Shot4 === 2) {
    seq2Shot4 = shotP2S3;
    namePosP4 = "inCenterPos";

  } else if (seq2Shot4 === 3) {
    seq2Shot4 = shotP2S4;
    namePosP4 = "middleLeftPos";

  } else if (seq2Shot4 === 4) {
    seq2Shot4 = shotP2S5;
    namePosP4 = "botLeftPos";

  } else if (seq2Shot4 === 5) {
    seq2Shot4 = shotP2S6;
    namePosP4 = "inCenterPos";

  } else if (seq2Shot4 === 6) {
    seq2Shot4 = shotP2S7;
    namePosP4 = "botRightPos";

  } else if (seq2Shot4 === 7) {
    seq2Shot4 = shotP2S8;
    namePosP4 = "inCenterPos";

  } else if (seq2Shot4 === 8) {
    seq2Shot4 = shotP2S9;
    namePosP4 = "botLeftPos";

  } else if (seq2Shot4 === 9) {
    seq2Shot4 = shotP2S10;
    namePosP4 = "botLeftPos";
  }
}

function checkP3S1() {

  if (seq3Shot1 === 0) {
    seq3Shot1 = shotP3S1;
  } else if (seq3Shot1 === 1) {
    seq3Shot1 = shotP3S2;
  } else if (seq3Shot1 === 2) {
    seq3Shot1 = shotP3S3;
  }
}
