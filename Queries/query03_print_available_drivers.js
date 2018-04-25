db = db.getSiblingDB('taxi_company');
today = new ISODate();
firstShift = today.getHours() >= 0 && today.getHours() < 8;
secondShift = today.getHours() >= 8 && today.getHours() < 16; 
thirdShift = today.getHours() >= 16 && today.getHours() <= 23;
busy_drivers = db.Bookings.find({
    "paid": false
}).forEach( function(busy_driver) {
    db.Drivers.find({
        "_id": {$ne: busy_driver._id } ,
        "shift.first_shift": firstShift,
        "shift.second_shift": secondShift,
        "shift.third_shift": thirdShift,
    }).forEach( function(drive) {
        print(drive.name.first_name + " " + drive.name.last_name)
        })
});