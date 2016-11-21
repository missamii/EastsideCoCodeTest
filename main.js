window.onload = function(){
  console.log('DOM loaded');

  $("button").click( function(){
  $.getJSON("http://192.168.0.6:8080/posts.json", function(data) {
    $.each(data.items, function(items, info) {
      // console.log(info);
      $("div").append("<p>" + info.item_data.text + "</p>" + "<a href=" + info.item_data.link + ">" + "</a>");

    }); //end loop
  }); //end ajax
  } //end button on click
);
}; //end window onload
