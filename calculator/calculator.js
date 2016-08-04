
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
    var clearFlag;
    var config = {
    };
    var answer;
  //  var trigWords = 'cossintan';
//    var sqrtWord = 'sqrt';

    //test new method
    var tempResultArray = [];

    var registeredFunctions = {};

    registeredFunctions.shift = function() {
        $(buttons[22]).off();
        $(buttons[23]).off();
        $(buttons[1]).off();

        $(buttons[22]).on('click', function(){
          if(clearFlag == 1){
            tempResultArray.length = 0;
            tempResultArray.push('ANS');
            result.innerHTML = 'ANS';
            clearFlag = 0;
          }
          else {
            tempResultArray.push('ANS');
            result.innerHTML += 'ANS';
          }
        })

        $(buttons[22]).empty();
        $(buttons[22]).html('ANS');

        $(buttons[23]).on('click', function(){
          if(clearFlag == 1){
            tempResultArray.length = 0;
            tempResultArray.push('!');
            result.innerHTML = '!';
            clearFlag = 0;
          }
          else {
            tempResultArray.push('!');
            result.innerHTML += '!';
          }
        })

        $(buttons[23]).empty();
        $(buttons[23]).html('!');

        $(buttons[1]).on('click', function(){
          registeredFunctions['unshift']();
        })

      }
      registeredFunctions.unshift = function(){
        $(buttons[22]).off();
        $(buttons[23]).off();
        $(buttons[1]).off();

        $(buttons[22]).on('click', registeredFunctions.bracketL);

        $(buttons[22]).empty();
        $(buttons[22]).html('(');

        $(buttons[23]).on('click', registeredFunctions.bracketR);

        $(buttons[23]).empty();
        $(buttons[23]).html(')');

        $(buttons[1]).on('click', function(){
          registeredFunctions['shift']();
        })
      }


    registeredFunctions.calculate = function() {
    //  result.innerHTML = "6^6^1+5^5^2+5^2+3^2+5^1^1^1^1+2^2^2^2";
    //tempResultArray = ['9','!','+','4','!'];
  //  console.log(tempResultArray);

    clearFlag = 1;

    result.innerHTML = tempResultArray.join('');

  //  console.log(result.innerHTML);

    result.innerHTML = result.innerHTML.replace('ANS', answer);

    console.log(result.innerHTML);

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

    try{
        result.innerHTML = math.eval(result.innerHTML);
        answer = result.innerHTML;
    }
    catch(err){
      result.innerHTML = 'unable to evaluate the expression';
    }

    }

    registeredFunctions.expression = function(key){
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML = '';
        expressionWithoutFlag(key);
        clearFlag = 0;
      }
      else {
        expressionWithoutFlag(key);
      }
    }

    function factorial() {
      var indexesOfFac;
      var factorialArray = [];
      for(indexesOfFac=0; indexesOfFac < tempResultArray.length; indexesOfFac++){
        if(tempResultArray[indexesOfFac] == '!') {
          factorialArray.push(indexesOfFac);
        }
      }
  //    console.log(factorialArray);
      // use a look up table to record the values
    }

    function expressionWithoutFlag(key){
      var operators = '/*-+';
      if(tempResultArray.length == 0) {
        if(buttons[key].innerHTML === '-') {
          tempResultArray.push('-');
          result.innerHTML += '-';
        }
        else if (nonNum.indexOf(buttons[key].innerHTML) > -1){
            result.innerHTML = '';
            tempResultArray.length = 0;
        }
        else {
          result.innerHTML += buttons[key].innerHTML;
          tempResultArray.push(buttons[key].innerHTML);
        }
      }
      else if(tempResultArray[0] === '-' && tempResultArray.length == 1){
        if(num.indexOf(buttons[key].innerHTML) > -1) {
          result.innerHTML += buttons[key].innerHTML;
          tempResultArray.push(buttons[key].innerHTML);
        }
      }
      else {
         if(nonNum.indexOf(buttons[key].innerHTML) > -1)
         {
           if(num.indexOf(tempResultArray.slice(-1)) > -1) {
               result.innerHTML += buttons[key].innerHTML;
               tempResultArray.push(buttons[key].innerHTML);
         }
          else{
            result.innerHTML = result.innerHTML.slice(0,-1) + buttons[key].innerHTML;
            tempResultArray.pop();
            tempResultArray.push(buttons[key].innerHTML);
          }
         }
         else {
           result.innerHTML += buttons[key].innerHTML;
           tempResultArray.push(buttons[key].innerHTML);
         }
      }
      console.log(tempResultArray);
    }

    registeredFunctions.sqrt = function(){
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += 'sqrt(';
        tempResultArray.push('sqrt(');
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'sqrt(';
        tempResultArray.push('sqrt(');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.erase = function() {
      tempResultArray.length = 0;
      result.innerHTML = '';
      console.log(tempResultArray);
    }

    registeredFunctions.cosine = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += 'cos(';
        tempResultArray.push('cos(');
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'cos(';
        tempResultArray.push('cos(');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.sine = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += 'sin(';
        tempResultArray.push('sin(');
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'sin(';
        tempResultArray.push('sin(');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.tangent = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += 'tan(';
        tempResultArray.push('tan(');
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'tan(';
        tempResultArray.push('tan(');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.exponent = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += '^';
        tempResultArray.push('^');
        clearFlag = 0;
      }
      else {
        result.innerHTML += '^';
        tempResultArray.push('^');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.bracketL = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += '(';
        tempResultArray.push('(');
        clearFlag = 0;
      }
      else {
        result.innerHTML += '(';
        tempResultArray.push('(');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.bracketR = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML += ')';
        tempResultArray.push(')');
        clearFlag = 0;
      }
      else {
        result.innerHTML += ')';
        tempResultArray.push(')');
      }
      console.log(tempResultArray);
    }

    registeredFunctions.clear = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML = '';
        clearFlag = 0;
      }
      else {
        var popped = tempResultArray.pop();
        var lastIndex = result.innerHTML.lastIndexOf(popped);
        result.innerHTML = result.innerHTML.substring(0,lastIndex);
        console.log(popped);


      }
      console.log(tempResultArray);
    }
    /*  console.log(result.innerHTML.substring(result.innerHTML.length - 4, result.innerHTML.length));
      if(trigWords.indexOf(result.innerHTML.substring(result.innerHTML.length - 4, result.innerHTML.length - 3)) > -1){
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 4);
      }
      else if(sqrtWord.indexOf(result.innerHTML.substring(result.innerHTML.length - 4, result.innerHTML.length - 3)) > -1){
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 5);
      }
      else
        result.innerHTML =  result.innerHTML.substring(0, result.innerHTML.length - 1); */

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
          //     console.log(index);
               index = i;
             }
             }
        //   console.log(index);
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
        });
      });
    }

    myCalculator.load = function(cfg){
      saveConfig(cfg);
      buildUIFrame();
      result = document.getElementById('display');
    //  console.log(result);
      buttons = document.getElementsByClassName('key');
    //  console.log(buttons);
      buttons2 = document.getElementsByClassName('key2');
    }

    return myCalculator;
  }));
