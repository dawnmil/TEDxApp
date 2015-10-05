angular.module('TEDxApp.services', [])

.factory('Locations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
var restaurants = [
    {
      "id":1,
      "name":"Chelsea Tavern", 
      "address":"821 N Market St, Wilmington, DE 19801",
      "phone_number": "(302) 482-3333",
      "todaysHoursOfOps":"10am-10am",
      "cuisineType":"American Gastropub",
      "description":"Gastropub across from opera house serving upscale American grub & lots of beer in a modern setting.",
      "distance":"2 miles away", 
      "starRating":4,
      "image":"./img/ChelseaTavern.png"
      },
    {
      "id":2,
      "name":"Ernest & Scott Taproom",
      "address":"902 N Market St, Wilmington, DE 19801",
      "phone_number": "(302) 384-8113",
      "todaysHoursOfOps":"11:30am-12am",
      "cuisineType":"Eclectic Restaurant", 
      "description":"Paean to Hemingway & Fitzgerald offers craft beers, spirits & eclectic fare in a historic building.", 
      "distance":"2.8 miles away", 
      "starRating":4,
      "image":"img/ErnestNScott.png"
    },
    {
      "id":3,
      "name":"Extreme Pizza",
      "address":"201 N. Market Street. Wilmington, DE 19801",
      "phone_number": "(302) 384-8012",
      "todaysHoursOfOps":"11am-9pm",
      "cuisineType":"Pizza & Libations", 
      "description":"Pizzeria chain specializing in innovative pies customized with unusual toppings.", 
      "distance":"2.8 miles away", 
      "starRating":4,
      "image":"img/ExtremePizza.png"
    },
    {
      "id":4,
      "name":"Mikimotos",
      "address":"1212 N Washington St, Wilmington, DE 19801",
      "phone_number": "(302) 656-8638",
      "todaysHoursOfOps":"11am-11pm",
      "cuisineType":"Japanese Sushi Bar", 
      "description":"Hip digs for sushi & other Japanese & Pan-Asian fare in a stylish room with a bar & happy hour.", 
      "distance":"3.3 miles away", 
      "starRating":5
    }

  ];
  return {
    all: function() {
      return restaurants;
    },
    remove: function(index) {
      restaurants.splice(restaurants.indexOf(index), 1);
    },
    get: function(id) {
      for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].id === parseInt(id)) {
          return restaurants[i];
        }
      }
      return null;
    }
  };
});