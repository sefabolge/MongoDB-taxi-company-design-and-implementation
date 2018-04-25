/*
insertScript.js (version 4)
*/

db = db.getSiblingDB('taxi_company');
db.dropDatabase();

/*********************************
          INSERT CARS
***********************************/

db.Cars.insert(
{
    "registration_number": "GB90SEP",
    "model": "Honda",
    "year": "2012",
    "lastMot_test": "2017",
    "description_status": {
        "written_off": false,
        "roadworthy": false,
        "awaiting_repair": false
    },
    "car_insurance": "CAR1234A",
    "special_features": "Cameras around your car, not just behind it. GPS.",
    "car_owner": {
        "name": "Sefa Bolge",
        "phone": "044426541235",
        "adress": {
            "street": "Mile End Rd",
            "city": "London",
            "postcode": "E2-3DE"
        }
    },
    "last_update": ISODate("2017-12-01T18:50:00")
});
db.Cars.insert(
{
    "registration_number": "GB83FRP",
    "model": "Ford - Gol",
    "year": "2011",
    "lastMot_test": "2017",
    "description_status": {
        "written_off": false,
        "roadworthy": false,
        "awaiting_repair": true
    },
    "car_insurance": "CAR3454A",
    "special_features": "",
    "car_owner": {
        "name": "Harry Potter",
        "phone": "044426541235",
        "adress": {
            "street": "Diagon Alley",
            "city": "London",
            "postcode": "E2-3MG"
        }
    },
    "last_update": ISODate("2017-12-02T18:50:00")
});
db.Cars.insert(
{
    "registration_number": "GB7XXRP",
    "model": "Volkswagen",
    "year": "2009",
    "lastMot_test": "2017",
    "description_status": {
        "written_off": false,
        "roadworthy": true,
        "awaiting_repair": false
    },
    "car_insurance": "CAR1234A",
    "special_features": "",
    "car_owner": {
        "name": "Jesus Garza",
        "phone": "044423141299",
        "adress": {
            "street": "Sherren House",
            "city": "London",
            "postcode": "E1-5AF"
        }
    },
    "last_update": ISODate("2017-12-02T18:50:00")
});
db.Cars.insert(
{
    "registration_number": "GB90TGH",
    "model": "Volkswagen",
    "year": "2012",
    "lastMot_test": "2016",
    "description_status": {
        "written_off": false,
        "roadworthy": false,
        "awaiting_repair": false
    },
    "car_insurance": "CAR1234A",
    "special_features": "Cameras around your car, not just behind it. GPS.",
    "car_owner": {
        "name": "Gina Weasley",
        "phone": "044426541235",
        "adress": {
            "street": "Gringots Bank Lane",
            "city": "London",
            "postcode": "E2-3MG"
        }
    },
    "last_update": ISODate("2017-12-02T18:50:00")
});


/*********************************
          INSERT OPERATORS
***********************************/


db.Operators.insert(
{
    "name": {
        "first_name": "Charde",
        "last_name": "Marshall"
    },
    "salary": {
        "price": 2900,
        "currency": "GBP"
    },
    "branch_number": "1011",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":false,
      "second_shift":true,
      "third_shift": false
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Garret",
        "last_name": "Winter"
    },
    "salary": {
        "price": 3500,
        "currency": "GBP"
    },
    "branch_number": "1012",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":true,
      "second_shift":false,
      "third_shift": false
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Gavin",
        "last_name": "Cortez"
    },
    "salary": {
        "price": 3000,
        "currency": "GBP"
    },
    "branch_number": "1013",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":false,
      "second_shift":true,
      "third_shift": false
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Finn",
        "last_name": "Rios"
    },
    "salary": {
        "price": 2300,
        "currency": "GBP"
    },
    "branch_number": "1014",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":false,
      "second_shift":false,
      "third_shift": true
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Gavin",
        "last_name": "Joyce"
    },
    "salary": {
        "price": 2500,
        "currency": "GBP"
    },
    "branch_number": "1015",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":true,
      "second_shift":false,
      "third_shift": false
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Gabriel",
        "last_name": "Sousa"
    },
    "salary": {
        "price": 2600,
        "currency": "GBP"
    },
    "branch_number": "1016",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":false,
      "second_shift":true,
      "third_shift": false
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Josef",
        "last_name": "Haskell"
    },
    "salary": {
        "price": 2800,
        "currency": "GBP"
    },
    "branch_number": "1017",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":false,
      "second_shift":false,
      "third_shift": true
    },
});

db.Operators.insert(
{
    "name": {
        "first_name": "Jone",
        "last_name": "Weak"
    },
    "salary": {
        "price": 3100,
        "currency": "GBP"
    },
    "branch_number": "1012",
    "last_update": ISODate("2017-12-01T18:50:00"),
    "shift":
    {
      "first_shift":true,
      "second_shift":false,
      "third_shift": false
    },
});


/*********************************
          INSERT DRIVERS
***********************************/


db.Drivers.insert(
	{
		"name":
		{
			"first_name":"Bradley",
			"last_name":"Greer"
		},
		"phone":"04545256874",
		"email":"bradley@taxico.com",
		"admission":ISODate("2017-12-01T12:00:00"),
		"address":
		{
			"street":"Winterfell Lane",
			"city":"Godric's Hollow",
			"postcode":"W2-3RD"
		},
		"shift":
		{
			"first_shift":true,
			"second_shift":false,
			"third_shift": false
		},
        "employment":
        {
            "type" : 
            {
                "fixed": true,
                "percentage": false
            },
            "value" : 10000,
            "due_date" : 22
        },
		"last_update": ISODate("2017-12-01T12:00:00")
	});

db.Drivers.insert(
	{
	    "name":
	    {
	      "first_name":"Haley",
	      "last_name":"Kenedy"
	    },
	    "phone":"04545256874",
	    "email":"haley@taxico.com",
	    "admission":ISODate("2017-12-01T12:00:00"),
	    "address":
	    {
	      "street":"Brick Lane",
	      "city":"Godric's Hollow",
	      "postcode":"W5-3RD"
	    },
	    "shift":
	    {
	      "first_shift":false,
	      "second_shift":true,
	      "third_shift": false
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": false,
                "percentage": true
            },
            "value" : 0.2,
            "due_date" : 20
        },
	    "last_update": ISODate("2017-12-01T12:00:00")
  	});

db.Drivers.insert(
	{
	    "name":
	    {
	      "first_name":"Hermione",
	      "last_name":"Granger"
	    },
	    "phone":"04545279874",
	    "email":"hermione@taxico.com",
	    "admission":ISODate("2017-12-03T12:00:00"),
	    "address":
	    {
	      "street":"Muggles Rd",
	      "city":"Godric's Hollow",
	      "postcode":"G5-6TD"
	    },
	    "shift":
	    {
	      "first_shift":false,
	      "second_shift":false,
	      "third_shift": true
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": true,
                "percentage": false
            },
            "value" : 8000,
            "due_date" : 5
        },
	    "last_update": ISODate("2017-12-03T12:00:00")
  	});
db.Drivers.insert(
	{
	    "name":
	    {
	      "first_name":"Ronald",
	      "last_name":"Weasley"
	    },
	    "phone":"04545256874",
	    "email":"ronald@taxico.com",
	    "admission":ISODate("2017-12-03T12:00:00"),
	    "address":
	    {
	      "street":"Centaurian St",
	      "city":"London",
	      "postcode":"W5-3RD"
	    },
	    "shift":
	    {
	      "first_shift":false,
	      "second_shift":true,
	      "third_shift": false
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": false,
                "percentage": true
            },
            "value" : 0.4,
            "due_date" : 25
        },
	    "last_update": ISODate("2017-12-01T12:00:00")
  	});
  	
  	
/*********************************
          INSERT CLIENTS
***********************************/


db.Clients.insert(
		{
		"client_type":
		{
		    "private": false,
		    "corporate": true
		},
		"name":"ACME Ltda.",
		"phone":"07474566665",
		"address":
		{
			"street":"Westminester Rd",
			"city":"Briston",
			"postcode":"W2-3ED"
		},
		"pickup_address": {
            "street": "93 Eric Street",
            "city": "London",
            "postcode": "E4 2ED"
	     },
	     "destination_address": {
	            "street": "67 Breadboard Lane",
	            "city": "London",
	            "postcode": "B4 2ED"
	     },
	    "pickup_time": ISODate("1970-00-00T16:30:00"),
		"email":"logistics@acme.com",
		"active":true,
		"membership_date": ISODate("2017-01-03T00:00:00"),
		"frequency" : [1,2,3,4,5,6,7],

		"last_update": ISODate("2017-12-04T00:00:00")
	})

  db.Clients.insert({
    "client_type":
  	{
    	"private": true,
    	"corporate": false
  	},
    "name":
     {
        "first_name":"Albert",
        "last_name":"Taylor"
     },
    "phone":"09696523123",
    "address":
      {
        "street":"Groover St",
        "city":"London",
        "postcode":"W3-3ED"
      },
    "pickup_address": {
        "street": "93 Goblet Street",
        "city": "London",
        "postcode": "E4-2ED"
     },
    "destination_address": {
        "street": "67 Sweetplace Lane",
        "city": "London",
        "postcode": "B4-2ED"
     },
	"pickup_time": ISODate("1970-00-00T07:30:00"),
    "email":"albert@gmail.com",
    "active":true,
    "membership_date": ISODate("2017-01-01T00:00:00"),
    "frequency" : [5,6,7],
    "last_update": ISODate("2017-12-01T00:00:00")
}
)

/*********************************
GET IDs FROM OPERATORS AND DRIVERS
***********************************/

operator_charde = db.Operators.findOne({
      name: {
              first_name: "Charde",
              last_name: "Marshall"
            }
})

driver_bradley = db.Drivers.findOne({
      name: {
            	first_name:"Bradley",
        		last_name:"Greer"
            }
})

driver_hermione = db.Drivers.findOne({
      name: {
            	first_name:"Hermione",
        		last_name:"Granger"
            }
})

/*********************************
          INSERT BOOKINGS
***********************************/

db.Bookings.insert(
{
    "travel_date": ISODate("2017-03-04T12:37:00"),
    "customer_info": {
        "name":
	    {
	      "first_name":"Cara",
	      "last_name":"Stevens"
	    },
        "phone": "04747955265",
    	"pickup_address": {
            "street": "12 Whitechaple Rd",
            "city": "London",
            "postcode": "E4 2ED"
    	},
    	"destination_address": {
            "street": "67, Migglets Lane",
            "city": "London",
            "postcode": "G4 2ED"
    	}
    },
    "observation": "Large Lugagges",
    "paid": true,
    "last_update": ISODate("2015-03-04T12:10:00"),
    "operator_id": operator_charde._id ,
    "driver_id": driver_bradley._id
})
db.Bookings.insert(
{
    "travel_date": ISODate("2017-11-09T11:00:00"),
    "customer_info": {
        "name":
	    {
	      "first_name":"Martin",
	      "last_name":"Cavazos"
	    },
        "phone": "04747222211",
    	"pickup_address": {
            "street": "25 Shoreditch Rd",
            "city": "London",
            "postcode": "E4 6ED"
    	},
    	"destination_address": {
            "street": "14 Whitechappel Rd",
            "city": "London",
            "postcode": "E4 2ED"
    	}
    },
    "observation": "Wheelchair",
    "paid": true,
    "last_update": ISODate("2017-11-09T11:00:00"),
    "operator_id": operator_charde._id ,
    "driver_id": driver_hermione._id
})
db.Bookings.insert(
{
    "travel_date": ISODate("2017-05-05T12:10:00"),
    "customer_info": {
        "name":
	    {
	      "first_name":"Tom",
	      "last_name":"Riddle"
	    },
        "phone": "04747956765",
        "address": {
            "street": "Wilcox Rd",
            "city": "London",
            "postcode": "E4 2ED"
        },
    	"pickup_address": {
            "street": "12 Sheren Rd",
            "city": "London",
            "postcode": "S4 2ED"
     	},
    	"destination_address": {
            "street": "67, Queen Lane",
            "city": "London",
            "postcode": "Q4 2ED"
     	}
    },
    "observation": "",
    "paid": true,
    "last_update": ISODate("2017-05-05T12:10:00"),
    "operator_id": operator_charde._id ,
    "driver_id": driver_hermione._id
})

client_albert = db.Clients.findOne({
      "name.first_name": "Albert"
})
db.Bookings.insert(
{
    "travel_date": ISODate("2017-08-12T12:10:00"),
    "observation": "",
    "paid": true,
    "last_update": ISODate("2017-08-12T12:10:00"),
    "driver_id": driver_bradley._id,
    "client_id" : client_albert._id
})

booking_cara =  db.Bookings.findOne({
    "customer_info.name.first_name": "Cara",
    "customer_info.name.last_name": "Stevens"
})


/*********************************
          INSERT PAYMENTS
***********************************/


db.Payments.insert(
{
	"method":
		{
			"cash":true,
			"credit_card":false,
			"debit_card":false
		},
	"amount": 20,
	"payment_date": ISODate("2017-01-01T00:00:00"),
	"last_update": ISODate("2017-01-01T00:00:00"),
	"booking_id": booking_cara._id
})


/*********************************
          INSERT REVENUE
***********************************/

db.Revenue.insert({
	"driver_id" : driver_bradley._id,
    "amount" : 8000
})
