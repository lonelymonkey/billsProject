(function(factory){
  window.spinningWheel = factory({});
}(function(spinningWheel){
  var config = {};
  var total = 1;
  var pieChart = {
  /*  name:[10,30,20,60,40],
    probability:[0.1,0.3,0.2,0.6,0.4],
    color:["#ECD078","#D95B43","#C02942","#542437","#53777A"] */
    set:[],
    name:[],
    probability:[],
    color:[],
    winner:[]
  }
  var textArray = [];

  var degree = 0, timer;
  var random = Math.random();
  var submitFlag = false;
  var rotateFlag = false;

  var lastEndArray = [];
  var sectorWidth = [];
  var lastText;

  var finalDistance;

  var probabilityArray = [];
  var j=0;
  var winner;
  var wheelSetName = '';

  function hash(){
    var x = location.hash
    x = unescape(x);
    console.log(x);
    if(x != ''){
      var xObject = x.substring(1);
      xObject = JSON.parse(xObject);
      console.log(xObject);
      console.log(xObject.name);
      var insertItems;
      for(var i=0; i< xObject.name.length - 1; i++){
        formView();
      }
      insertItems = document.getElementsByClassName('input');
      console.log(insertItems);
      for(i=0; i<insertItems.length; i+=3){
        insertItems[i].value = xObject.name[j];
        insertItems[i+1].value = xObject.probability[j];
        insertItems[i+2].value = xObject.color[j];
        j++;
      }
    }
    //http://billchou.local/spinning%20wheel/#part2#123#ECD078#part3#234#D95B43
  }

  function write(pieChart) {
      /*  if (window.XMLHttpRequest) {4
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","spinningWheel.php?q=" + escape(JSON.stringify(pieChart)),true);
        xmlhttp.send();*/
        $.post("write.php",pieChart,function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
    }

  function retrival(){
    $.get("retrival.php",
  function(data,status){
    spinningWheel.creatingPanelList(data,status);
  });
  }
  spinningWheel.creatingPanelList = function(data,status){
    var allData = JSON.parse(data);
    console.log(allData);
    var eachSet = '';
    var setProperty = {
      setName:'',
      name:[],
      distribution:[],
      color:[]
    }
    var index = 1;

    for(var i=0; i<allData.length; i++){
      console.log(i);
      if(allData[i].setID == index){
        setProperty.setName = allData[i].setName;
        setProperty.name.push(allData[i].name);
        setProperty.distribution.push(allData[i].distribution);
        setProperty.color.push(allData[i].color);
        if(i < allData.length - 1){
          if(allData[i+1].setID != index){

            eachSet += '<div class="dropdown">' +
                      '<button onclick=$("#myDropdown'+index+'").toggle(); class="dropbtn"><div id="setName'+index+'">'+ setProperty.setName +'</div></button>' +
                      '<div id="myDropdown'+index+'" class="dropdown-content">' +
                      '<a id="name">'+ setProperty.name +'</a>' +
                      '<a id="distribution">'+ setProperty.distribution+'</a>' +
                      '<a id="color">'+ setProperty.color+'</a>' +
                      '<a><button onclick=spinningWheel.applyToField("'+index+'")>apply</button></a>' +
                      '</div>' +
                      '</div>';
            //eachSet += '<li>' + JSON.stringify(setProperty) + '</li>';
            $('#panel').append(eachSet);
            setProperty = {
              setName:'',
              name:[],
              distribution:[],
              color:[]
            };
            eachSet = '';
            index++;
          }
          }
        else if (i == allData.length - 1) {
          eachSet += '<div class="dropdown">' +
                    '<button onclick=$("#myDropdown'+index+'").toggle(); class="dropbtn"><div id="setName'+index+'">'+ setProperty.setName +'</div></button>' +
                    '<div id="myDropdown'+index+'" class="dropdown-content">' +
                    '<a id="name">'+ setProperty.name +'</a>' +
                    '<a id="distribution">'+ setProperty.distribution+'</a>' +
                    '<a id="color">'+ setProperty.color+'</a>' +
                    '<a><button onclick=spinningWheel.applyToField("'+index+'")>apply</button></a>' +
                    '</div>' +
                    '</div>';
        //  eachSet += '<li>' + JSON.stringify(setProperty) + '</li>';
          $('#panel').append(eachSet);
          setProperty = {
            setName:'',
            name:[],
            distribution:[],
            color:[]
          };
          eachSet = '';
        }
        }


      }

    console.log( data + "status:" + status);
  }
  spinningWheel.applyToField = function(index){
    $('.set').remove();

    var setName = document.getElementById('wheelSet');
    var property = document.getElementsByClassName('input');
    var propertyName = $('#myDropdown' + index + ' #name').html();
    var propertyDistribution = $('#myDropdown' + index + ' #distribution').html();
    var propertyColor = $('#myDropdown' + index + ' #color').html();
    var j = 0;
    propertyName = propertyName.split(',');
    propertyDistribution = propertyDistribution.split(',');
    propertyColor = propertyColor.split(',');
    console.log(index);
    console.log(document.getElementById('setName'+index));
    setName.value = document.getElementById('setName'+index).innerHTML;

    for(var i=0; i< propertyName.length - 1; i++){
      formView();
    }
    for(i=0; i<property.length; i+=3){
      property[i].value = propertyName[j];
      property[i+1].value = propertyDistribution[j];
      property[i+2].value = propertyColor[j];
      j++;
    }
  }

  function buildUIFrame(){
    var view = '';
    view +=
    '<div id="formBox">' +
    '<div id="form">' +
    '<input id="wheelSet" type="text" name="wheelSet" style="width: 100px" placeholder= "Wheelset">'  +
    '</br>' +
      '<ul class="row">' +
        '<li class="columnName">Name</li>' +
        '<li class="columnProb">Probability</li>' +
        '<li class="columnColor">Color</li>' +
      '</ul>' +
    '</br>' +
    '</br>' +
      '<form id="template">' +
      '</form>' +
    '</div>' +
    '<div id="options">' +
    '<button id="key">More</button>' +
    '<button id="submit">Submit</button>' +
    '</div>' +
    '</div>' +
    '<div id="wheelbox">' +
    '<canvas id="can" width="200" height="200"></canvas>' +
      '<div id="triangle-left"></div>' +
      '</div>' +
      '</div>' +
    '<div id="panel">' +
      '</div>';
    $('#app-wrapper').html(view);
    $('#triangle-left').hide();
    bindEvents();
  }
    function formView(){
      var form = '';
      form +=
      '<div class="set">' +
      '<ul class="row">'  +
        '<li class="columnCol"><input class="input" type="text" name="Name" style="width: 100px" placeholder= "Name"></li>'  +
        '<li class="columnCol"><input class="input" type="text" name="Probability" style="width: 100px" placeholder= "Probability"></li>'  +
        '<li class="columnCol"><input class="input" type="color" name="color" style="width: 20px" value=' + randomColor() + '></li>' +
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
        '<li class="columnCol"><input class="input" type="text" name="Name" style="width: 100px" placeholder= "Name"></li>'  +
        '<li class="columnCol"><input class="input" type="text" name="Probability" style="width: 100px" placeholder= "Probability"></li>'  +
        '<li class="columnCol"><input class="input" type="color" name="color" style="width: 20px" value=' + randomColor() + '></li>' +
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
      if(rotateFlag == true){
        $('.dropdown').remove();
        $('#triangle-left').show();
        pieChart = {
          set:[],
          name:[],
          probability:[],
          color:[],
          winner:[]
        };
        degree = 0;
        finalDistance = 0;
        sectorWidth = [];
        var x = document.getElementById("template");
        submitFlag = true;
        console.log(x);
        console.log(x.length);
        var text = '';
        var hashObject = '';
        var wheelSet = document.getElementById('wheelSet').value;
        console.log(wheelSet);
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

        hashObject = JSON.stringify(pieChart);
        console.log(hashObject);
        window.location.href = '#' + escape(hashObject);
        drawPieChart();

        for(var i=0; i<lastEndArray.length; i++){
          if(i != lastEndArray.length - 1){
            sectorWidth.push(lastEndArray[i+1]-lastEndArray[i]);
          }
          else{
            sectorWidth.push(6.28 - Number(lastEndArray[i]));
          }
        }
        winner = getRandom();

        console.log(winner);

        pieChart.set.push(wheelSet);
        pieChart.winner.push(pieChart.name[winner]);
        write(pieChart);
        console.log(sectorWidth);
        for(i = sectorWidth.length-1; i>winner; i--){
          finalDistance += sectorWidth[i];
        }
        console.log(finalDistance);
        finalDistance = (finalDistance + Math.random()*sectorWidth[winner])*180/Math.PI;
        console.log(finalDistance);
        retrival();
        rotate();
      }
      }

      function drawPieChart(){
        lastEndArray = [];
        probabilityArray = [];
        var canvas;
        var ctx;
        var lastEnd = 0;
        /*  name:[10,30,20,60,40],
          probability:[0.1,0.3,0.2,0.6,0.4],
          color:["#ECD078","#D95B43","#C02942","#542437","#53777A"] */
        var pieColor = pieChart.color;
        var pieData = pieChart.probability;
        var pieName = pieChart.name;
        var pieTotal = pieData.reduce(function(a, b) { return Number(a) + Number(b); }, 0);

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

      function getRandom(){
        var num = Math.random();
        s = 0;
        lastIndex = probabilityArray.length - 1;
        for(var i=0;i<lastIndex;i++){
          s += probabilityArray[i];
          if(num < s){
            return i;
          }
        }
        return lastIndex;
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
        alert('the winner is ' + pieChart.name[winner]);
      }

      function autoUpdate(){
        setInterval(function(){
                validation();
                //retrival();
          if(submitFlag == false){
            pieChart = {
              set:[],
              name:[],
              probability:[],
              color:[],
              winner:[]
            };
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
          }
        }, 5);
      }

      function validation(){
        var validateItems = document.getElementsByClassName('input');
        var validateSet = document.getElementById('wheelSet');
        //console.log(validateItems);
      //  console.log(validateItems[0].value);
      if(validateSet.value == ''){
        $(validateSet).css('border','red solid 1px');
      }
      else{
        $(validateSet).css('border','white solid 1px');
      }

        for(var i =0; i<validateItems.length; i++){
          if(validateItems[i].value == ''){
            $(validateItems[i]).css('border','red solid 1px');
            rotateFlag = false;
          }
          else if(validateItems[i].placeholder == 'Probability'){
            //console.log(/^[0-9]+$/.test(validateItems[i].value));
            if(/^[0-9]+$/.test(validateItems[i].value) == false){
              $(validateItems[i]).css('border','red solid 1px');
              rotateFlag = false;
            }
            else{
              $(validateItems[i]).css('border','white solid 1px');
              rotateFlag = true;
            }
          }
          else if(validateItems[i].type == 'color') {
            continue;
          }
          else{
            $(validateItems[i]).css('border','white solid 1px');
            rotateFlag = true;
          }
        }
      }

  spinningWheel.load = function(cfg){
    saveConfig(cfg);
    buildUIFrame();
    formViewInit();
    remove();
    autoUpdate();
    hash();
    retrival();
    //requestData();
    //drawPieChart();
  }

  function saveConfig(cfg) {
    $.extend(config,cfg);
  }


  return spinningWheel;
}))
