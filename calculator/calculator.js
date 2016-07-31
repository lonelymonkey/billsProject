
  (function(factory){
    window.myCalculator = factory({});
  }(function(myCalculator){
    var nonNum = '+-/*.^';
    var num = '1234567890()';
    var bracket = '()';
    var count;
    var count2;
    var result;
    var buttons;
    var config = {
    };

    var registeredFunctions = {};

    registeredFunctions.expression = function(key){
      console.log(key);
      console.log(buttons);
      console.log(result);
      if(result.innerHTML === '') {
        if(buttons[key].innerHTML === '-') {
          result.innerHTML += buttons[key].innerHTML;
        }
        else if (nonNum.indexOf(buttons[key].innerHTML) > -1){
            result.innerHTML = '';
        }
        else {
          result.innerHTML += buttons[key].innerHTML;
        }
      }
      else {
         if(nonNum.indexOf(buttons[key].innerHTML) > -1)
         {
           if(num.indexOf(result.innerHTML.slice(-1)) > -1) {
             result.innerHTML += buttons[key].innerHTML;
         }
          else{
            result.innerHTML = result.innerHTML.slice(0,-1) + buttons[key].innerHTML;
          }
         }
         else {
           result.innerHTML += buttons[key].innerHTML;
         }
      }
      console.log(result.innerHTML);
    }

    registeredFunctions.sqrt = function(){
        result.innerHTML += 'sqrt(';
        console.log(result.innerHTML);
    }

    function saveConfig(cfg) {
      $.extend(config,cfg);
    }

    function buildUIFrame() {
      var view = '';
      view += '' + '<div id="background">'+
              '<div id="screen">'+
                '<ul class="spacing">'+
                  '<li> <button class="key">C</button> </li>'+
                  '<li> <div id="display">324234</div></li>'+
                '</ul>'+
              '</div>'+
              '<div id="keypad">'+
                '<div id="numbers">'+
                  '<ul class="spacing">'+
                    '<li> <button class="key">1</button> </li>'+
                    '<li> <button class="key">2</button> </li>'+
                    '<li> <button class="key">3</button> </li>'+
                  '</ul>'+
                  '<ul class="spacing">'+
                    '<li> <button class="key">4</button> </li>'+
                    '<li> <button class="key">5</button> </li>'+
                    '<li> <button class="key">6</button> </li>'+
                  '</ul>'+
                  '<ul class="spacing">'+
                    '<li> <button class="key">7</button> </li>'+
                    '<li> <button class="key">8</button> </li>'+
                    '<li> <button class="key">9</button> </li>'+
                  '</ul>'+
                  '<ul class="spacing">'+
                    '<li> <button class="key">0</button> </li>'+
                    '<li> <button class="key">.</button> </li>'+
                    '<li> <div id="green"><button class="key">=</button></div> </li>'+
                  '</ul>'+
                '</div>'+
                '<div id="operator">'+
                  '<ul class="spacing">'+
                    '<li><button class="key">+</button>  </li>'+
                    '<li> <button class="key">-</button> </li>'+
                    '<li> <button class="key">/</button> </li>'+
                    '<li> <button class="key">*</button> </li>'+
                  '</ul>'+
                '</div>'+
                '<div id="operator">'+
                  '<ul class="spacing">'+
                    '<li><button class="key">COS</button>  </li>'+
                    '<li> <button class="key">SINE</button> </li>'+
                    '<li> <button class="key">TAN</button> </li>'+
                    '<li> <button class="key">^</button> </li>'+
                  '</ul>'+
                '</div>'+
                '<div id="operator">'+
                  '<ul class="spacing">'+
                    '<li><button class="key">(</button>  </li>'+
                    '<li> <button class="key">)</button> </li>'+
                    '<li> <button class="key">sqrt</button> </li>'+
                    '<li> <button class="key">clear</button> </li>'+
                  '</ul>'+
                '</div>'+
              '</div>'+
              '</div>'+
            '';

            $('#'+config.containerId).html(view);
            bindEvents();
    }

    function bindEvents(){
      var i;
      $('.key').each(function(){
        $(this).click(function(){
          var key = $(this).html();

          switch (key) {
            case '.':
             var index;
             for(i = 0; i < buttons.length; i++){
               if(buttons[i] == key)
               console.log(index);
               index = i;
             }
             console.log(index);
             registeredFunctions['expression'](index);
             break;
             default:
             registeredFunctions[key]();
         }

//          if (typeof(registeredFunctions[key]) == 'function') {
//               registeredFunctions[key]();
//               console.log(registeredFunctions);

//        } else {
  //          console.log('this function is not supported yet');
        //  }

        });
      });
    }

    myCalculator.load = function(cfg){
      saveConfig(cfg);
      buildUIFrame();
      result = document.getElementById('display');
      console.log(result);
      buttons = document.getElementsByClassName('key');
      console.log(buttons);
      buttons2 = document.getElementsByClassName('key2');
    }

    return myCalculator;
  }));



function expression(key) {


  if(result.innerHTML === '') {
    if(buttons[key].innerHTML === '-') {
      result.innerHTML += buttons[key].innerHTML;
    }
    else if (nonNum.indexOf(buttons[key].innerHTML) > -1){
        result.innerHTML = '';
    }
    else {
      result.innerHTML += buttons[key].innerHTML;
    }
  }
  else {
     if(nonNum.indexOf(buttons[key].innerHTML) > -1)
     {
       if(num.indexOf(result.innerHTML.slice(-1)) > -1) {
         result.innerHTML += buttons[key].innerHTML;
     }
      else{
        result.innerHTML = result.innerHTML.slice(0,-1) + buttons[key].innerHTML;
      }
     }
     else {
       result.innerHTML += buttons[key].innerHTML;
     }
  }
  console.log(result.innerHTML);
}

function calculate() {
  //result.innerHTML = "0.6*9-6*sqrt(4346^2+483290)-666/96*sqrt(6)";
/*  var expo = [];
  var expoLength;
  var i;
  var numOfOperator;
  var tempExpo;*/

  //variables for calculating power inside an expression
  var nonNumBraket = '+-/*.^()';
  var countNumR;
  var countNumL;
  var right;
  var left;
  var numOfOccurences;
  var numOfOccurencesArray = [];
  var j = 0;
  var product;
  var productArray = [];
  var productOriginalArray = [];
  var tempResult;

  //variables for calculating square root
  var endSR = ')';
  var detectingSR = 't';
  var numOfOccurencesSR;
  var numOfOccurencesArraySR = [];
  var k = 0;
  var productSR;
  var productArraySR = [];
  var productOriginalArraySR = [];
  var countNumSR;

  numOfOccurences = result.innerHTML.indexOf('^');
  while(numOfOccurences >= 0) {
    numOfOccurencesArray[j] = numOfOccurences;
    j++;
    numOfOccurences = result.innerHTML.indexOf('^', numOfOccurences+1);
  }

  console.log(numOfOccurencesArraySR);


/*  var separators = ['\\\+', '-', '\\*', '/', '\\\(', '\\\)'];
  console.log(separators.join('|'));
  var tokens = result.innerHTML.split(new RegExp('[-+()*'/':? ]', 'g'));
      tokens = tokens.filter(Boolean);
  var nonTokens = result.innerHTML.replace(/[0-9]|\^|\./g, '');*/


  for(i = 0; i < numOfOccurencesArray.length; i++) {
    countNumR = 0;

    while (nonNumBraket.indexOf(result.innerHTML.substring(numOfOccurencesArray[i]+countNumR+1, numOfOccurencesArray[i]+countNumR+2)) == -1) {
      countNumR++;
    //  console.log(countNumR);
    }

    right = result.innerHTML.substring(numOfOccurencesArray[i]+1,numOfOccurencesArray[i]+countNumR+1);

    countNumL = 0;

    while (nonNumBraket.indexOf(result.innerHTML.substring(numOfOccurencesArray[i]-countNumL-1, numOfOccurencesArray[i]-countNumL)) == -1) {
      countNumL++;
    //  console.log(countNumL);
    }

    left = result.innerHTML.substring(numOfOccurencesArray[i]-countNumL,numOfOccurencesArray[i]);

    //console.log(right);
    //console.log(left);
    //console.log(numOfOccurencesArray[i] - countNumL);
    //console.log(numOfOccurencesArray[i] + countNumR + 1);
  productOriginalArray[i] = result.innerHTML.substring(numOfOccurencesArray[i] - countNumL,numOfOccurencesArray[i] + countNumR + 1);
  product = Math.pow(left,right);
  productArray[i] = product;
  }
  tempResult = result.innerHTML;

  for(i=0; i<productOriginalArray.length; i++) {
    tempResult = tempResult.replace(productOriginalArray[i],productArray[i]);
  }

  console.log(productArray);
  console.log(productOriginalArray);
  console.log(tempResult);

  numOfOccurencesSR = tempResult.indexOf('t');
  while(numOfOccurencesSR >= 0) {
    numOfOccurencesArraySR[k] = numOfOccurencesSR;
    k++;
    numOfOccurencesSR = tempResult.indexOf('t', numOfOccurencesSR+1);
  }


  for(k = 0; k < numOfOccurencesArraySR.length; k++) {
    countNumSR = 0;

    while(endSR.indexOf(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3)) == -1) {

//  console.log(endSR.indexOf(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3)));
//  console.log(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3));
      countNumSR++;
    }

    // console.log(countNumSR);
     console.log(tempResult.substring(numOfOccurencesArraySR[k] + 2,numOfOccurencesArraySR[k] + countNumSR + 2));
  //   console.log(numOfOccurencesArraySR[i] + countNumSR);
    productOriginalArraySR[k] = tempResult.substring(numOfOccurencesArraySR[k] + 2,numOfOccurencesArraySR[k] + countNumSR + 2);
   productSR = Math.sqrt(eval(productOriginalArraySR[k]));
    productArraySR[k] = productSR;
  }

  console.log(productArraySR);
  console.log(productOriginalArraySR);

  for(i=0; i<productOriginalArraySR.length; i++) {
    tempResult = tempResult.replace('sqrt(' + productOriginalArraySR[i] + ')',productArraySR[i]);
  }
  console.log(tempResult);
  //console.log(tempResult.substring(numOfOccurencesArraySR[0]+2, numOfOccurencesArraySR[0]+3));
  /*var tokensLength = tokens.length;
  var nonTokensLength = nonTokens.length;
//    console.log(tokensLength);
  var arrayCount;
  var nonTokensArray = [];
  var firstBracketFlag = '';

  var nonTokensArrayBracket = [];

  var finalExp = '';

  for(i = 0; i < nonTokensLength; i++) {
    nonTokensArray[i] = nonTokens.slice(i,i+1);
}

  firstBracketFlag = nonTokensArray[0];

  console.log(nonTokensArray);
for(i=0; i < nonTokensArray.length; i++) {
  if(nonTokensArray[i] === '(') {
    nonTokensArrayBracket[i] = nonTokensArray[i-1] + nonTokensArray[i];
    }
  else if(nonTokensArray[i] == ')') {
    nonTokensArrayBracket[i] =  nonTokensArray[i] + nonTokensArray[i+1];
  }
  else {
    nonTokensArrayBracket[i] = '';
  }
}
console.log(nonTokensArrayBracket);
for(i=0; i< nonTokensArrayBracket.length; i++) {
    nonTokensArrayBracket[i-1] = nonTokensArrayBracket[i];
}

 console.log(nonTokensArrayBracket);



for(i=0; i< nonTokensArray.length; i++) {
  if(bracket.indexOf(nonTokensArray[i]) > -1) {
    nonTokensArray.splice(i,1);
  }
}
console.log(nonTokensArray);

for(i=0; i < nonTokensArray.length; i++) {
  if(nonTokensArrayBracket[i] !== '') {
    nonTokensArray[i] = nonTokensArrayBracket[i];
  }
}*/

  switch (result.innerHTML.slice(-1)) {
    case '.':
    case '*':
    case '/':
    case '+':
    case '-':
    case '^':
     result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
     break;
    default:
     result.innerHTML = result.innerHTML;
  }

  /*if(result.innerHTML.indexOf('^') > -1) {
  for( arrayCount = 0; arrayCount < tokensLength; arrayCount++) {
    if(tokens[arrayCount].indexOf('^') > -1) {
      expo = tokens[arrayCount].split('^');
    //  console.log(expo);
      expoLength = expo.length;
    //  console.log(expo.length);
      tempExpo = expo[0];
    //  console.log(tempExpo);
      for(i = 1; i < expoLength; i++) {
         tempExpo = Math.pow(tempExpo,expo[i]);
    //     console.log(tempExpo);
      }
     tokens[arrayCount] = tempExpo.toString();
    }
  }

console.log(tokens);
console.log(nonTokensArray);
  if(firstBracketFlag === '(') {

  }
  nonTokensArray.unshift('(');
console.log(nonTokensArray);
  for( count = 0; count < tokensLength; count++) {
      finalExp += tokens[count];
      if(count < nonTokensArray.length)
      finalExp += nonTokensArray[count];
      console.log(finalExp);
  }
  console.log(finalExp);
  result.innerHTML = eval(finalExp);
}
  else {
    result.innerHTML = eval(result.innerHTML);
  }*/
  result.innerHTML = eval(tempResult);
}

function erase() {
  result.innerHTML = '';
}

function multiply() {
  result.innerHTML += '*';
}

function cosine() {
  result.innerHTML = Math.cos(result.innerHTML);
}

function sine() {
  result.innerHTML = Math.sin(result.innerHTML);
}

function tangent() {
  result.innerHTML = Math.tan(result.innerHTML);
}

function exponent() {
  result.innerHTML += '^';

}

function bracketL() {
  result.innerHTML += '(';
}

function bracketR() {
  result.innerHTML += ')';
}

function sqrt() {
  result.innerHTML += 'sqrt(';
}

function clear() {
  result.innerHTML =  result.innerHTML.substring(0, result.innerHTML.length - 1);
}
//$(buttons[y]).removeClass('key').addClass('key2');
/*  function secButtons() {

  for(count = 19; count > 16; count--) {
    if(buttons[count].innerHTML === 'COS') {
      $(buttons[count]).removeClass('key').addClass('key2');
    }

    else if(buttons[count].innerHTML === 'SINE') {
      $(buttons[count]).removeClass('key').addClass('key2');
    }

    else if(buttons[count].innerHTML === 'TAN') {
      $(buttons[count]).removeClass('key').addClass('key2');
    }
    }

    for(count2 = 2; count2 => 0; count2--) {
      console.log(buttons2[count2].innerHTML);
      if(buttons2[count2].innerHTML === 'COS') {
        buttons2[count2].innerHTML = '(';
        buttons2[count2].removeEventListener("click", cosine());
      //  buttons2[count2].addEventListener("click", function(){bracketL();});
      }
      else if(buttons2[count2].innerHTML === 'SINE') {
        buttons2[count2].innerHTML = ')';
        buttons2[count2].removeEventListener("click", function(){sine();});
    //    buttons2[count2].addEventListener("click", function(){bracketR();});
      }
      else if(buttons2[count2].innerHTML === 'TAN') {
        buttons2[count2].innerHTML = 'sqrt';
    //    buttons2[count2].addEventListener("click", function(){sqrt();});
      }
    }
}

console.log(buttons2);
console.log(buttons);
buttons2[0].addEventListener('click', function(){secButtons()});*/

for( count = 0; count < buttons.length; count += 1) {

if(buttons[count].innerHTML === '=') {
  (function(count) {
    buttons[count].addEventListener("click", function(){calculate();});
  }(count));
  }
else if (buttons[count].innerHTML === 'C') {
  buttons[count].addEventListener("click", function(){erase();});
}

else if(buttons[count].innerHTML === 'COS') {
  buttons[count].addEventListener("click", function(){cosine();});
}

else if(buttons[count].innerHTML === 'SINE') {
  buttons[count].addEventListener("click", function(){sine();});
}

else if(buttons[count].innerHTML === 'TAN') {
  buttons[count].addEventListener("click", function(){tangent();});
}

else if(buttons[count].innerHTML === 'sqrt') {
  buttons[count].addEventListener("click", function(){sqrt();});
}

else if(buttons[count].innerHTML === 'clear') {
  buttons[count].addEventListener("click", function(){clear();});
}


  else  {
  (function(count) {
    buttons[count].addEventListener("click", function(){expression(count);});
  }(count));
};
};
