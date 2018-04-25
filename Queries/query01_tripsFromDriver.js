/*
Query to return all trips from a certain driver (In this case: Bradley Greer)
*/
db = db.getSiblingDB('taxi_company');
driver_bradley = db.Drivers.findOne({name: {first_name:"Bradley", last_name:"Greer" }})

result = db.getCollection('Bookings').find({"driver_id": driver_bradley._id})

print("**********************")
print("Trips where Bradley Greer was the driver:")
print("-----------------------------")
print(" Booking id | Date ")
print("-----------------------------")
result.forEach(function(row){
	print(row._id + " | " +  row.travel_date )
})