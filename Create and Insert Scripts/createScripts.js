db = db.getSiblingDB('taxi_company');

db.createCollection("Bookings" ,autoIndexId = true);
db.createCollection("Cars" ,autoIndexId = true);
db.createCollection("Clients" ,autoIndexId = true);
db.createCollection("Drivers" ,autoIndexId = true);
db.createCollection("Operators" ,autoIndexId = true);
db.createCollection("Payments" ,autoIndexId = true);
db.createCollection("Revenue" ,autoIndexId = true);
