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
  var winner = 0;
  var wheelSetName = '';


  function hash(){
    var x = location.hash
    x = unescape(x);
  //  console.log(x);
    if(x != ''){
      var xObject = x.substring(1);
      xObject = JSON.parse(xObject);
  //    console.log(xObject);
  //    console.log(xObject.name);
      var insertItems;
      var insertName = document.getElementById('wheelSet');
      insertName.value = xObject.set[0];
      for(var i=0; i< xObject.name.length - 1; i++){
        formView();
      }
      insertItems = document.getElementsByClassName('input');
  //    console.log(insertItems);
      for(i=0; i<insertItems.length; i+=3){
        insertItems[i].value = xObject.name[j];
        insertItems[i+1].value = xObject.probability[j];
        insertItems[i+2].value = xObject.color[j];
        j++;
      }
    }
    //http://billchou.local/spinning%20wheel/#part2#123#ECD078#part3#234#D95B43
  }

  function winnerList(){
    $.get("winner.php",function(data,status){
      var winnerList = JSON.parse(data);
      var insertNum = 0;
      console.log(JSON.parse(data));
      for(var i=0; i<winnerList.length; i++){
        $('#winner'+winnerList[i].setID).append('<option>#'+i+':'+ winnerList[i].winner +'</option>');
      }
    })
  }

  function createList(array){
    var view = '<ul>';
    for(var i=0; i<array.length;i++){
      if(array[i].charAt(0) != '#'){
        view += '<li>' + (i+1) + '.' + array[i] + '</li>';
      }
      else{
        view += '<li>' + (i+1) + '.' + '<input class="input" type="color" name="color" style="width: 20px" value='+ array[i] +'>' + '</li>';
      }
    }
    view += '</ul>';
    console.log(view);
    return view;
  }
// slksdafjlksadf
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
        console.log(data + "\nStatus: " + status);
        winner = data;
        console.log(winner);
      //  console.log(sectorWidth);
        for(i = sectorWidth.length-1; i>winner; i--){
          finalDistance += sectorWidth[i];
        }
        console.log(finalDistance);
        finalDistance = (finalDistance + Math.random()*sectorWidth[winner])*180/Math.PI;
        console.log(finalDistance);
        //retrieval();
        rotate();
    });
    }

  function retrieval(){
    $.get("retrieval.php",
  function(data,status){
    spinningWheel.creatingPanelList(data,status);
  });
  }


  spinningWheel.creatingPanelList = function(data,status){
    var allData = JSON.parse(data);
    //console.log(allData);
    var eachSet = '';
    var setProperty = {
      setID:'',
      setName:'',
      name:[],
      distribution:[],
      color:[]
    }
    var index = 1;

    for(var i=0; i<allData.length; i++){
      //console.log(i);
      if(allData[i].setID == index){
        setProperty.setID = allData[i].setID;
        setProperty.setName = allData[i].setName;
        setProperty.name.push(allData[i].name);
        setProperty.distribution.push(allData[i].distribution);
        setProperty.color.push(allData[i].color);
        if(i < allData.length - 1){
          if(allData[i+1].setID != index){

            eachSet += '<div class="dropdown">' +
                      '<button onclick=$("#myDropdown'+index+'").toggle(); class="dropbtn"><div id="setName'+index+'">'+ setProperty.setName +'</div></button>' +
                      '<div id="myDropdown'+index+'" class="dropdown-content">' +
                      '<div class="setID">'+ setProperty.setID +'</div>' +
                      '<div class="listBlock">' +
                      '<a class="name" id="name">'+ setProperty.name +'</a>' +
                      '<div class="detailName detail">'+createList(setProperty.name)+'</div>' +
                      '</div>' +
                      '<div class="listBlock">' +
                      '<a class="distribution" id="distribution'+index+'">'+ setProperty.distribution+'</a>' +
                      '<div class="detailDis detail">'+createList(setProperty.distribution)+'</div>' +
                      '</div>' +
                      '<div class="listBlock">' +
                      '<a class="color" id="color'+index+'">'+ setProperty.color+'</a>' +
                      '<div class="detailColor detail">'+createList(setProperty.color)+'</div>' +
                      '</div>' +
                      '<a><select id="winner'+index+'" class="winnerList"></select></a>' +
                      '<a><button onclick=spinningWheel.applyToField("'+index+'")>apply</button></a>' +
                      '</div>' +
                      '</div>';
            //eachSet += '<li>' + JSON.stringify(setProperty) + '</li>';
            $('#panel').append(eachSet);

            setProperty = {
              setID:'',
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
                    '<div class="setID">'+ setProperty.setID +'</div>' +
                    '<div class="listBlock">' +
                    '<a class="name" id="name">'+ setProperty.name +'</a>' +
                    '<div class="detailName detail">'+createList(setProperty.name)+'</div>' +
                    '</div>' +
                    '<div class="listBlock">' +
                    '<a class="distribution" id="distribution'+index+'">'+ setProperty.distribution+'</a>' +
                    '<div class="detailDis detail">'+createList(setProperty.distribution)+'</div>' +
                    '</div>' +
                    '<div class="listBlock">' +
                    '<a class="color" id="color'+index+'">'+ setProperty.color+'</a>' +
                    '<div class="detailColor detail">'+createList(setProperty.color)+'</div>' +
                    '</div>' +
                    '<a><select id="winner'+index+'" class="winnerList"></select></a>' +
                    '<a><button onclick=spinningWheel.applyToField("'+index+'")>apply</button></a>' +
                    '</div>' +
                    '</div>';
        //  eachSet += '<li>' + JSON.stringify(setProperty) + '</li>';
          $('#panel').append(eachSet);
          setProperty = {
            setID:'',
            setName:'',
            name:[],
            distribution:[],
            color:[]
          };
          eachSet = '';
        }
        }


      }

  //  console.log( data + "status:" + status);
  }

  spinningWheel.applyToField = function(index){
    $('.set').remove();

    var setName = document.getElementById('wheelSet');
    var property = document.getElementsByClassName('input');
    var propertyName = $('#myDropdown' + index + ' .name').html();
    var propertyDistribution = $('#myDropdown' + index + ' .distribution').html();
    var propertyColor = $('#myDropdown' + index + ' .color').html();
    var j = 0;
    propertyName = propertyName.split(',');
    propertyDistribution = propertyDistribution.split(',');
    propertyColor = propertyColor.split(',');
  //  console.log(index);
    //console.log(document.getElementById('setName'+index));
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

      $(document).on("mouseenter", ".name", function() {
        $('.detailName').show();
      });

      $(document).on("mouseleave", ".name", function() {
      $('.detailName').hide();
      });

      $(document).on("mouseenter", ".distribution", function() {
        $('.detailDis').show();
      });

      $(document).on("mouseleave", ".distribution", function() {
      $('.detailDis').hide();
      });

      $(document).on("mouseenter", ".color", function() {
        $('.detailColor').show();
      });

      $(document).on("mouseleave", ".color", function() {
      $('.detailColor').hide();
      });
    }

    function submit(){
      if(rotateFlag == true){
        $('#triangle-left').show();
        pieChart = {
          set:[],
          name:[],
          probability:[],
          color:[],
        };
        degree = 0;
        finalDistance = 0;
        sectorWidth = [];
        var x = document.getElementById("template");
        submitFlag = true;
      //  console.log(x);
      //  console.log(x.length);
        var text = '';
        var hashObject = '';
        var wheelSet = document.getElementById('wheelSet').value;
      //  console.log(wheelSet);
        for (var i = 0; i < x.length ;i++) {
          if(x[i].value === 'x'){
            continue;
          }
          else{
            text += x[i].value + "<br>";
          }
        }
    //    console.log(text);
        textArray = text.split('<br>');
        textArray.pop();
        //console.log(textArray);
        for (var i =0; i< textArray.length; i+=3){
          pieChart.name.push(textArray[i]);
          pieChart.probability.push(textArray[i+1]);
          pieChart.color.push(textArray[i+2]);
        //  console.log(pieChart);
        }
        pieChart.set.push(wheelSet);

        hashObject = JSON.stringify(pieChart);
      //  console.log(hashObject);
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
        //pieChart.winner.push(pieChart.name[winner]);
        console.log(pieChart);
        write(pieChart);//getRandom();
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
        //console.log(canvas);
        ctx = canvas.getContext('2d');
      //  console.log(ctx);

        var hwidth = ctx.canvas.width/2;
        var hheight = ctx.canvas.height/2;
      //  console.log(pieData);
      //  console.log(pieColor);
      //  console.log(pieName);
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
          //      console.log(lastEndArray);
                lastEnd += Math.PI*2*(pieData[i]/pieTotal);

              }
        //      console.log(probabilityArray);
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

      function refresh(){
        $.get("refresh.php",function(data,status){
          data = JSON.parse(data);
        //  console.log(data);
          var lastSetId = document.getElementsByClassName('setID').length;
          //console.log(lastSetId);
          var createOneRow = '';
          var object = {
            setID:'',
            set:'',
            name:[],
            distribution:[],
            color:[]
          }
          if(data != ''){
            if(data[0].setID != lastSetId){
              for(var i=0; i<data.length; i++){
                object.setID = data[i].setID;
                object.set = data[i].setName;
                object.name.push(data[i].name);
                object.distribution.push(data[i].distribution);
                object.color.push(data[i].color);
              }
              console.log(object);
              createOneRow +=  '<div class="dropdown">' +
                            '<button onclick=$("#myDropdown'+data[0].setID+'").toggle(); class="dropbtn"><div id="setName'+data[0].setID+'">'+ object.set +'</div></button>' +
                            '<div id="myDropdown'+data[0].setID+'" class="dropdown-content">' +
                            '<div class="setID">'+ object.setID +'</div>' +
                            '<div class="listBlock">' +
                            '<a class="name" id="name">'+ object.name +'</a>' +
                            '<div class="detailName detail">'+createList(object.name)+'</div>' +
                            '</div>' +
                            '<div class="listBlock">' +
                            '<a class="distribution" id="distribution'+data[0].setID+'">'+ object.distribution+'</a>' +
                            '<div class="detailDis detail">'+createList(object.distribution)+'</div>' +
                            '</div>' +
                            '<div class="listBlock">' +
                            '<a class="color" id="color'+data[0].setID+'">'+ object.color+'</a>' +
                            '<div class="detailColor detail">'+createList(object.color)+'</div>' +
                            '</div>' +
                            '<a><select id="winner'+data[0].setID+'" class="winnerList"></select></a>' +
                            '<a><button onclick=spinningWheel.applyToField("'+data[0].setID+'")>apply</button></a>' +
                            '</div>' +
                            '</div>';
                  //eachSet += '<li>' + JSON.stringify(setProperty) + '</li>';
                  $('#panel').append(createOneRow);
            }
          }

        });
      }

      function autoUpdate(){
        setInterval(function(){
                validation();
          if(submitFlag == false){
            pieChart = {
              set:[],
              name:[],
              probability:[],
              color:[],
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

      function autoRefresh(){
        setInterval(function(){
          refresh();
        }, 500);
      }

      function validation(){
        var validateItems = document.getElementsByClassName('input');
        var validateSet = document.getElementById('wheelSet');
        //console.log(validateItems);
      //  console.log(validateItems[0].value);



      if(validateSet.value == ''){
        $(validateSet).css('border','red solid 1px');
        rotateFlag = false;
      }
      else{
        $(validateSet).css('border','white solid 1px');
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
      }

  spinningWheel.load = function(cfg){
    saveConfig(cfg);
    buildUIFrame();
    formViewInit();
    remove();
    retrieval();
    autoUpdate();
    hash();

    winnerList();
    autoRefresh();
    //drawPieChart();
  }

  function saveConfig(cfg) {
    $.extend(config,cfg);
  }


  return spinningWheel;
}))
