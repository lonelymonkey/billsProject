(function(factory){
  window.myMathlib = factory({});
}(function(myMathlib){
  var dictionary = [
    {
      char : ['0','1','2','3','4','5','6','7','8','9'],
      data : {
        'type' : 'number'
      }
    },
    {
      char : ['+','-','*','/'],
      data : {
        'type' : 'operator'
      }
    },
    {
      char : ['('],
      data : {
        'type' : 'begin-bracket'
      }
    },
    {
      char : [')'],
      data : {
        'type' : 'end-bracket'
      }
    },
    {
      char : ['^'],
      data : {
        'type' : 'functionTypeA',
        'function' : "Math.pow",
      }
    },
    {
      char : ['sqrt('],
      data : {
        'type' : 'functionTypeB',
        'function' : "Math.sqrt",
      }
    },
    {
      char : ['sin('],
      data : {
        'type' : 'functionTypeB',
        'function' : "Math.sin",
      }
    },
    {
      char : ['cos('],
      data : {
        'type' : 'functionTypeB',
        'function' : "Math.cos",
      }
    },
    {
      char : ['tan('],
      data : {
        'type' : 'functionTypeC',
        'function' : "MathTan",
      }
    }
  ];

  myMathlib.shift = function() {
      $(buttons[1]).off();
      flag = true;
      $(buttons[1]).on('click', function(){
        myMathlib['unshift']();
      })

      $(buttons[1]).html('rad');
      console.log(flag);
    }


    myMathlib.unshift = function(){
      $(buttons[1]).off();
      flag = false;
      $(buttons[1]).on('click', function(){
        myMathlib['shift']();
      })

      $(buttons[1]).html('deg');
              console.log(flag);
    }

  function MathTan(flag, value){
    var rad;
    if(flag == '1'){
    rad = value * 3.14159/180;
    console.log(rad);
    return Math.tan(rad);
    }
    else{
    rad = value;
    console.log(rad);
      return Math.tan(rad);
    }
  }

  function findInDictionary(char) {
    var output = false;
    for (var i=0;i<dictionary.length;i++) {
      var characters = dictionary[i].char;
      if (characters.indexOf(char) > -1) {
        output = dictionary[i].data;
        break;
      }
    }
    return output;
  }
  var buffer = [];
  //this string should be compatible with eval
  var translation = [];
  var newUnit = true;
  var firstUnit = true;
  var flag = false;
  var result = document.getElementById('display');
//  console.log(result);
  var buttons = document.getElementsByClassName('key');
//  console.log(buttons);
  var buttons2 = document.getElementsByClassName('key2');

  //problem:
  //paramStartIndex can change when more functions are insert, we need to update each paramStartIndex
  /*
  var functionMapping = [
    {
      'function' : 'Math.pow',
      'functionName' : 'FUNC_0',
      'type' : 'functionTypeA'
      'paramStartIndex' : 10,
      'insertLength' : 2,
      'open' : true
    }
  ] */
  var functionMapping = [];
  var paramStartIndex = 0;

  myMathlib.remove = function(){
    init();
    console.log(translation);
  }

  myMathlib.hit = function(char){
  //  console.log(result);
    var currentKey = findInDictionary(char);
    if (currentKey) {
        var lastKey = (buffer.length > 0) ?  buffer[buffer.length-1] : false;
        console.log(lastKey);

        //we should group number together as a unit
        if (lastKey) {
          if (lastKey.type=='number' && currentKey.type == 'number') {
            newUnit = false;
          } else {
            newUnit = true;
          }
        }
        if (newUnit) {
          if (lastKey) {
            if (firstUnit == false && lastKey.type =='number') {
                translation.push(')');
            }
          }
          if (currentKey.type == 'number') {
            translation.push('(');
            firstUnit = false;
          }
        }
        currentKey.char = char;
        buffer.push(currentKey);
        console.log(translation);
        closeFunctionCheck();
        console.log(translation);
        switch (currentKey.type) {
          case 'functionTypeA':
            translateFunctionTypeA(currentKey.function);
            break;
          case 'functionTypeB':
            translateFunctionTypeB(currentKey.function);
            break;
          case 'functionTypeC':
            translateFunctionTypeC(currentKey.function, flag);
            break;
          default:
            translation.push(char);
            break;
        }

        console.log(functionMapping);
        //***debug message
        //console.log(translation.join(''));
        /*
        if (functionMapping.length > 0) {
          console.log('functionMapping: '+JSON.stringify(functionMapping));
        }
        */
        console.log(buffer);
        console.log(translation);
    }
  }
  //initialize variables
  var init = function(){
    buffer = [];
    translation = [];
    newUnit = true;
    firstUnit = true;
    functionMapping = [],
    paramStartIndex = 0;
  }
  /*******************************************************
      this function loops through  functionMapping array and translates all the functionName to function
  *******************************************************/
  function translateFunction() {
    var f, index;
    while (functionMapping.length > 0) {
      f = functionMapping.pop();
      index = translation.indexOf(f.functionName)
      if (index > -1) {
        translation[index] = f.function;
      }
    }
  }
  /*******************************************************
      this function loops through  functionMapping array and closes up any function as needed
  *******************************************************/
  function closeFunctionCheck() {
    var f;
    for (var i=0; i<functionMapping.length; i++) {
      f = functionMapping[i];
      if (f.open) {
        //console.log('closeFunction: '+f.functionName+'  starting index: '+f.paramStartIndex);
        //console.log(JSON.stringify(translation));
        if (closeFunction(f.paramStartIndex)){
          functionMapping[i].open = false;
        }
      }
    }
  }
  function closeFunction(index) {
    var count = 0;
    if (index == translation.length-1) return false;
    for (var i=index; i<translation.length;i++) {
      var char = translation[i];
      //console.log('i: '+i + ' char: '+char);
      if (char == '(') {
        count++;
      }
      if (char == ')') {
        count -= 1;
      }
    }
    console.log(count);
    if (count == 0) {
      translation.push(')');
      return true;
    }
    return false;
  }
  /*
  insertFunction : this function insert a function object into functionMapping
      functionMapping needs to be sorted based on paramStartIndex
      all elements's paramStartIndex also need to be updated whenever we call this function
    {
      'function' : func,
      'functionName' : functionName
      'type' : 'functionTypeA',
      'paramStartIndex' : translation.length-1,
      'insertLength' : 2,
      'open' : true
    }
  */
  function insertFunction(input) {
    var insertLength = input.insertLength;
    var f;
    console.log(input.paramStartIndex);
    console.log(functionMapping.paramStartIndex);
    //update all the paramStartIndex in functionMapping
    for (var i=0; i<functionMapping.length; i++) {
      f = functionMapping[i];
      if (f.paramStartIndex >= input.paramStartIndex) {
        functionMapping[i].paramStartIndex += insertLength;
        console.log('hello');
      }
    }
    console.log(functionMapping);
    functionMapping.push(input);
    functionMapping.sort(function(a, b){
      return b.paramStartIndex - a.paramStartIndex;
    })
  }
  /************************************
  translateFunctionTypeA:
    functionTypeA  requires 2 parameters,
        first parameter is the expression prior to the function operator
        2nd parameter is the expression after the function operator
  *****************************************/
  function translateFunctionTypeA(func) {
    var count = 0;
    var index = 0;
    var functionName = 'FUNC_'+functionMapping.length;
    for (var i=translation.length-1; i >=0; i=i-1) {
      console.log(i);
      var char = translation[i];
      if (char == ')') {
        count++;
      }
      if (char == '(') {
        count -= 1;
      }
      if (count == 0) {
        index = i;
        break;
      }
    }

    //console.log(translation);
    console.log(index);
    if (index > 0) {
      //we dont want function to insert between   FUNC_ and (
      if (translation[index-1].indexOf('FUNC_') > -1) {
        index = index+1;
      }
    }
    console.log(index);
    translation.splice(index,0,functionName,'(');
    translation.push(',');
    insertFunction({
      'function' : func,
      'functionName' : functionName,
      'type' : 'functionTypeA',
      'paramStartIndex' : translation.length-1,
      'insertLength' : 2,
      'open' : true
    });
    return;
  }

  /************************************
  translateFunctionTypeB:
    functionTypeB  requires 1 parameters,
        the parameter is the expression after the function operator
  *****************************************/
  function  translateFunctionTypeB(func) {
    var count = 0;
    var index = 0;
    var functionName = 'FUNC_'+functionMapping.length;
    //console.log(translation);
    console.log(index);
    if (index > 0) {
      //we dont want function to insert between   FUNC_ and (
      if (translation[index-1].indexOf('FUNC_') > -1) {
        index = index+1;
      }
    }
    console.log(index);
    translation.push(functionName);
    translation.push('(');
    insertFunction({
      'function' : func,
      'functionName' : functionName,
      'type' : 'functionTypeB',
      'paramStartIndex' : translation.length-1,
      'insertLength' : 2,
      'open' : false
    });
    return;
  }

  /************************************
  translateFunctionTypeC:
    functionTypeB  requires 2 parameters,
        the first parameter is the expression after the function operator
        the second parameter is a flag responsible for unit conversion
  *****************************************/
  function  translateFunctionTypeC(func,flag) {
    console.log('gsdgsd');
    var count = 0;
    var index = 0;
    var functionName = 'FUNC_'+functionMapping.length;
    //console.log(translation);
    console.log(index);
    if (index > 0) {
      //we dont want function to insert between   FUNC_ and (
      if (translation[index-1].indexOf('FUNC_') > -1) {
        index = index+1;
      }
    }
    console.log(index);
    translation.push(functionName);
    translation.push('(');
    if(flag === true) translation.push('1');
    else translation.push('0');
    console.log(flag);
    translation.push(',')
    insertFunction({
      'function' : func,
      'functionName' : functionName,
      'type' : 'functionTypeB',
      'paramStartIndex' : translation.length-1,
      'insertLength' : 2,
      'open' : false
    });
    return;
  }
  /************************************
  completeEquation:
    count the '(' , ')'  pairs and complete the equation as needed
  *****************************************/
  function completeEquation() {
    var count = 0;
    for (var i=0;i<translation.length;i++) {
      console.log(count);
      var char = translation[i];
      if (char == '(') {
        count++;
      }
      if (char == ')') {
        count -= 1;
      }
    }
    while (count > 0) {
      translation.push(')');
      count -= 1;
    }
  }
  /************************************
  addMissingOperators:
    javascripts interprets (expression)()  as function calls, - need to add * operators
  *****************************************/
  function addMissingOperators(str) {
    //this function should add missing operators *
    str = str.replace(')(',')*(');
    str = str.replace(')Math.',')*Math.');
    return str;
  }

  function addMissingOperatorsBeforeTranslation(){
  /*  var indexArray = [];
    var index = 0;
    var tempFunctionMapping = functionMapping.slice(0);
    for(var i=0; i<translation.length; i++){
      if('0123456789,/*-+()'.indexOf(translation[i]) === -1){
        indexArray.push(i);
        index++;
      }
    }
    console.log(indexArray);
    for(i=0; i<index; i++){
      if(tempFunctionMapping.pop().function !== 'Math.pow' && '/*-+'.indexOf(translation[])){
        translation.splice(indexArray[i],0,'*');
      }
    }
    console.log(translation); */
    var key;
    var lastKey = false;
    var tempTranslation = [];
    var length = translation.length;

    for(var i=0; i<length;i++){
      key = translation.shift();
      if(lastKey){
        if('0123456789./*+-(),'.indexOf(key) === -1 && lastKey === ')'){
          tempTranslation.push('*');
        }
        else if(key === '(' && lastKey === ')')
          tempTranslation.push('*');
      }
      tempTranslation.push(key);
      lastKey = key;
    }
    console.log(tempTranslation);
    translation = tempTranslation;
  }


  myMathlib.calculate = function() {
    //console.log(translation.join(''));
    console.log(translation);
    addMissingOperatorsBeforeTranslation();
  //  console.log(functionMapping);
    translateFunction();
    console.log(translation);
    //console.log(translation.join(''));
    completeEquation();
        console.log(translation);
    var translationText = translation.join('');
    //translationText = addMissingOperators(translationText);
    console.log('translation: ' + translationText);
    try{
      var output = eval(translationText);
    }
    catch(err){
      output = 'unable to evaluate the following expression';
    }
    init();
    console.log('output: ' + output);
    return output;
  }
  return myMathlib;
}))

/************************************
Test Cases:
  each array inside test simulates a sequence of user input
*****************************************/
