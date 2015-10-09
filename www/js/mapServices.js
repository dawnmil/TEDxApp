var hotLocations = [
{ "conference" : [ 
    { "id":1,
      "name":"World Cafe Live at The Queen", 
      "address":"500 N. Market Street Wilmington, DE 19801",
      "phone_number":"302-994-1400",
      "description":"",
      "latitude":39.741105,
      "longitude":-75.550209,
      "phone_number": "(302) 994-1400",
      "image":"./img/WorldCafeLive.png" } 
      ] }, 

{ "parking": [
    { "id":2,
      "name":"New Castle County Court House Parking Garage",
      "address":"500 North King Street #3500, Wilmington, DE 19801",
      "phone_number":"(302) 255-0900",
      "description":"Convenient & Secure garage parking is available weekdays until 7pm at the Courthouse parking garage on King Street directly behind World Cafe Live at the Queen.  Come down King Street and just after you cross 6th Street look for the entrance on your left.",
      "latitude":39.7401155,
      "longitude":-75.6227766,
      "image":""
    }
],
{ "restaurant": [
    { "id":3,
      "name":"La Fia Market Bistro",
      "address":"421 N Market St, Wilmington, DE 19801",
      "phone_number": "(302) 543-5574",
      "description":"A rotation of globally-inspired bistro dishes using local products, in a space with a bakery & shop.", 
      "latitude":39.7411033,
      "longitude":-75.6248266,
      "image":"img/LaFia.png",
      "hoursOfOps": [
                      { "Monday":"11am - 2:30pm, 5pm - 9pm",
                        "Tuesday":"11am - 2:30pm, 5pm - 9pm",
                        "Wednesday":"11am - 2:30pm, 5pm - 10pm",
                        "Thursday":"11am - 2:30pm, 5pm - 10pm",
                        "Friday":"11am - 2:30pm, 5pm - 9pm",
                        "Saturday":"5pm - 10pm",
                        "Sunday":"closed" }
                    ],
      "cuisineType":"Eclectic Restaurant"
},
    { "id":4,
      "name":"Ernest & Scott Taproom",
      "address":"902 N Market St, Wilmington, DE 19801",
      "phone_number": "(302) 384-8113",
      "description":"Paean to Hemingway & Fitzgerald offers craft beers, spirits & eclectic fare in a historic building.",
      "latitude":39.7447303,
      "longitude":-75.6220112,
      "image":"img/ErnestNScott.png",
      "hoursOfOps": [
                      { "Monday":"11:30am - 1am",
                        "Tuesday":"11:30am - 1am",
                        "Wednesday":"11:30am - 1am",
                        "Thursday":"11:30am - 1am",
                        "Friday":"11:30am - 1am",
                        "Saturday":"12pm - 1am",
                        "Sunday":"12pm - 1am" }
                    ],
      "cuisineType":"American, Eclectic,"
      },
    {
      "id":5,
      "name":"Extreme Pizza",
      "address":"201 N. Market Street. Wilmington, DE 19801",
      "phone_number": "(302) 384-8012",
      "description":"Pizzeria chain specializing in innovative pies customized with unusual toppings.", 
      "latitude":,
      "longitude":,
      "image":"img/ExtremePizza.png"
      "hoursOfOps": [
                      { "Monday":"11am - 9pm",
                        "Tuesday":"11am - 9pm",
                        "Wednesday":"11am - 9pm",
                        "Thursday":"11am - 9pm",
                        "Friday":"11am - 10pm",
                        "Saturday":"12am - 9pm",
                        "Sunday":"12am - 9pm" }
                    ],
      "cuisineType":"Pizza & Libations"
    },
    {
      "id":6,
      "name":"Mikimotos",
      "address":"1212 N Washington St, Wilmington, DE 19801",
      "phone_number": "(302) 656-8638",
      "description":"Hip digs for sushi & other Japanese & Pan-Asian fare in a stylish room with a bar & happy hour.", 
      "latitude":39.7493161,
      "longitude":-75.6238483,
      "image":"img/Mikimotos.png",
       "hoursOfOps": [
                      { "Monday":"11am - 11pm",
                        "Tuesday":"11am - 11pm",
                        "Wednesday":"11am - 11pm",
                        "Thursday":"11am - 11pm",
                        "Friday":"11am - 12am",
                        "Saturday":"11:30am - 12am",
                        "Sunday":"4pm - 10pm" }
                    ],
      "cuisineType":"Japanese Sushi Bar" },
{
      "id":7,
      "name":"Chelsea Tavern",
      "address":"821 N Market St, Wilmington, DE 19801",
      "phone_number": "(302) 482-3333",
      "description":"Gastropub across from opera house serving upscale American grub & lots of beer in a modern setting.", 
      "latitude":39.7439509,
      "longitude":-75.6229052,
      "image":"img/Mikimotos.png",
      "hoursOfOps": [
                      { "Monday":"11:30am – 1am",
                        "Tuesday":"11:30am – 1am",
                        "Wednesday":"11:30am – 1am",
                        "Thursday":"11:30am – 1am",
                        "Friday":"11:30am – 1am",
                        "Saturday":"10am – 1am",
                        "Sunday":"10am – 1am" }
                    ],
      "cuisineType":"American Gastropub" },
{
      "id":8,
      "name":"Trolley Tap House",
      "address":"1616 Delaware Avenue, Wilmington, DE 19806",
      "phone_number": "(302) 652-2255",
      "description":"Craft beer is paired with eclectic comfort food in this airy, industrial pub with a sidewalk patio.", 
      "latitude":39.757501,
      "longitude":-75.6360919,
      "image":"img/TrolleyTapHouse.png",
      "hoursOfOps": [
                      { "Monday":"11:30am – 1am",
                        "Tuesday":"11:30am – 1am",
                        "Wednesday":"11:30am – 1am",
                        "Thursday":"11:30am – 1am",
                        "Friday":"11:30am – 1am",
                        "Saturday":"11:30am – 1am",
                        "Sunday":"11:30am – 1am" }
                    ],
      "cuisineType":"American, Eclectic"
},
{
      "id":9,
      "name":"Catherine Rooney's",
      "address":"1616 Delaware Ave, Wilmington, DE 19806",
      "phone_number": "(302) 654-9700",
      "description":"Lively, brick-walled Irish pub with traditional fare & regular live music as well as a patio.", 
      "latitude":39.7575895,
      "longitude":-75.6323738,
      "image":"img/CatherineRooneys.png",
      "hoursOfOps": [
                      { "Monday":"11am – 1am",
                        "Tuesday":"11am – 1am",
                        "Wednesday":"11am – 1am",
                        "Thursday":"11am – 1am",
                        "Friday":"11am – 1am",
                        "Saturday":"10am – 1am",
                        "Sunday":"10am – 1am" }
                    ],
      "cuisineType":"Irish Pub" 
    },
    {
      "id":10,
      "name":"Kelly's Logan House",
      "address":"1701 Delaware Ave, Wilmington, DE 19806",
      "phone_number": "(302) 652-9493",
      "description":"1864 tavern with storied history & outdoor patio offers varied American fare & regular live music.", 
      "latitude":39.7582425,
      "longitude":-75.6324207,
      "image":"img/LoganHouse.png",
      "hoursOfOps": [
                      { "Monday":"11am – 1am",
                        "Tuesday":"11am – 1am",
                        "Wednesday":"11am – 1am",
                        "Thursday":"11am – 1am",
                        "Friday":"11am – 1am",
                        "Saturday":"10am – 1am",
                        "Sunday":"10am – 12am"  }
                    ],
      "cuisineType":"American Pub"
     },
     {
      "id":11,
      "name":"Big Fish Grill on the Riverfront",
      "address":"720 Justison Street, Wilmington, DE 19801",
      "phone_number": "(302) 652-3474",
      "description":"Hearty platters of seafood specialties served in a casual, family-friendly riverfront space.", 
      "latitude":39.7326489,
      "longitude":-75.6311295,
      "image":"img/BigFishGrill.png",
      "hoursOfOps": [
                      { "Monday":"11:30am-9pm",
                        "Tuesday":"11:30am-9pm",
                        "Wednesday":"11:30am-9pm",
                        "Thursday":"11:30am-9:30pm",
                        "Friday":"11:30am-10pm",
                        "Saturday":"11:30am-10pm",
                        "Sunday":"11:30am-9pm" }
                    ],
      "cuisineType":"Seafood"
     },
     {
      "id":12,
      "name":"Kooma",
      "address":"400 Justison St, Wilmington, DE 19801",
      "phone_number": "(302) 543-6732",
      "description":"A wide variety of sushi & Asian-fusion food amid modern decor & regular entertainment.", 
      "latitude":39.7356388,
      "longitude":-75.6301093,
      "image":"img/Kooma.png",
      "hoursOfOps": [
                      { "Monday":"11:30pm – 10pm",
                        "Tuesday":"11:30pm – 10pm",
                        "Wednesday":"11:30pm – 10pm",
                        "Thursday":"11:30pm – 11pm",
                        "Friday":"11:30pm – 12am",
                        "Saturday":"5pm - 12am",
                        "Sunday":"closed" }
                    ],
      "cuisineType":"Asian-Fusion"
     }];