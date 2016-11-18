window.onload = function(){
  console.log('DOM loaded');

var socialRequest = new XMLHttpRequest();
  socialRequest.open('GET', 'http://192.168.0.6:8080/posts.json');
  socialRequest.onload = function() {
  console.log(socialRequest.responseText);
    var socialData = socialRequest.responseText;
    console.log(socialData[0]);
};

socialRequest.send();





}; //end window onload
