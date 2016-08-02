//window.myCalculator = factory({});
(function(factory){
  window.myCalculator = factory({});
}

(function(myCalculator){
  var config = {
    msg : 'hello world',
    'containerId' : 'app-wrapper'
  };
  var registeredFunctions = {};
  registeredFunctions.sqrt = function(){
    alert('fk u');
  }
  ///

  myCalculator.registerMyOwnFunction = function(key, func) {
    registeredFunctions[key] = func;
  }
  myCalculator.hello = function() {
    alert(config.msg);
  };

  function saveConfig(cfg) {
    $.extend(config,cfg);
  }
  function buildUIFrame() {
    var view = '';
    view += ''+
              '<div id="background">'+
              '<div id="screen">'+
                '<ul class="spacing">'+
                  '<li> <button class="key">C</button> </li>'+
                  '<li> <div id="display"></div></li>'+
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
    console.log($('#'+config.containerId).html(view));
    bindEvents();
  }
  function bindEvents(){
    $('.key').each(function(){
      $(this).click(function(){
        var key = $(this).html();
        if (typeof(registeredFunctions[key]) == 'function') {
          registeredFunctions[key]();
        } else {
          console.log('this function is not supported yet');
        }

      });
    });
  }
  myCalculator.load = function(cfg){
    //save config
    saveConfig(cfg);

    //build APP UI
    buildUIFrame();



  }
  myCalculator.sqrt = function() {
    alert('fk u');
  }

  return myCalculator;
}));

/*
function factory(cfg){
  //default config
  var config = {
    msg : 'hello world'
  };

  $.extend(config,cfg);

  function doSomething() {

  }

  var hello = function() {
    alert(config.msg);
  }
  return {
    hello : hello
  };
}*/
