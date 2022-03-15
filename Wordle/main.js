// Disable typing in all feilds besides the first line
let loopThirty = 6;
while(loopThirty < 31) {
  document.getElementById("a-" + loopThirty).disabled=true;
  loopThirty++;
}

// Get a randomized word from an array (or API) 
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }
  
  let theWord = array[0];
  let arrayOfLetters = theWord.split(/(?!$)/);
  console.log(arrayOfLetters);

  setTheWord(arrayOfLetters);
}

function setTheWord(arrayOfLetters) {
  document.getElementById("a-1").data = arrayOfLetters[0];
  document.getElementById("a-6").data = arrayOfLetters[0];
  document.getElementById("a-11").data = arrayOfLetters[0];
  document.getElementById("a-16").data = arrayOfLetters[0];
  document.getElementById("a-21").data = arrayOfLetters[0];
  document.getElementById("a-26").data = arrayOfLetters[0];

  document.getElementById("a-2").data = arrayOfLetters[1];
  document.getElementById("a-7").data = arrayOfLetters[1];
  document.getElementById("a-12").data = arrayOfLetters[1];
  document.getElementById("a-17").data = arrayOfLetters[1];
  document.getElementById("a-22").data = arrayOfLetters[1];
  document.getElementById("a-27").data = arrayOfLetters[1];

  document.getElementById("a-3").data = arrayOfLetters[2];
  document.getElementById("a-8").data = arrayOfLetters[2];
  document.getElementById("a-13").data = arrayOfLetters[2];
  document.getElementById("a-18").data = arrayOfLetters[2];
  document.getElementById("a-23").data = arrayOfLetters[2];
  document.getElementById("a-28").data = arrayOfLetters[2];

  document.getElementById("a-4").data = arrayOfLetters[3];
  document.getElementById("a-9").data = arrayOfLetters[3];
  document.getElementById("a-14").data = arrayOfLetters[3];
  document.getElementById("a-19").data = arrayOfLetters[3];
  document.getElementById("a-24").data = arrayOfLetters[3];
  document.getElementById("a-29").data = arrayOfLetters[3];

  document.getElementById("a-5").data = arrayOfLetters[4];
  document.getElementById("a-10").data = arrayOfLetters[4];
  document.getElementById("a-15").data = arrayOfLetters[4];
  document.getElementById("a-20").data = arrayOfLetters[4];
  document.getElementById("a-25").data = arrayOfLetters[4];
  document.getElementById("a-30").data = arrayOfLetters[4];
}


function reply_click(clicked_id){
  lineOne();
  lineTwo();
  lineThree();
  lineFour();
  lineFive();
  lineSix();
  
}

function lineOne() {
  if(document.getElementById("a-1").value && document.getElementById("a-2").value && document.getElementById("a-3").value  
      && document.getElementById("a-4").value && document.getElementById("a-5").value) 
  {
    let loopFive = 1;
    while(loopFive < 6) {
      orangeLineOne()
      if(document.getElementById("a-" + loopFive).value === document.getElementById("a-" + loopFive).data) {
        $("#a-" + loopFive).css({backgroundColor: "#18746b",color: "#fff"});
      } 
      loopFive++;
    }  
    // Disable typing in all feilds besides the first line
    let loopOne = 1;
    while(loopOne < 6) {
      document.getElementById("a-" + loopOne).disabled=true;
      loopOne++;
    }

    let loopActive = 6;
    while(loopActive < 11) {
      document.getElementById("a-" + loopActive).disabled=false;
      loopActive++;
    }
  }
}

function lineTwo() {
  if(document.getElementById("a-6").value && document.getElementById("a-7").value && document.getElementById("a-8").value  
      && document.getElementById("a-9").value && document.getElementById("a-10").value) 
  {
    orangeLineTwo()
    let loopFive = 6;
    while(loopFive < 11) {
      if(document.getElementById("a-" + loopFive).value === document.getElementById("a-" + loopFive).data) {
        $("#a-" + loopFive).css({backgroundColor: "#18746b",color: "#fff"});
      }
      loopFive++;
    }

    let loopOne = 6;
    while(loopOne < 11) {
      document.getElementById("a-" + loopOne).disabled=true;
      loopOne++;
    }

    let loopActive = 11;
    while(loopActive < 16) {
      document.getElementById("a-" + loopActive).disabled=false;
      loopActive++;
    }
  }
}

function lineThree() {
  if(document.getElementById("a-11").value && document.getElementById("a-12").value && document.getElementById("a-13").value  
      && document.getElementById("a-14").value && document.getElementById("a-15").value) 
  {
    orangeLineThree()
    let loopFive = 11;
    while(loopFive < 16) {
      if(document.getElementById("a-" + loopFive).value === document.getElementById("a-" + loopFive).data) {
        $("#a-" + loopFive).css({backgroundColor: "#18746b",color: "#fff"});
      }
      loopFive++;
    }

    let loopOne = 11;
    while(loopOne < 16) {
      document.getElementById("a-" + loopOne).disabled=true;
      loopOne++;
    }

    let loopActive = 16;
    while(loopActive < 21) {
      document.getElementById("a-" + loopActive).disabled=false;
      loopActive++;
    }
  }
}

function lineFour() {
  if(document.getElementById("a-16").value && document.getElementById("a-17").value && document.getElementById("a-18").value  
      && document.getElementById("a-19").value && document.getElementById("a-20").value) 
  {
    orangeLineFour()
    let loopFive = 16;
    while(loopFive < 21) {
      if(document.getElementById("a-" + loopFive).value === document.getElementById("a-" + loopFive).data) {
        $("#a-" + loopFive).css({backgroundColor: "#18746b",color: "#fff"});
      }
      loopFive++;
    }
    let loopOne = 16;
    while(loopOne < 21) {
      document.getElementById("a-" + loopOne).disabled=true;
      loopOne++;
    }

    let loopActive = 21;
    while(loopActive < 26) {
      document.getElementById("a-" + loopActive).disabled=false;
      loopActive++;
    }
  }
}

function lineFive() {
  if(document.getElementById("a-21").value && document.getElementById("a-22").value && document.getElementById("a-23").value  
      && document.getElementById("a-24").value && document.getElementById("a-25").value) 
  {
    orangeLineFive()
    let loopFive = 21;
    while(loopFive < 26) {
      if(document.getElementById("a-" + loopFive).value === document.getElementById("a-" + loopFive).data) {
        $("#a-" + loopFive).css({backgroundColor: "#18746b",color: "#fff"});
      }
      loopFive++;
    }

    let loopOne = 21;
    while(loopOne < 26) {
      document.getElementById("a-" + loopOne).disabled=true;
      loopOne++;
    }

    let loopActive = 26;
    while(loopActive < 31) {
      document.getElementById("a-" + loopActive).disabled=false;
      loopActive++;
    }
  }
}

function lineSix() {
  if(document.getElementById("a-26").value && document.getElementById("a-27").value && document.getElementById("a-28").value  
      && document.getElementById("a-29").value && document.getElementById("a-30").value) 
  {
    orangeLineSix()
    let loopFive = 26;
    while(loopFive < 31) {
      if(document.getElementById("a-" + loopFive).value === document.getElementById("a-" + loopFive).data) {
        $("#a-" + loopFive).css({backgroundColor: "#18746b",color: "#fff"});
      }
      loopFive++;
    }
  }
}


