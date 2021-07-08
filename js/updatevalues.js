
jQuery(document).ready(function($){
  $.ajax({
      url: 'https://token-stats.herokuapp.com/?token=KuDoge&jsonpCallback=jsonCallback',
      dataType: 'jsonp',
      jsonpCallback: "jsonCallback",
      success: function(data){
        $("#kudo-stat-price").html(data.price);
        $("#kudo-stat-mcap").html(data.marketcap);
        $("#kudo-stat-holders").html(data.holder);
        $("#kudo-stat-supply").html("<span>Current Supply:</span>"+data.supply);
        $(".token-stats-container").removeClass("loading-data");
      }
  });
});
