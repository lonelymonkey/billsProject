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
  var submitFlag = false;

  var lastEndArray = [];
  var sectorWidth = [];
  var lastText;

  var finalDistance;

  var probabilityArray = [];


  function buildUIFrame(){
    var view = '';
    view += '<button id="key">More</button>' +
    '<button id="submit">Submit</button>';

    $('#options').html(view);
    bindEvents();
  }
    function formView(){
      var form = '';
      form +=
      '<div class="set">' +
      '<ul class="row">'  +
        '<li class="columnCol"><input type="text" name="Name" style="width: 100px" placeholder= "Name"></li>'  +
        '<li class="columnCol"><input type="text" name="Probability" style="width: 100px" placeholder= "Probability"></li>'  +
        '<li class="columnCol"><input type="color" name="color" style="width: 20px" value=' + randomColor() + '></li>' +
        '<li class="columnCol"><input class="remove" type="button" value="x"></li>' +
      '</ul>'  +
      '</div>';
      $('#template').append(form);
    }

    function formViewInit(){
      var form = '';
      form +=
      '<div class="setInit">' +
      '<ul class="row">'  +
        '<li class="columnCol"><input type="text" name="Name" style="width: 100px" placeholder= "Name"></li>'  +
        '<li class="columnCol"><input type="text" name="Probability" style="width: 100px" placeholder= "Probability"></li>'  +
        '<li class="columnCol"><input type="color" name="color" style="width: 20px" value=' + randomColor() + '></li>' +
      '</ul>'  +
      '</div>';
      $('#template').append(form);
    }

    function remove(){
      $('#template').on('click','.remove', function(){
        $(this).closest('.set').remove();
      })
    }

    function randomColor(){
      var color = Math.floor(Math.random() * 16777216).toString(16);
      return '#000000'.slice(0, -color.length) + color;
    }

    function bindEvents(){
      $('#key').click(function(){
        formView();
      });
      $('#submit').click(function(){
        submit();
      });
    }

    function submit(){
      pieChart = {
        name:[],
        probability:[],
        color:[]
      };
      degree = 0;
      finalDistance = 0;
      sectorWidth = [];
      var winner;
      var x = document.getElementById("template");
      submitFlag = true;
      console.log(x);
      console.log(x.length);
      var text = '';
      for (var i = 0; i < x.length ;i++) {
        if(x[i].value === 'x'){
          continue;
        }
        else{
          text += x[i].value + "<br>";
        }
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

      for(var i=0; i<lastEndArray.length; i++){
        if(i != lastEndArray.length - 1){
          sectorWidth.push(lastEndArray[i+1]-lastEndArray[i]);
        }
        else{
          sectorWidth.push(6.28 - Number(lastEndArray[i]));
        }
      }
      winner = 0;

      console.log(sectorWidth);
      for(i = sectorWidth.length-1; i>winner; i--){
        finalDistance += sectorWidth[i];
      }
      console.log(finalDistance);
      finalDistance = (finalDistance + Math.random()*sectorWidth[winner])*180/Math.PI;
      console.log(finalDistance);




      rotate();
      }

      function drawPieChart(){
        lastEndArray = [];
        probabilityArray = [];
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
                probabilityArray.push(pieChart.probability[i]/pieTotal);
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

                lastEndArray.push(lastEnd);
                console.log(lastEndArray);
                lastEnd += Math.PI*2*(pieData[i]/pieTotal);
              }
              console.log(probabilityArray);
      }

      function rotate() {
        var speed = ((-9/27500000)*degree*degree)+((189/55000)*degree)+1; //compute the speed of the wheel based on the degree rotated
          $('#can').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
          $('#can').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
          timer = setTimeout(function() {
            if(degree < 10080 + finalDistance){
              degree = degree + speed; rotate();
            }
            else if(degree >= 10080 + finalDistance){
              stop();
              submitFlag = false;
            }
            //  console.log(degree);
          },5);
      }

      function stop(){
        clearTimeout(timer);
      }

      function autoUpdate(){
        setInterval(function(){
          if(submitFlag == false){
            var x = document.getElementById("template");
            var text = '';
            for (var i = 0; i < x.length ;i++) {
              if(x[i].value === 'x'){
                continue;
              }
              else{
                text += x[i].value + "<br>";
              }
            }
            textArray = text.split('<br>');
            textArray.pop();
            for (var i =0; i< textArray.length; i+=3){
              pieChart.name.push(textArray[i]);
              pieChart.probability.push(textArray[i+1]);
              pieChart.color.push(textArray[i+2]);
            }
            if(text.indexOf('<br><br>') == -1){
              if( lastText !== text){
                  drawPieChart();
              }
            }
            lastText = text;
            pieChart = {
              name:[],
              probability:[],
              color:[]
            };
          }
        }, 5);
      }

  spinningWheel.load = function(cfg){
    saveConfig(cfg);
    buildUIFrame();
    formViewInit();
    remove();
    autoUpdate();
    //drawPieChart();
  }

  function saveConfig(cfg) {
    $.extend(config,cfg);
  }


  return spinningWheel;
}))
