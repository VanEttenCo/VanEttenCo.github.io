/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener('click', function(){

    cleanContainer();
    var input = document.querySelector("input").value;

    makeRequest(input);

});

//getting user input

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
   
    cleanContainer();
    var input = document.querySelector("input").value;

    //if Enter is pressed
    if(e.which === 13){

    makeRequest(input);

}

});

/* 2. do the data stuff with the API */

function makeRequest(input){

var apiKey = 'MKSeIwPdA6yJMvnawRXbGv9jmRLAetjt'

var query = input.split(' ').join('+');

var formattedUrl = "https://api.giphy.com/v1/gifs/search?q=" + query 

+ '&api_key=' + apiKey;

// AJAX Request

var GiphyAJAXCall = new XMLHttpRequest();

GiphyAJAXCall.open( 'GET', formattedUrl );

GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){

var data = e.target.response;

pushToDOM(data);

console.log(e.target);

});

}

/* 3. Show me the GIFs */

function pushToDOM(input){

var response = JSON.parse(input);

var imageUrls = response.data;

var container = document.querySelector('.js-container');

imageUrls.forEach(function(image){

var src = image.images.fixed_height.url;

container.innerHTML = container.innerHTML + "<img src=\""+ src +"\"class=\"container-image\">";

}); 

}

 function cleanContainer() {
 document.querySelector('.js-container').innerHTML = ""
}