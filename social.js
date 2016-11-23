window.onload = function(){
  console.log('DOM loaded');

//get all elements
var button = document.getElementById('button');
var div = document.getElementById('#boxes');

  button.addEventListener('click', function(ev) {
    ev.preventDefault();

  var data = {
    items: "the"
  };
  //heart of json
    $.ajax({
      url: 'http://192.168.0.6:8080/posts.json',
      method: 'GET',
      data: data,
      dataType: 'json'
    }).done(function(items) {
      console.log('you got data in the console, yes!:', items);
      showFeed(items);
    }); // end ajax

    var html = ''; //spaghetti code, it complained html was undefined. i just put this here
    var htmlData = html.data;
    function showFeed(items) { //add html to the page
      for (var i = 0; i < items.length; i++) {
        var socialFeed = items[i];
        var div = document.getElementById('#boxes');
        html += '<p>' + socialFeed.item_data.text + '</p>';

      }//end for loop
    } //end function for showFeed
  });//end button
}; //end window onload
