window.onload = function(){
  console.log('DOM loaded');

// var loadMore = "";
var socialDiv = document.getElementById('social');
var button = document.getElementById('button');
  button.addEventListener('click', function() {

  // I did edit the json file, it had errors in a few lines.
  var socialRequest = new XMLHttpRequest();
    socialRequest.open('GET', 'http://192.168.0.6:8080/posts.json');
    socialRequest.onload = function() {
    // console.log(socialRequest.responseText);
      var socialData = JSON.parse(socialRequest.responseText);
      // console.log(socialData[0]);
      appendSocial(socialData);
  };
  socialRequest.send();

});
function appendSocial(data) {
  var html = "";
console.log(data);
    for (var i = 0; i < data.length; i++) {
      html += "<p>" + data[i].items + data[i].items_id.text + data[i].items_id +"</p>";
    }

    // socialDiv.document.getElementById("social").innerHTML = "Hello !";
  socialDiv.insertAdjacentHTML('beforeend', 'html');



}



}; //end window onload
