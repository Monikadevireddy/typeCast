//Get the layout of the users keyboard
//workaround 1) on page load send a key and read for charCode.
//workaround 2) read from http header for the browser



$(document).ready(function () {
  $('ul.tabs').tabs();
  console.log("Loaded all libraries .. SUCCESS");

  typeCast("ruty");
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('js/sw.js')
      .then(function(registration) {console.log(registration);})
      .catch(function(err){console.log(err);})
  } 
})
