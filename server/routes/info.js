let express = require('express');
let router = express.Router();
var pg = require('pg');
let path = require('path');


var mondayOptions = [
  {
    "deliveryId": 47,
    "storeId": 1,
    "restaurantName": "Nacho's Mexican Grill",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:00:00",
    "dropoff": "11:15:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": false,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 25,
    "storeId": 2,
    "restaurantName": "Jersey Mike's Subs",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "11:15:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": false,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 34,
    "storeId": 3,
    "restaurantName": "Mort's Delicatessen",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "09:30:00",
    "dropoff": "11:35:00",
    "soldOut": false,
    "sellingOut": true,
    "isPastCutoff": false,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 87,
    "storeId": 4,
    "restaurantName": "Ham's Sandwich Shop",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "12:00:00",
    "soldOut": true,
    "sellingOut": true,
    "isPastCutoff": true,
    "isOrderPlaced": false
  }
]


var tuesdayOptions = [
  {
    "deliveryId": 68,
    "storeId": 5,
    "restaurantName": "Firehouse Subs",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "11:20:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 55,
    "storeId": 6,
    "restaurantName": "Which Wich",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "11:50:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 22,
    "storeId": 7,
    "restaurantName": "Gion Restaurant",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "12:00:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 62,
    "storeId": 8,
    "restaurantName": "Living Waters Market & Cafe",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:15:00",
    "dropoff": "12:20:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  }
]

var wednesdayOptions = [
  {
    "deliveryId": 39,
    "storeId": 4,
    "restaurantName": "Ham's Sandwich Shop",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "21:00:00",
    "dropoff": "11:45:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": false,
    "isOrderPlaced": false
}
]

var thursdayOptions = [
  {
    "deliveryId": 28,
    "storeId": 2,
    "restaurantName": "Jersey Mike's Subs",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "11:15:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 9,
    "storeId": 9,
    "restaurantName": "Leeann Chin",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:15:00",
    "dropoff": "11:35:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 13,
    "storeId": 10,
    "restaurantName": "Erbert & Gerbert's Sandwich Shop",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:00:00",
    "dropoff": "11:55:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  }
]


var fridayOptions = [
  {
    "deliveryId": 15,
    "storeId": 11,
    "restaurantName": "Granite City",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:15:00",
    "dropoff": "11:30:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 97,
    "storeId": 12,
    "restaurantName": "Chili's Grill & Bar",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:00:00",
    "dropoff": "11:55:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 37,
    "storeId": 13,
    "restaurantName": "Godfather's Pizza",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:15:00",
    "dropoff": "11:55:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 36,
    "storeId": 14,
    "restaurantName": "Eddington's",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:00:00",
    "dropoff": "12:00:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  },
  {
    "deliveryId": 99,
    "storeId": 15,
    "restaurantName": "Quiznos",
    "logoUrl": "https://www.placehold.it/300X200",
    "cutoff": "10:30:00",
    "dropoff": "12:00:00",
    "soldOut": false,
    "sellingOut": false,
    "isPastCutoff": true,
    "isOrderPlaced": false
  }
]



router.get('/', function (request, response) {
    console.log('here come mondays options ', mondayOptions);
        res.send(mondayOptions);
});

router.get('/tuesday', function (request, response) {
    console.log('here come tuedays options!', tuesdayOptions);
    res.send(tuesdayOptions);
});

router.get('/wednesday', function (request, response) {
    console.log('here come wednesdays options!', wednesdayOptions);
    res.send(wednesdayOptions);
});

router.get('/thursday', function (request, response) {
    console.log('here come thurdays options!', thursdayOptions);
    res.send(thursdayOptions);
});

router.get('/friday', function (req, res) {
    console.log('here come fridays options!', fridayOptions);
    res.send(fridayOptions);
});


module.exports = router;


//////////////////////////////////////////////////////////////////////////////
