// Get the button element and the text element
const jokeButton = document.getElementById("joke-button");
const jokeText = document.getElementById("joke-text");

// Add an event listener to the button that sends a GET request to the Chuck Norris joke API
// when the button is clicked
jokeButton.addEventListener("click", function() {

// Create a new XMLHttpRequest object to send the GET request
const xhr = new XMLHttpRequest();

// Open the request and specify the URL to send the request to
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

// Set the function to be executed when the request is loaded
  xhr.onload = function() {

// If the request was successful (status code 200), parse the response text
// and set the value of the "value" property as the text content of the joke text element  
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      jokeText.textContent = data.value;
    } 
// If the request was not successful, log an error message to the console
    else {
      console.log(`Error: ${xhr.status}`);
    }
  };

// Send the request
  xhr.send();
});


// Get the button element and the text element
const movieButton = document.getElementById("movie-button");
const movieText = document.getElementById("movie-text");

// Add an event listener to the button that sends a GET request to the Chuck Norris joke API
// with a query parameter "category=movie" when the button is clicked
movieButton.addEventListener("click", function() {

// Create a new XMLHttpRequest object to send the GET request
  const xhr = new XMLHttpRequest();

// Open the request and specify the URL to send the request to, including the "category=movie" query parameter
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=movie");

// Set the function to be executed when the request is loaded
  xhr.onload = function() {

// If the request was successful (status code 200), parse the response text
// and set the value of the "value" property as the text content of the movie text element
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      movieText.textContent = data.value;
    } 
// If the request was not successful, log an error message to the console
    else {
      console.log(`Error: ${xhr.status}`);
    }
  };
// Send the request
  xhr.send();
});

// Get the button element and the text element
const scienceButton = document.getElementById("science-button");
const scienceText = document.getElementById("science-text");
// Add an event listener to the button that sends a GET request to the Chuck Norris joke API
// with a query parameter "category=science" when the button is clicked
scienceButton.addEventListener("click", function() {
// Create a new XMLHttpRequest object to send the GET request
  const xhr = new XMLHttpRequest();

// Open the request and specify the URL to send the request to, including the "category=science" query parameter
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=science");
// Set the function to be executed when the request is loaded
  xhr.onload = function() {
// If the request was successful (status code 200), parse the response text
// and set the value of the "value" property as the text content of the science text element

    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      scienceText.textContent = data.value;
    } 
// If the request was not successful, log an error message to the console
    else {
      console.log(`Error: ${xhr.status}`);
    }
  };
// Send the request
  xhr.send();
});
