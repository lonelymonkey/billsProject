//  result.innerHTML = "6^6^1+5^5^2+5^2+3^2+5^1^1^1^1+2^2^2^2";
console.log(tempResultArray);
result.innerHTML = "9/6-9^2*tan(9897987)*sin(6666)/cos(5555)";
console.log(result.innerHTML);
/*  var expo = [];
  var expoLength;
  var i;
  var numOfOperator;
  var tempExpo;*/
  clearFlag = 1;
  //variables for calculating power inside an expression
  var nonNumBraket = '+-/*()';
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
  var tempResult;

  var separate = [];
  var powerTemp;

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

  for(i=0; i<numOfOccurencesArray.length; i++){
    if(numOfOccurencesArray[i+1] - numOfOccurencesArray[i] == 2){
      continue;
    }
    numOfOccurencesArrayEliDuplication[i] = numOfOccurencesArray[i];
  }

  numOfOccurencesArrayEliDuplication = numOfOccurencesArrayEliDuplication.filter(function(v){return v!==''});

//  console.log(numOfOccurencesArray);
//  console.log(numOfOccurencesArrayEliDuplication);

  for(i = 0; i < numOfOccurencesArrayEliDuplication.length; i++) {
    countNumR = 0;
  //  console.log(result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i]+countNumR+1, numOfOccurencesArrayEliDuplication[i]+countNumR+2));
    while (nonNumBraket.indexOf(result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i]+countNumR+1, numOfOccurencesArrayEliDuplication[i]+countNumR+2)) == -1) {
      countNumR++;
    //  console.log(countNumR);
    }

    right = result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i]+1,numOfOccurencesArrayEliDuplication[i]+countNumR+1);

    countNumL = 0;

    while (nonNumBraket.indexOf(result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i]-countNumL-1, numOfOccurencesArrayEliDuplication[i]-countNumL)) == -1) {
      countNumL++;
    //  console.log(countNumL);
    }

    left = result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i]-countNumL,numOfOccurencesArrayEliDuplication[i]);

  //  console.log(left.split('^'))
    if(left.indexOf('^') > -1){
      separate = left.split('^');
      powerTemp = separate[0];
     for(var l=1; l<separate.length; l++){
        powerTemp = Math.pow(powerTemp,separate[l]);
      }
      left = powerTemp;
    }
    /*  var separators = ['\\\+', '-', '\\*', '/', '\\\(', '\\\)'];
      console.log(separators.join('|'));
      var tokens = result.innerHTML.split(new RegExp('[-+()*'/':? ]', 'g'));
          tokens = tokens.filter(Boolean);
      var nonTokens = result.innerHTML.replace(/[0-9]|\^|\./g, '');*/

    console.log(right);
    console.log(left);
    //console.log(numOfOccurencesArray[i] - countNumL);
    //console.log(numOfOccurencesArray[i] + countNumR + 1);
  productOriginalArray[i] = result.innerHTML.substring(numOfOccurencesArrayEliDuplication[i] - countNumL,numOfOccurencesArrayEliDuplication[i] + countNumR + 1);
  product = Math.pow(left,right);
  productArray[i] = product;
  }
  tempResult = result.innerHTML;

  for(i=0; i<productOriginalArray.length; i++) {
    tempResult = tempResult.replace(productOriginalArray[i],productArray[i]);
  }

//  console.log(productArray);
//  console.log(productOriginalArray);
//  console.log(tempResult);

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
//     console.log(tempResult.substring(numOfOccurencesArraySR[k] + 2,numOfOccurencesArraySR[k] + countNumSR + 2));
  //   console.log(numOfOccurencesArraySR[i] + countNumSR);
   productOriginalArraySR[k] = tempResult.substring(numOfOccurencesArraySR[k] + 3,numOfOccurencesArraySR[k] + countNumSR + 3);
   productSR = Math.sqrt(eval(productOriginalArraySR[k]));
    productArraySR[k] = productSR;
  }

//    console.log(productArraySR);
//    console.log(productOriginalArraySR);

  for(i=0; i<productOriginalArraySR.length; i++) {
    tempResult = tempResult.replace('sqrt(' + productOriginalArraySR[i] + ')',productArraySR[i]);
  }
//    console.log(tempResult);
  //console.log(tempResult.substring(numOfOccurencesArraySR[0]+2, numOfOccurencesArraySR[0]+3));







  numOfOccurencesTrig = tempResult.indexOf('n');
  while(numOfOccurencesTrig >= 0) {
    numOfOccurencesArrayTrig[t] = numOfOccurencesTrig;
    t++;
    numOfOccurencesTrig = tempResult.indexOf('n', numOfOccurencesTrig+1);
  }

  console.log(numOfOccurencesArrayTrig);

  for(t = 0; t < numOfOccurencesArrayTrig.length; t++) {
    countNumTrig = 0;

    while(endTrig.indexOf(tempResult.substring(numOfOccurencesArrayTrig[t]+countNumTrig+2, numOfOccurencesArrayTrig[t]+countNumTrig+3)) == -1) {

  console.log(countNumTrig);
      countNumTrig++;
    }

     console.log(tempResult.substring(numOfOccurencesArrayTrig[t] + 2,numOfOccurencesArrayTrig[t] + countNumTrig + 2));
     console.log(numOfOccurencesArraySR[i] + countNumSR);
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

//  console.log(productArrayTrig);
//  console.log(productOriginalArrayTrig);

  for(i=0; i<productOriginalArrayTrig.length; i++) {
    if(trigTest[i] === 's'){
      tempResult = tempResult.replace('sin(' + productOriginalArrayTrig[i] + ')',productArrayTrig[i]);
    }
    else if (trigTest[i] === 't') {
      tempResult = tempResult.replace('tan(' + productOriginalArrayTrig[i] + ')',productArrayTrig[i]);
    }
  }
//  console.log(tempResult);








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
//     console.log(tempResult.substring(numOfOccurencesArrayCos[c] + 2,numOfOccurencesArrayCos[c] + countNumCos + 2));
  //   console.log(numOfOccurencesArraySR[i] + countNumSR);
    productOriginalArrayCos[c] = tempResult.substring(numOfOccurencesArrayCos[c] + 2,numOfOccurencesArrayCos[c] + countNumCos + 2);
//    console.log(tempResult.substring(numOfOccurencesArrayCos[c],numOfOccurencesArrayCos[c]-2));
   productCos = Math.cos(eval(productOriginalArrayCos[c]));
    productArrayCos[c] = productCos;
  }

//    console.log(productArrayCos);
//    console.log(productOriginalArrayCos);

  for(i=0; i<productOriginalArrayCos.length; i++) {
    tempResult = tempResult.replace('cos(' + productOriginalArrayCos[i] + ')',productArrayCos[i]);
  }
//    console.log(tempResult);


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

  result.innerHTML = eval(tempResult);

  /// if the end expression still has alphabets and operators, output error message
