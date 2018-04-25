db = db.getSiblingDB('taxi_company');
today = new ISODate()
travelDate = new ISODate()
db.Clients.find({ "active": true }).forEach( function(client) {
    if(client.frequency.indexOf(today.getDay()) >= 0){
        firstShift = client.pickup_time.getHours() >= 0 && client.pickup_time.getHours() < 8
        secondShift = client.pickup_time.getHours() >= 8 && client.pickup_time.getHours() < 16 
        thirdShift = client.pickup_time.getHours() >= 16 && client.pickup_time.getHours() <= 23 
        driver = db.Drivers.findOne({
            "shift.first_shift": firstShift,
            "shift.second_shift": secondShift,
            "shift.third_shift": thirdShift,
        })
        travelDate.setHours(client.pickup_time.getHours())
        travelDate.setMinutes(client.pickup_time.getMinutes())
        travelDate.setSeconds(client.pickup_time.getSeconds())
        db.Bookings.insertOne(
        {
            "travel_date": travelDate,
            "observation": "Regular Booking",
            "paid": false,
           "last_update": today,
            "driver_id": driver._id,
            "client_id" : client._id
        })
        
    } 
})