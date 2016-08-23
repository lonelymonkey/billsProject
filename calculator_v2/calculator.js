
  (function(factory){
    window.myCalculator = factory({});
  }(function(myCalculator){
    var nonNum = '+-/*.^'; //-
    var num = '1234567890()!';
    var multiplyBrac = '(sqrt(cos(sin(tan(log(';
    var backBrac = ')';
    var bracket = '()';
    var count;
    var count2;
    var result;
    var buttons;
    var clearFlag;
    var config = {
    };
    var answer;
    var order = 0;
    var sqrt = {};
    var orderArray = [];
    var index = 0;

    function factory(value){
      var self = {};

      if(value === ')'){
        self = {
          values: value,
          order: order,
          index: index,
          class: 'end'
        }
          order--;
          index++;

      }
      else if (value === 'sqrt(' || value === 'cos(' || value === 'sin(' || value === 'tan(' || value === '(' || value === 'log(') {
        order++;
        self = {
          values: value,
          order: order,
          index: index,
          class: 'start'

        }
        orderArray.push(order);
        index++;
      }
      else{
        self = {
          values: value,
          order: order,
          index: index,
          class: 'content'
        }
        orderArray.push(order);
        index++;
      }

      return self;
    }
  //  var trigWords = 'cossintan';
//    var sqrtWord = 'sqrt';

    //test new method
    var tempResultArray = [];

    var tempResultArrayOb = [];

    var registeredFunctions = {};
    var factorialOb = {
      factorialFlag: 'on'
    }

    registeredFunctions.shift = function() {
        $(buttons[1]).off();

        $(buttons[1]).on('click', function(){
          flag = true;
          registeredFunctions['unshift']();
        })

        $(buttons[1]).html('rad');
        console.log(flag);
      }


      registeredFunctions.unshift = function(){
        $(buttons[1]).off();

        $(buttons[1]).on('click', function(){
          flag = false
          registeredFunctions['shift']();
        })

        $(buttons[1]).html('deg');
                console.log(flag);
      }


    registeredFunctions.calculate = function() {
    //  console.log(result.innerHTML);
  //    console.log(Math.log(2));
    //  result.innerHTML = "6^6^1+5^5^2+5^2+3^2+5^1^1^1^1+2^2^2^2";
    //tempResultArray = ['9','!','+','4','!'];
  //  console.log(tempResultArray);
  var nonNumBraket = '+-/*';

  var multiIndex = tempResultArrayOb.length;
  var numbers = '0123456789';
  var countNumR;
  var countNumL;
  var right;
  var left;
  var numOfOccurences;
  var numOfOccurencesArray = [];
  var numOfOccurencesArrayEliDuplication = [];
  var j = 0;
  var product;
  var productArray = [];
  var productOriginalArray = [];
  var tempResult = {};

  var negNum;

  //  console.log(orderArray);
    var checkOrder;
    var checkContent = 0;
    var content;
    var tempContent = '';
    var temp;
    var functions;
    var nextOrder;
    var tempResultArrayObtemp = [];
    var arrayReset;
    var calculateIndex;
    clearFlag = 1;

    var negBuffer;

  //  console.log(tempResultArrayOb);

    tempResultArrayOb.push({
      values: ')',
      order: 0,
      index: index,
      class: 'end'
    })

    for(i = 0; i < multiIndex; i++){
      if(multiplyBrac.indexOf(tempResultArrayOb[i+1].values) > -1 && numbers.indexOf(tempResultArrayOb[i].values) > -1){
        tempResultArrayOb.splice(i+1,0,{
          values: '*',
          order: tempResultArrayOb[i].order,
          index: i,
          class: 'content'
        })
      }
      else if(backBrac.indexOf(tempResultArrayOb[i].values) > -1 && numbers.indexOf(tempResultArrayOb[i+1].values) > -1){
        tempResultArrayOb.splice(i+1,0,{
          values: '*',
          order: tempResultArrayOb[i+1].order,
          index: i,
          class: 'content'
        })
      }
      else if(backBrac.indexOf(tempResultArrayOb[i].values) > -1 && multiplyBrac.indexOf(tempResultArrayOb[i+1].values) > -1){
        tempResultArrayOb.splice(i+1,0,{
          values: '*',
          order: tempResultArrayOb[i].order - 1,
          index: i,
          class: 'content'
        })
      }
    }

    for(i = 0; i < tempResultArrayOb.length; i++){
        tempResultArrayOb[i].index = i;
    }

    //    console.log(tempResultArrayOb);

    if(!orderArray.length){
      orderArray = [0];
    }

    orderArray = orderArray.filter(function(item,pos){
      return orderArray.indexOf(item) == pos;
    })
    orderArray = orderArray.sort();
//    console.log(orderArray);

    for(checkOrder = orderArray.length; checkOrder > 0; checkOrder--){
  //    console.log(tempResultArrayOb);
      content = [];
      functions = [];
      contentArrayIndex = 0;
      for(checkContent = 0; checkContent < tempResultArrayOb.length; checkContent++) {
        if(tempResultArrayOb[checkContent].order == orderArray[checkOrder - 1] && tempResultArrayOb[checkContent].class == 'content'){
  /*        if(tempResultArrayOb[checkContent].factorialFlag){
            content += factorial(tempResultArrayOb[checkContent].values);
            console.log(content);
          }
          else{
          content += tempResultArrayOb[checkContent].values;
        }*/ //ffffffffff
        if((tempResultArrayOb[checkContent+1].index - tempResultArrayOb[checkContent].index) == 1){
            if(Number(tempResultArrayOb[checkContent].values) < 0){
              negNum =  tempResultArrayOb[checkContent].values.toString();
              negNum = negNum.replace('-','neg');
              tempContent += negNum;
            }
            else if(tempResultArrayOb[checkContent].values === '-'){
              tempContent += 'neg';
            }
            else{
              tempContent += tempResultArrayOb[checkContent].values;
            }

      //   console.log(tempContent);
          if(tempResultArrayOb[checkContent+1].class == 'end'){
            content[contentArrayIndex] = tempContent;
            tempContent = [];
            contentArrayIndex++;
    //        console.log(contentArrayIndex);
          }
        }
        }
        else if (tempResultArrayOb[checkContent].order == orderArray[checkOrder - 1] && tempResultArrayOb[checkContent].class == 'start') {
          functions.push(tempResultArrayOb[checkContent].values);
    //      console.log(functions);
        }
      }
      nextOrder = orderArray[checkOrder - 1] - 1;
  //    console.log(content);

      for(calculateIndex = 0; calculateIndex < content.length; calculateIndex++){
        j = 0;
      if(content[calculateIndex].indexOf('^') > -1) {
          numOfOccurences = content[calculateIndex].indexOf('^');
          while(numOfOccurences >= 0) {
              numOfOccurencesArray[j] = numOfOccurences;
              j++;
            numOfOccurences = content[calculateIndex].indexOf('^', numOfOccurences+1);
          }
        //  console.log(numOfOccurencesArray);

          for(i=0; i<numOfOccurencesArray.length; i++){
            if(numOfOccurencesArray[i+1] - numOfOccurencesArray[i] == 2){
              continue;
            }
            numOfOccurencesArrayEliDuplication[i] = numOfOccurencesArray[i];
          }

          numOfOccurencesArrayEliDuplication = numOfOccurencesArrayEliDuplication.filter(function(v){return v!==''});

      //    console.log(numOfOccurencesArrayEliDuplication);

          for(i = 0; i < numOfOccurencesArrayEliDuplication.length; i++) {
            countNumR = 0;
          //  console.log(result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i]+countNumR+1, numOfOccurencesArrayEliDuplication[i]+countNumR+2));
            while (nonNumBraket.indexOf(content[calculateIndex].substring(numOfOccurencesArrayEliDuplication[i]+countNumR+1, numOfOccurencesArrayEliDuplication[i]+countNumR+2)) == -1) {
              countNumR++;
            //  console.log(countNumR);
            }

            right = content[calculateIndex].substring(numOfOccurencesArrayEliDuplication[i]+1,numOfOccurencesArrayEliDuplication[i]+countNumR+1);
        //    console.log(right);

            countNumL = 0;

            while (nonNumBraket.indexOf(content[calculateIndex].substring(numOfOccurencesArrayEliDuplication[i]-countNumL-1, numOfOccurencesArrayEliDuplication[i]-countNumL)) == -1) {
              countNumL++;
            //  console.log(countNumL);
            }

            left = content[calculateIndex].substring(numOfOccurencesArrayEliDuplication[i]-countNumL,numOfOccurencesArrayEliDuplication[i]);
      //     console.log(left);

          //  console.log(left.split('^'))

          if(left.indexOf('neg') > -1){
            left = left.split('neg').join('-');
          }

          if(right.indexOf('neg') > -1){
            right = right.split('neg').join('-');
          }

            if(right.indexOf('^') > -1){
              separate = right.split('^');
              powerTemp = separate[0];

             for(var l=1; l<separate.length; l++){
                powerTemp = Math.pow(powerTemp,separate[l]);
              }
              right = powerTemp;
            }

            if(left.indexOf('^') > -1){
              separate = left.split('^');
              powerTemp = separate[0];

             for(var l=1; l<separate.length; l++){
                powerTemp = Math.pow(powerTemp,separate[l]);
              }
              left = powerTemp;
            }

        //   console.log(right);
        //   console.log(left);
            /*  var separators = ['\\\+', '-', '\\*', '/', '\\\(', '\\\)'];
              console.log(separators.join('|'));
              var tokens = result.innerHTML.split(new RegExp('[-+()*'/':? ]', 'g'));
                  tokens = tokens.filter(Boolean);
              var nonTokens = result.innerHTML.replace(/[0-9]|\^|\./g, '');*/
            //console.log(numOfOccurencesArray[i] - countNumL);
            //console.log(numOfOccurencesArray[i] + countNumR + 1);
          productOriginalArray[i] = content[calculateIndex].substring(numOfOccurencesArrayEliDuplication[i] - countNumL,numOfOccurencesArrayEliDuplication[i] + countNumR + 1);
          product = Math.pow(left,right);
          productArray[i] = product;
          }

      //    console.log(content[calculateIndex]);

          for(i=0; i<productOriginalArray.length; i++) {
            content[calculateIndex] = content[calculateIndex].replace(productOriginalArray[i],productArray[i]);
          }
    //      console.log(content[calculateIndex]);
      //    temp = eval(content.toString());
      //    console.log(temp);
        }

        if(content[calculateIndex].indexOf('neg') > -1){
          content[calculateIndex] = content[calculateIndex].split('neg').join('-');
        }

//console.log(content);
        try{
        //    result.innerHTML = math.eval(result.innerHTML); sin(6^5*sin(6)+sin(5))
          content[calculateIndex] = eval(content[calculateIndex]);

          switch (functions[calculateIndex]) {
            case 'sqrt(':
              content[calculateIndex] = Math.sqrt(content[calculateIndex]);
              break;
            case 'tan(':
              content[calculateIndex] = Math.tan(content[calculateIndex]);
              break;
            case 'sin(':
              content[calculateIndex] = Math.sin(content[calculateIndex]);
              break;
            case 'cos(':
              content[calculateIndex] = Math.cos(content[calculateIndex]);
              break;
            case 'log(':
              content[calculateIndex] = Math.log(content[calculateIndex]);
            default:
              content[calculateIndex] = content[calculateIndex];
          }
        }
        catch(err){
          content[calculateIndex] = 'unable to evaluate the expression';
        }
      //  console.log(content[calculateIndex]);
      }

  //      console.log(content);
        if(isNaN(content[0])){
          content[0] = 'unable to evaluate the expression';
        }

        result.innerHTML = content[0];
        answer = content[0];
      tempResultArrayObtemp = [];
      for(checkContent = 0; checkContent < tempResultArrayOb.length; checkContent++) {
        if (tempResultArrayOb[checkContent].order == orderArray[checkOrder - 1] && tempResultArrayOb[checkContent].class == 'start') {
          tempResultArrayObtemp.push({
            values: content.shift(),
            order: nextOrder,
            index: checkContent,
            class: 'content'
          });
        }
        else if(tempResultArrayOb[checkContent].order != orderArray[checkOrder - 1])
          tempResultArrayObtemp[checkContent] = tempResultArrayOb[checkContent];
      }
      tempResultArrayOb.length = 0;
      for(i = 0; i < tempResultArrayObtemp.length; i++){
        if(tempResultArrayObtemp[i]) {
          tempResultArrayOb.push(tempResultArrayObtemp[i]);
        }
      }

      for(i = 0; i < tempResultArrayOb.length; i++){
        tempResultArrayOb[i].index = i;
      }
  //    console.log(tempResultArrayOb);
    }

  //  result.innerHTML = tempResultArray.join('');

  //  console.log(result.innerHTML);

  //  result.innerHTML = result.innerHTML.replace('ANS', answer);

  //  console.log(result.innerHTML);
    }

    registeredFunctions.expression = function(key){
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML = '';
        index = 0;
        order - 0;
        expressionWithoutFlag(key);
        clearFlag = 0;
      }
      else {
        expressionWithoutFlag(key);
      }
    }

    function factorial(number) {
      var temp;

      if(number <= 1)
        return 1;
      temp = number * factorial(number - 1);
      return temp;
  //    console.log(factorialArray);
      // use a look up table to record the values
    }

    function expressionWithoutFlag(key){
      var operators = '/*-+';
      if(tempResultArray.length == 0) {
        if(buttons[key].innerHTML === '-') {
          tempResultArray.push('-');
          result.innerHTML += '-';
          tempResultArrayOb.push(factory('-'));
        }
        else if (nonNum.indexOf(buttons[key].innerHTML) > -1){
            result.innerHTML = '';
            tempResultArray.length = 0;
            tempResultArrayOb.length = 0;
        }
        else {
          result.innerHTML += buttons[key].innerHTML;
          tempResultArray.push(buttons[key].innerHTML);
          tempResultArrayOb.push(factory(buttons[key].innerHTML));
        }
      }
      else if(tempResultArray[0] === '-' && tempResultArray.length == 1){
        if(num.indexOf(buttons[key].innerHTML) > -1) {
          result.innerHTML += buttons[key].innerHTML;
          tempResultArray.push(buttons[key].innerHTML);
          tempResultArrayOb.push(factory(buttons[key].innerHTML));
        }
      }
      else {
         if(nonNum.indexOf(buttons[key].innerHTML) > -1)
         {
           if(num.indexOf(tempResultArray.slice(-1)) > -1) {
               result.innerHTML += buttons[key].innerHTML;
               tempResultArray.push(buttons[key].innerHTML);
               tempResultArrayOb.push(factory(buttons[key].innerHTML));
         }
          else{
            result.innerHTML = result.innerHTML.slice(0,-1) + buttons[key].innerHTML;
            tempResultArray.pop();
            tempResultArray.push(buttons[key].innerHTML);
            tempResultArrayOb.pop();
            tempResultArrayOb.push(factory(buttons[key].innerHTML));
          }
         }
         else {
           result.innerHTML += buttons[key].innerHTML;
           tempResultArray.push(buttons[key].innerHTML);
           tempResultArrayOb.push(factory(buttons[key].innerHTML));
         }
      }
  //    console.log(tempResultArray);
  //    console.log(tempResultArrayOb);
    }

    registeredFunctions.sqrt = function(){
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        result.innerHTML += 'sqrt(';
        tempResultArray.push('sqrt(');
        tempResultArrayOb.push(factory('sqrt('));
        clearFlag = 0;
    //    console.log(tempResultArrayOb);
      }
      else {
        result.innerHTML += 'sqrt(';
        tempResultArray.push('sqrt(');
        tempResultArrayOb.push(factory('sqrt('));
    //    console.log(tempResultArrayOb);
      }
    //  console.log(tempResultArray);
    }

    registeredFunctions.erase = function() {
      if(clearFlag == 1){
        result.innerHTML = '';
        tempResultArrayOb.length = 0;
        clearFlag = 0;
        index = 0;
        order = 0;
    //    console.log(tempResultArrayOb);
      }
      else{
        tempResultArray.length = 0;
        result.innerHTML = '';
        tempResultArrayOb.length = 0;
        index = 0;
        order = 0;
      }
    //  console.log(tempResultArray);
    //  console.log(tempResultArrayOb);
    }

    registeredFunctions.cosine = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        result.innerHTML += 'cos(';
        tempResultArray.push('cos(');
        tempResultArrayOb.push(factory('cos('));
  //      console.log(tempResultArrayOb);
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'cos(';
        tempResultArray.push('cos(');
        tempResultArrayOb.push(factory('cos('));
  //      console.log(tempResultArrayOb);
      }
    //  console.log(tempResultArray);
    }

    registeredFunctions.sine = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        result.innerHTML += 'sin(';
        tempResultArray.push('sin(');
        tempResultArrayOb.push(factory('sin('));
    //    console.log(tempResultArrayOb);
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'sin(';
        tempResultArray.push('sin(');
        tempResultArrayOb.push(factory('sin('));
    //    console.log(tempResultArrayOb);
      }
  //    console.log(tempResultArray);
    }

    registeredFunctions.tangent = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        result.innerHTML += 'tan(';
        tempResultArray.push('tan(');
        tempResultArrayOb.push(factory('tan('));
    //    console.log(tempResultArrayOb);
        clearFlag = 0;
      }
      else {
        result.innerHTML += 'tan(';
        tempResultArray.push('tan(');
        tempResultArrayOb.push(factory('tan('));
  //      console.log(tempResultArrayOb);
      }
  //    console.log(tempResultArray);
    }

    registeredFunctions.exponent = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        tempResultArrayOb.push(factory('^'));
        tempResultArray.push('^');
        clearFlag = 0;
      }
      else {
        result.innerHTML += '^';
        tempResultArray.push('^');
        tempResultArrayOb.push(factory('^'));
      }
  //    console.log(tempResultArray);
    }

    registeredFunctions.bracketL = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        result.innerHTML = '';
        result.innerHTML += '(';
        tempResultArray.push('(');
        tempResultArrayOb.push(factory('('));
  //      console.log(tempResultArrayOb);
        clearFlag = 0;
      }
      else {
        result.innerHTML += '(';
        tempResultArray.push('(');
        tempResultArrayOb.push(factory('('));
  //      console.log(tempResultArrayOb);
      }
  //    console.log(tempResultArray);
    }

    registeredFunctions.bracketR = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArrayOb.length = 0;
        result.innerHTML = '';
        result.innerHTML += ')';
        tempResultArray.push(')');
        tempResultArrayOb.push(factory(')'));
  //      console.log(tempResultArrayOb);
        clearFlag = 0;
      }
      else {
        result.innerHTML += ')';
        tempResultArray.push(')');
        tempResultArrayOb.push(factory(')'));
    //    console.log(tempResultArrayOb);
      }
  //    console.log(tempResultArray);
    }

    registeredFunctions.factorial = function(){
      if(clearFlag == 1){
        tempResultArray.length = 0;
        tempResultArray.push('!');
        jQuery.extend(tempResultArrayOb[tempResultArrayOb.length - 1], factorialOb);
        result.innerHTML = '!';
        clearFlag = 0;
      }
      else {
        tempResultArray.push('!');
        result.innerHTML += '!';
        jQuery.extend(tempResultArrayOb[tempResultArrayOb.length - 1], factorialOb);
    //    console.log(tempResultArrayOb);
      }
    }

    registeredFunctions.clear = function() {
      if(clearFlag == 1){
        tempResultArray.length = 0;
        result.innerHTML = '';
        tempResultArrayOb.length = 0;
        clearFlag = 0;
      }
      else {
        var popped = tempResultArray.pop();
        index = tempResultArrayOb[tempResultArrayOb.length - 1].index;
        if(multiplyBrac.indexOf(tempResultArrayOb[tempResultArrayOb.length -1].values) > -1) {
          order--;
        }
        else if(backBrac.indexOf(tempResultArrayOb[tempResultArrayOb.length -1].values) > -1) {
          order++;
        }
        else {
          order = order;
        }
        var poppedOb = tempResultArrayOb.pop();
        var lastIndex = result.innerHTML.lastIndexOf(popped);
        result.innerHTML = result.innerHTML.substring(0,lastIndex);
    //    console.log(tempResultArrayOb);


      }
  //    console.log(tempResultArray);
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
                  '<li> <button class="key">deg</button></li>'+
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
                    '<li><button class="key">cos(</button>  </li>'+
                    '<li> <button class="key">sin(</button> </li>'+
                    '<li> <button class="key">tan(</button> </li>'+
                    '<li> <button class="key">^</button> </li>'+
                  '</ul>'+
                '</div>'+
                '<div id="operator">'+
                  '<ul class="spacing">'+
                    '<li><button class="key">(</button>  </li>'+
                    '<li> <button class="key">)</button> </li>'+
                    '<li> <button class="key">sqrt(</button> </li>'+
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
            case '=':
            //  myMathlib.calculate();
              clearFlag = 1;
              result.innerHTML = myMathlib.calculate();
              break;
            case 'deg':
              myMathlib.shift();
              break;
            case 'C':
              myMathlib.remove();
              result.innerHTML = '';
              break;
            default:
            myMathlib.hit(key);
            if(clearFlag == 1){
              result.innerHTML = '';
              result.innerHTML += key;
              clearFlag = 0;
            }
            else{
              result.innerHTML +=key;
            }
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

    myCalculator.test = function(){
      var test;
      var t;
      var e;
      var testArray = [
      ['(','3',')','(','1','+','1',')', '^', '(', '1', '+', '1',')', '+', '(', '1', '+', '2' ], //15
        ['1','+','(','1','+','1',')', '^', '(', '1', '+', '1', ')' , '+', '1'], //6
        ['(','1','+','1',')', '^', '(', '1', '+', '1' ], //4
        ['(','4',')','(','3','+','4',')', '^', '2'], //196
        ['1','+','3','^','2'], //10
        ['(','-','2',')','^','3'], //-8
        ['3','^','(','-','2',')'], //0.11111
        ['2','^','(', '2', '^', '2', '+', '1', ')'], //32
        ['2','^', '2', '^', '3'], //64
        ['2','^','(', '2', '^', '3', ')'], //256
        ['2','^','(', '2', '^', '2', '+', '1', ')', '^', '2'], //33554432
        ['(','2','^','(', '2', '^', '2', '+', '1', ')', ')', '^', '2'], //1024
        ['2','^','(', '2', '^', '2', '+', '1', ')', '^', '(', '1' , '+', '1' , ')' , '+', '3'], //33554435
        ['(', '2', '^', '2', '+', '1', ')', '^', '(', '1' , '+', '1' , ')' , '+', '3'], //28
        ['2','^','-','2'] //0.25
      ];

      var testArrayTrig = [
        ['sqrt(','3',')','sin(','1','+','1',')', '^', 'cos(', '1', '+', '1',')', '+', '(', '1', '+', '2' ], //sqrt(3)sin(1+1)^cos(1+1)+(1+2
       ['1','+','tan(','1','+','3',')', '^', 'sin(', '1', '+', '1', ')' , '+', '1'],//1+tan(1+3)^sin(1+1)+1
      ['sin(','6','^','5','*','sin(','6',')','+','tan(','5',')',')'], //sin(6^5*sin(6)+tan(5))
          ['sin(','6','^','5','*','sin(','6',')','^','tan(','5',')',')'], //imaginary numbers
      ['sin(','6','^','5','*','sin(','6',')','*','tan(','5',')',')'],//sin(6^5*sin(6)*tan(5))
        ['sqrt(','sin(','cos(','6'],//sqrt(sin(cos(6
       ['tan(','6','+','sqrt(','50',')','^','3','+','5',')'] //tan(6+sqrt(50)^3+5)
      ];
      for(t = 0; t < testArray.length; t++){
        for(e = 0; e < testArray[t].length; e++){
        //   console.log(e);
          switch(testArray[t][e]) {
             case 'cos(':
             registeredFunctions['cosine']();
             break;
             case 'sin(':
             registeredFunctions['sine']();
             break;
             case 'tan(':
             registeredFunctions['tangent']();
             break;
             case '(':
             registeredFunctions['bracketL']();
             break;
             case ')':
             registeredFunctions['bracketR']();
             break;
             default:
             result.innerHTML += testArray[t][e];
             tempResultArrayOb.push(factory(testArray[t][e]));
             }
        }
    //    console.log(result.innerHTML);
        registeredFunctions.calculate();
        console.log(result.innerHTML);
        registeredFunctions.erase();
      }

      for(t = 0; t < testArrayTrig.length; t++){
        for(e = 0; e < testArrayTrig[t].length; e++){
        //   console.log(e);
          switch(testArrayTrig[t][e]) {
             case 'cos(':
             registeredFunctions['cosine']();
             break;
             case 'sin(':
             registeredFunctions['sine']();
             break;
             case 'tan(':
             registeredFunctions['tangent']();
             break;
             case '(':
             registeredFunctions['bracketL']();
             break;
             case ')':
             registeredFunctions['bracketR']();
             break;
             default:
             result.innerHTML += testArrayTrig[t][e];
             tempResultArrayOb.push(factory(testArrayTrig[t][e]));
             }
        }
    //    console.log(result.innerHTML);
        registeredFunctions.calculate();
        console.log(result.innerHTML);
        registeredFunctions.erase();
      }
    }

    return myCalculator;
  }));
