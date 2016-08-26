(function(factory){
  window.spinningWheel = factory({});
}(function(spinningWheel){
  var config = {};
  var total = 1;
  var pieChart = {
  /*  name:[10,30,20,60,40],
    probability:[0.1,0.3,0.2,0.6,0.4],
    color:["#ECD078","#D95B43","#C02942","#542437","#53777A"] */
    name:[],
    probability:[],
    color:[]
  }
  var textArray = [];

  var degree = 0, timer;
  var random = Math.random();

  function buildUIFrame(){
    var view = '';
    view += '<button class="key">More</button>' +
    '<button id="submit">Submit</button>';

    $('#options').html(view);
    bindEvents();
  }
    function formView(){
      var form = '';
      form +=
      '<div class="set">' +
      '<ul class="row">'  +
        '<li class="columnNum">#</li>'  +
        '<li class="columnName">Name</li>'  +
        '<li class="columnProb">Probability</li>'  +
        '<li class="columnColor">Color</li>'  +
      '</ul>'  +
      '</br>'  +
      '<ul class="row">'  +
        '<li class="columnCol">' + total + '</li>'  +
        '<li class="columnCol"><input type="text" name="Name' + total + '" style="width: 100px"></li>'  +
        '<li class="columnCol"><input type="text" name="Probability' + total + '" style="width: 100px"></li>'  +
        '<li class="columnCol">' +
        '<select>' +
        '<option>-- Select Color --</option>' +
        '<option value="blue">blue</option>' +
        '<option value="red">red</option>' +
        '<option value="yellow">yellow</option>' +
        '<option value="black">black</option>' +
        '</li>'  +
      '</ul>'  +
      '</div>' +
      '</br>' +
      '</br>';
      $('#template').append(form);
      total++;
    }

    function bindEvents(){
      $('.key').click(function(){
        formView();
      });
      $('#submit').click(function(){
        submit();
      });
    }

    function submit(){
      var x = document.getElementById("template");
      console.log(x.length);
      var text = '';
      for (var i = 0; i < x.length ;i++) {
        text += x[i].value + "<br>";
      }
      console.log(text);
      textArray = text.split('<br>');
      textArray.pop();
      console.log(textArray);
      for (var i =0; i< textArray.length; i+=3){
        pieChart.name.push(textArray[i]);
        pieChart.probability.push(textArray[i+1]);
        pieChart.color.push(textArray[i+2]);
        console.log(pieChart);
      }
      drawPieChart();
      rotate();
      }

      function drawPieChart(){
        var canvas;
        var ctx;
        var lastEnd = 0;
        var pieColor = pieChart.color;
        var pieData = pieChart.probability;
        var pieName = pieChart.name;
        var pieTotal = pieData.reduce(function(a, b) { return Number(a) + Number(b); }, 0);
        console.log(pieTotal);

        canvas = document.getElementById('can');
        console.log(canvas);
        ctx = canvas.getContext('2d');
        console.log(ctx);

        var hwidth = ctx.canvas.width/2;
        var hheight = ctx.canvas.height/2;
        console.log(pieData);
        console.log(pieColor);
        console.log(pieName);
        for (var i = 0; i < pieData.length; i++) {
                ctx.fillStyle = pieColor[i];
                ctx.beginPath();
                ctx.moveTo(hwidth,hheight); //starting position
                ctx.arc(hwidth,hheight,hheight,lastEnd,lastEnd+
                  (Math.PI*2*(pieData[i]/pieTotal)),false);  //ctx.arc(x,y,radius,startAngle,endAngle,counterclockwise);
                ctx.lineTo(hwidth,hheight);
                ctx.fill();

                var radius = hheight/1.5; //put the label in the middle
                var endAngle = lastEnd + (Math.PI*(pieData[i]/pieTotal)); //place the label in the middle of the sector
                var setX = hwidth + Math.cos(endAngle) * radius; //origin + r*cos(desiredAngle)
                var setY = hheight + Math.sin(endAngle) * radius;//origin + r*sin(desiredAngle)
                ctx.fillStyle = "#ffffff";
                ctx.font = '14px Calibri';
                ctx.fillText(pieName[i],setX,setY);

                lastEnd += Math.PI*2*(pieData[i]/pieTotal);
              }
      }

      function rotate() {
          $('#can').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
          $('#can').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
          timer = setTimeout(function() {
            if(degree < 1500*random){
              ++degree; rotate();
            }
            else if(degree >= 1500*random && degree < 3000*random){
              degree = degree + 2; rotate();
            }
            else if(degree >= 3000*random && degree < 4500*random){
              degree = degree + 3; rotate();
            }
            else if(degree >= 4500*random && degree < 6000*random){
              degree = degree + 4; rotate();
            }
            else if(degree >= 6000*random && degree < 7500*random){
              degree = degree + 5; rotate();
            }
            else if(degree >= 7500*random && degree < 9000*random){
              degree = degree + 6; rotate();
            }
            else if(degree >= 9000*random && degree < 10500*random){
              degree = degree + 5; rotate();
            }
            else if(degree >= 10500*random && degree < 12000*random){
              degree = degree + 4; rotate();
            }
            else if(degree >= 12000*random && degree < 13500*random){
              degree = degree + 3; rotate();
            }
            else if(degree >= 13500*random && degree < 15000*random){
              degree = degree + 2; rotate();
            }
            else if(degree >= 15000*random && degree < 16500*random){
              ++degree; rotate();
            }
            else if(degree >= 16500*random){
              stop();
            }
              console.log(degree);
          },5);
      }

      function stop(){
        clearTimeout(timer);
      }

  spinningWheel.load = function(cfg){
    saveConfig(cfg);
    buildUIFrame();
    formView();
    //drawPieChart();
  }

  function saveConfig(cfg) {
    $.extend(config,cfg);
  }


  return spinningWheel;
}))
