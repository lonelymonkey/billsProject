var test = [
  {
    'type' : 'basic operation with +-*/ and ( )',
    'testCases' : [
      ['(','4',')','(','3','+','4',')', '/', '2'],
      ['(','4',')','(','3','+','4'],  //test auto complete bracket
      ['(','4',')','3','+','4'],
      ['1','4','+','3','-','4'],
      ['1','4','+','3','*','4'],
      ['1','+','(','3'],
      ['(','2',')','(','2',')','+','1'],
      ['(','1','+','3',')','+','(','2', '+', '1',')']
    ],
    'expectedResults' : [
      14,28,16,13,26,4,5,7
    ]
  },
  {
    'type' : 'operation with ^',
    'testCases' : [
      ['(','3',')','(','1','+','1',')', '^', '(', '1', '+', '1',')', '+', '(', '1', '+', '2' ],
      ['1','+','(','1','+','1',')', '^', '(', '1', '+', '1', ')' , '+', '1'],
      ['(','1','+','1',')', '^', '(', '1', '+', '1' ],
      ['(','4',')','(','3','+','4',')', '^', '2'],
      ['1','+','3','^','2'],
      ['2','^','(', '2', '^', '2', '+', '1', ')'],
      ['2','^', '2', '^', '3'],
      ['2','^','(', '2', '^', '3', ')'],
      ['2','^','(', '2', '^', '2', '+', '1', ')', '^', '2'],
      ['2','^','(', '2', '^', '2', '+', '1', ')', '^', '(', '1' , '+', '1' , ')' , '+', '3'],
      ['(', '2', '^', '2', '+', '1', ')', '^', '(', '1' , '+', '1' , ')' , '+', '3'],
    ],
    'expectedResults' : [
      15,6,4,196,10,32,64,256,1024,1027,28
    ]
  }
];
var failedTest = [];
var testResults = [];
test.forEach(function(t){
  console.log('Testing for: '+t.type);
  var testResultObj = {
    type : t.type,
    results : []
  };
  var expectedResults = t.expectedResults;
  t.testCases.forEach(function(input,index,arr){
    input.forEach(function(c){
      myMathlib.hit(c);
    });
    console.log('input: '+ input.join(''));
    var result = myMathlib.calculate();
    if (expectedResults[index] != result) {
      failedTest.push(input);
    }
    testResultObj.results.push(result);
  })
  testResults.push(testResultObj);
});
console.log(failedTest);
if (failedTest.length <= 0) {
  console.log('all testCases passed!');
} else {
  console.log('Failed TestCases: ');
  failedTest.forEach(function(testcase){
    console.log(testcase.join(''));
  });
}
