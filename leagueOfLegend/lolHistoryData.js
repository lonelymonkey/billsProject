lolHistoryData = function(cfg){
  var config = $.extend({
    apiURL :  'api/history.php'
  },cfg);

  matchList = function(id,callback){
    console.log('matchList');
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: config.apiURL,
        data: {'function': 'matchList', 'summonerId' : id},
        success: function(res){
          if (res.status > 0) {
            console.log(res.data);
            if (typeof(callback) == 'function') {
              callback(res.data);
            }
          } else {
            //handle error
          }
        }
    });

  };
  matchDetail = function(){
    console.log('matchDetail');
  };
  return {
    matchDetail : matchDetail,
    matchList : matchList
  }
};
