
jQuery(document).ready(function($){
  $.get("/stats/", function(data, status){
    if(status == "success") {
      console.log(data);
      $("#kudo-stat-price").html(data.price);
      $("#kudo-stat-mcap").html(data.marketcap);
      $("#kudo-stat-holders").html(data.holder);
      $("#kudo-stat-supply").html("<span>Current Supply:</span>"+data.supply);
      $(".token-stats-container").removeClass("loading-data");
    }
  });
});
