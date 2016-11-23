window.onload = function(){
  console.log('DOM loaded'); // I always check to see if me js file is properly hooked up

  // unfortunately, I was able to complete this tast to the requirements. This is my first time really using jQuery too. It was introduced to me at school, but we mostly stuck with Vanilla JavaScript. After looking at many coding tutorials, I figured I'd go with jQuery. I felt some what comfortable with the JS short hand.

  // I wanted to at least explain my logic and how I intended for everything to show.

  $("#button").click( function(){ // this is the for the button, to load more data - it works! :)
  $.getJSON("http://192.168.0.6:8080/posts.json", function(data) { // this is basically $.ajax or heart of json, without it there will be no posts.json file to be read
    //remeber that info is the json object
    $.each(data.items, function(items, info) {
      console.log("careful this is live data", info); // date will show to the console
        $("#divsocial").append("<p>" + "<b>" + "Item Id Number:" +  "</b>"  + info.item_id + info.item_data.text + "<a target=_blank href=" + info.item_data.link + ">" + info.item_data.link_text + "</a>" + "</p>"); //Here I am appending the actual data to show on the HTML page, right into the div.

        //And this is where the problems happen.
        // But this is that I think I should do:
        // I should run a loop that will propergate as many divs needed to display each of the items conent inside.
        //Links within post in another window. I would handle this again with another function and filter case statment. Then create a div if the statement is true or not, being false.
        // There should be a filter to narrow down the types of post to be shown. I would use a function that would hold a case, and if else statment to get this done.
        //To create the load more button I would use a for loop to see if "item_created" is either greater or less then. And a if statment, because if it's true. Then it will pull the lastest posts or if the older posts are wanted, I would use do while statement.




    }); //each function ends
  }); //end ajax
  } //end button on click
);
}; //end window onload
