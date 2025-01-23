let table;
let r = 0;
let g = 0;
let b = 0;
let select;
let moo, cry, hehe;

function setup() {
  createCanvas(800, 700);
  select = createSelect();
  select.position(238);
  select.option('--Select Mood Visualisation type--');
  select.option('Graph');
  select.option('Colour Map');
  select.option('Reaction Pic');
}

function preload() {
  table = loadTable('mood.csv', 'csv', 'header');
  moo = loadImage('moo.jpg');
  cry = loadImage('cry.jpg');
  hehe = loadImage('hehe.jpg');
}

function graphing() {
  let weekOnePast = 0;
  let weekTwoPast = 0;
  let weekThreePast = 0;
  for(i=0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let weekOne = row.get("one");
    if (weekOne <= 6) {
      stroke(235, 70, 52);
    } else if (weekOne <=10) {
      stroke(80, 175, 199);
    }

    line(i*100, 200 - weekOnePast, (i+1)*100, 200 - weekOne*20);
    circle((i+1)*100, 200 - weekOne*20, 5);
    weekOnePast = weekOne*20;
  }

  for(j=0; j < table.getRowCount(); j++) {
    let rowTwo = table.getRow(j);
    let weekTwo = rowTwo.get("two");
    if (weekTwo <= 6) {
      stroke(235, 70, 52);
    } else if (weekTwo <=10) {
      stroke(80, 175, 199);
    }
    line(j*100, 400 - weekTwoPast, (j+1)*100, 400 - weekTwo*20);
    circle((j+1)*100, 400 - weekTwo*20, 5);
    weekTwoPast = weekTwo*20;
  }

  for(k=0; k < table.getRowCount(); k++) {
    let rowThree = table.getRow(k);
    let weekThree = rowThree.get("three");
    if (weekThree <= 6) {
      stroke(235, 70, 52);
    } else if (weekThree <=10) {
      stroke(80, 175, 199);
    }
    line(k*100, 600 - weekThreePast, (k+1)*100, 600 - weekThree*20);
    circle((k+1)*100, 600 - weekThree*20, 5);
    weekThreePast = weekThree*20;
  }
}

function colorMood() {
  let colorOne = 0;
  let colorTwo = 0;
  let colorThree = 0;

  for(i=0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let weekOne = row.getNum("one");
    let weekTwo = row.getNum("two");
    let weekThree = row.getNum("three");
    colorOne += weekOne;
    colorTwo += weekTwo;
    colorThree += weekThree;
  }
  noStroke();
  fill(235, 255 - colorOne*3, 128);
  rect(0,0,233,height);
  fill(235, 255 - colorTwo*3, 128);
  rect(233,0,233,height);
  fill(235, 255 - colorThree*3, 128);
  rect(466,0,233,height);
}

function reactionPic() {
  image(cry, 50, 300, 200, 200);
  image(moo, 300, 300, 200, 200);
  image(hehe, 550, 300, 200, 200);
}

function draw() {
  background(255);
  let visual = select.selected();
  if (visual === 'Graph') {
    graphing();
  } else if (visual === 'Colour Map') {
    colorMood();
  } else if (visual === 'Reaction Pic') {
    reactionPic();
  }
}