
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

    registeredFunctions.shift = function() {
        $(buttons[22]).off();
        $(buttons[23]).off();
        $(buttons[1]).off();

        $(buttons[22]).on('click', function(){
          result.innerHTML += 'hello';
        })

        $(buttons[22]).empty();
        $(buttons[22]).html('hello');

        $(buttons[23]).on('click', function(){
          result.innerHTML += 'world';
        })

        $(buttons[23]).empty();
        $(buttons[23]).html('world');

        $(buttons[1]).on('click', function(){
          registeredFunctions['unshift']();
        })

      }
      registeredFunctions.unshift = function(){
        $(buttons[22]).off();
        $(buttons[23]).off();
        $(buttons[1]).off();

        $(buttons[22]).on('click', function(){
          result.innerHTML += '(';
        });

        $(buttons[22]).empty();
        $(buttons[22]).html('(');

        $(buttons[23]).on('click', function(){
          result.innerHTML += ')';
        });

        $(buttons[23]).empty();
        $(buttons[23]).html(')');

        $(buttons[1]).on('click', function(){
          registeredFunctions['shift']();
        })
      }


    registeredFunctions.calculate = function() {
      //result.innerHTML = "0.6*9-6*sqrt(4346^2+483290)-666/96*sqrt(6)";
    /*  var expo = [];
      var expoLength;
      var i;
      var numOfOperator;
      var tempExpo;*/

      //variables for calculating power inside an expression
      var nonNumBraket = '+-/*^()';
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
      var detectingSR = 'r';
      var numOfOccurencesSR;
      var numOfOccurencesArraySR = [];
      var k = 0;
      var productSR;
      var productArraySR = [];
      var productOriginalArraySR = [];
      var countNumSR;





      //variables for calculating cosine
      var endCos = ')';
      var detectingCos = 's';
      var numOfOccurencesCos;
      var numOfOccurencesArrayCos = [];
      var productCos;
      var c = 0;
      var productArrayCos = [];
      var productOriginalArrayCos = [];
      var countNumCos;

      //variables for calculating tan/sin
      var endTrig = ')';
      var detectingTrig = 'n';
      var numOfOccurencesTrig;
      var numOfOccurencesArrayTrig = [];
      var productTrig;
      var t = 0;
      var productArrayTrig = [];
      var productOriginalArrayTrig = [];
      var countNumTrig;
      var trigTest = [];

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
        countNumR = 1;
        console.log(result.innerHTML.substring(numOfOccurencesArray[i]+countNumR+1, numOfOccurencesArray[i]+countNumR+2));
        while (nonNumBraket.indexOf(result.innerHTML.substring(numOfOccurencesArray[i]+countNumR+1, numOfOccurencesArray[i]+countNumR+2)) == -1) {
          countNumR++;
        //  console.log(countNumR);
        }

        right = result.innerHTML.substring(numOfOccurencesArray[i]+2,numOfOccurencesArray[i]+countNumR+1);

        countNumL = 1;

        while (nonNumBraket.indexOf(result.innerHTML.substring(numOfOccurencesArray[i]-countNumL-1, numOfOccurencesArray[i]-countNumL)) == -1) {
          countNumL++;
        //  console.log(countNumL);
        }

        left = result.innerHTML.substring(numOfOccurencesArray[i]-countNumL,numOfOccurencesArray[i] - 1);

        //console.log(right);
        //console.log(left);
        //console.log(numOfOccurencesArray[i] - countNumL);
        //console.log(numOfOccurencesArray[i] + countNumR + 1);
      productOriginalArray[i] = result.innerHTML.substring(numOfOccurencesArray[i] - countNumL - 1,numOfOccurencesArray[i] + countNumR + 2);
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

      numOfOccurencesSR = tempResult.indexOf('r');
      while(numOfOccurencesSR >= 0) {
        numOfOccurencesArraySR[k] = numOfOccurencesSR;
        k++;
        numOfOccurencesSR = tempResult.indexOf('r', numOfOccurencesSR+1);
      }


      for(k = 0; k < numOfOccurencesArraySR.length; k++) {
        countNumSR = 0;

        while(endSR.indexOf(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+3, numOfOccurencesArraySR[k]+countNumSR+4)) == -1) {

    //  console.log(endSR.indexOf(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3)));
    //  console.log(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3));
          countNumSR++;
        }

        // console.log(countNumSR);
         console.log(tempResult.substring(numOfOccurencesArraySR[k] + 2,numOfOccurencesArraySR[k] + countNumSR + 2));
      //   console.log(numOfOccurencesArraySR[i] + countNumSR);
       productOriginalArraySR[k] = tempResult.substring(numOfOccurencesArraySR[k] + 3,numOfOccurencesArraySR[k] + countNumSR + 3);
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







      numOfOccurencesTrig = tempResult.indexOf('n');
      while(numOfOccurencesTrig >= 0) {
        numOfOccurencesArrayTrig[t] = numOfOccurencesTrig;
        t++;
        numOfOccurencesTrig = tempResult.indexOf('n', numOfOccurencesTrig+1);
      }

      for(t = 0; t < numOfOccurencesArrayTrig.length; t++) {
        countNumTrig = 0;

        while(endTrig.indexOf(tempResult.substring(numOfOccurencesArrayTrig[t]+countNumTrig+2, numOfOccurencesArrayTrig[t]+countNumTrig+3)) == -1) {

    //  console.log(endCos.indexOf(tempResult.substring(numOfOccurencesArrayCos[k]+countNumSR+2, numOfOccurencesArrayCos[k]+countNumSR+3)));
    //  console.log(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3));
          countNumTrig++;
        }

        // console.log(countNumSR);
         console.log(tempResult.substring(numOfOccurencesArrayTrig[t] + 2,numOfOccurencesArrayTrig[t] + countNumTrig + 2));
      //   console.log(numOfOccurencesArraySR[i] + countNumSR);
        productOriginalArrayTrig[t] = tempResult.substring(numOfOccurencesArrayTrig[t] + 2,numOfOccurencesArrayTrig[t] + countNumTrig + 2);
      trigTest[t] = tempResult.substring(numOfOccurencesArrayTrig[t] - 1,numOfOccurencesArrayTrig[t] - 2);
      console.log(trigTest);
      if(trigTest[t] === 's'){
       productTrig = Math.sin(eval(productOriginalArrayTrig[t]));
     }
     else if(trigTest[t] === 't'){
       productTrig = Math.tan(eval(productOriginalArrayTrig[t]));
     }
        productArrayTrig[t] = productTrig;
      }

      console.log(productArrayTrig);
      console.log(productOriginalArrayTrig);

      for(i=0; i<productOriginalArrayTrig.length; i++) {
        if(trigTest[i] === 's'){
          tempResult = tempResult.replace('sin(' + productOriginalArrayTrig[i] + ')',productArrayTrig[i]);
        }
        else if (trigTest[i] === 't') {
          tempResult = tempResult.replace('tan(' + productOriginalArrayTrig[i] + ')',productArrayTrig[i]);
        }
      }
      console.log(tempResult);








      numOfOccurencesCos = tempResult.indexOf('s');
      while(numOfOccurencesCos >= 0) {
        numOfOccurencesArrayCos[c] = numOfOccurencesCos;
        c++;
        numOfOccurencesCos = tempResult.indexOf('s', numOfOccurencesCos+1);
      }

      for(c = 0; c < numOfOccurencesArrayCos.length; c++) {
        countNumCos = 0;

        while(endCos.indexOf(tempResult.substring(numOfOccurencesArrayCos[c]+countNumCos+2, numOfOccurencesArrayCos[c]+countNumCos+3)) == -1) {

    //  console.log(endCos.indexOf(tempResult.substring(numOfOccurencesArrayCos[k]+countNumSR+2, numOfOccurencesArrayCos[k]+countNumSR+3)));
    //  console.log(tempResult.substring(numOfOccurencesArraySR[k]+countNumSR+2, numOfOccurencesArraySR[k]+countNumSR+3));
          countNumCos++;
        }

        // console.log(countNumSR);
         console.log(tempResult.substring(numOfOccurencesArrayCos[c] + 2,numOfOccurencesArrayCos[c] + countNumCos + 2));
      //   console.log(numOfOccurencesArraySR[i] + countNumSR);
        productOriginalArrayCos[c] = tempResult.substring(numOfOccurencesArrayCos[c] + 2,numOfOccurencesArrayCos[c] + countNumCos + 2);
      console.log(tempResult.substring(numOfOccurencesArrayCos[c],numOfOccurencesArrayCos[c]-2));
       productCos = Math.cos(eval(productOriginalArrayCos[c]));
        productArrayCos[c] = productCos;
      }

      console.log(productArrayCos);
      console.log(productOriginalArrayCos);

      for(i=0; i<productOriginalArrayCos.length; i++) {
        tempResult = tempResult.replace('cos(' + productOriginalArrayCos[i] + ')',productArrayCos[i]);
      }
      console.log(tempResult);

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

    registeredFunctions.expression = function(key){
      console.log(key);
      console.log(buttons);
      console.log(result);
      var operators = '/*-+';
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
      else if(result.innerHTML === '-'){
        if(num.indexOf(buttons[key].innerHTML) > -1) {
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

    registeredFunctions.erase = function() {
      result.innerHTML = '';
    }

    registeredFunctions.cosine = function() {
      result.innerHTML += 'cos(';
    }

    registeredFunctions.sine = function() {
      result.innerHTML += 'sin(';
    }

    registeredFunctions.tangent = function() {
      result.innerHTML += 'tan(';
    }

    registeredFunctions.exponent = function() {
      result.innerHTML += '^';
    }

    registeredFunctions.bracketL = function() {
      result.innerHTML += '(';
    }

    registeredFunctions.bracketR = function() {
      result.innerHTML += ')';
    }

    registeredFunctions.clear = function() {
      result.innerHTML =  result.innerHTML.substring(0, result.innerHTML.length - 1);
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
                  '<li> <div id="display"></div></li>'+
                  '<li> <button class="key">2nd</button></li>'+
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
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '-':
            case '*':
            case '/':
            case '+':
            case '^':
             var index;
             for(i = 0; i < buttons.length; i++){
               if(buttons[i].innerHTML == key) {
               console.log(index);
               index = i;
             }
             }
             console.log(index);
             registeredFunctions['expression'](index);
             break;
             case '=':
             registeredFunctions['calculate']();
             break;
             case 'C':
             registeredFunctions['erase']();
             break;
             case 'clear':
             registeredFunctions['clear']();
             break;
             case 'COS':
             registeredFunctions['cosine']();
             break;
             case 'SINE':
             registeredFunctions['sine']();
             break;
             case 'TAN':
             registeredFunctions['tangent']();
             break;
             case '(':
             registeredFunctions['bracketL']();
             break;
             case ')':
             registeredFunctions['bracketR']();
             break;
             case '2nd':
             registeredFunctions['shift']();
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
