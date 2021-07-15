
// GET-API
var settings = {
    "url": "https://app.cakeerp.com/api/product/all",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-cake-token": "Token",
      "Content-Type": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

// POST-API
  var settings = {
    "url": "https://app.cakeerp.com/api/product",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "x-cake-token": "Token",
        "Content-Type": "application/json"
    },
    "data": JSON.stringify({"name":"API Cake","code":"CAKE-01","price_sell":95.99,"stock":10}),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });