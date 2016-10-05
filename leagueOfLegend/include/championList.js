(function(factory){
  window.championList = factory({});
}(function(championList){
  var config = {};
  championList.load = function(cfg){
    saveConfig(cfg);
    view();
    getData();
  }

  function view(){
    var view='';
    view +=   '<div id="championSelect" class="container">'+
        '<div class="row">'+
          '<div class="col-md-12">'+
            '<form class="form-inline">'+
              '<div class="form-group">'+
                '<label for="championName">Champion Name:</label>'+
                '<input type="text" class="form-control" id="championName" onkeyup="showResult(this.value)">'+
              '</div>'+
            '</form>'+
          '</div>'+
        '</div>'+

        '<div id="championOverview" class="container">'+
        '</div>'+

      '</div>';
      $('#'+config.containerId).append(view);
  }

  function saveConfig(cfg) {
    $.extend(config,cfg);
  }

  function getData(){
    $.get("include/lolAPI.php",
          function(data, status){
           console.log(JSON.parse(data));
           var imageURL = "http://ddragon.leagueoflegends.com/cdn/4.2.6/img/champion/" + data.data.Ahri.image.full;
          console.log(imageURL);
          $('#championOverview').append('<img src='+imageURL+'>');
       });
  }

  function showResult(championName){
    console.log(championName);
  }

  return championList;
}))
