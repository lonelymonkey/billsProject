(function(factory){
  window.lolHistoryUI = factory({});
}(function(lolHistoryUI){
  var dataAPI ;
  var config;
  var dataModel = {
    matchList : [],
  };

  saveConfig  = function(cfg){
    config = $.extend({},cfg);
  }
  function buildUIFrame () {
    $('#'+config.containerId).html(
      '<div id="data-body"></div>'
    );
  };
  function buildMatchListView(data) {
    var view = '';
    data.forEach(function(match){
      var statusView = (match.stats.win) ? 'YAY' : 'SUCKER' ;
      view += ''+
              '<div><h3>'+statusView+'</h3></div>'+
              '<div>'+JSON.stringify(match.fellowPlayers)+'</div>'+
              '';
    });
    return view;
  }
  buildView = function(){
    var view = '';
    var data = dataModel.matchList.slice(0,5);
    
    view = buildMatchListView(data);

    $('#data-body').html(view);
  };
  lolHistoryUI.load = function(cfg){
    console.log('init from lolHistoryUI');
    saveConfig(cfg);

    dataAPI = lolHistoryData(cfg);
    buildUIFrame();

    dataAPI.matchList(19732385,function(res){
      dataModel.matchList = res.games;
      console.log(dataModel.matchList);
      buildView();
    });


  };
  return lolHistoryUI;
}))
