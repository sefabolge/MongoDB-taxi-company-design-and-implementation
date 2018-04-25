full_name_str = 'Bradley Greer';
full_name = full_name_str.split(" ");
today = new ISODate();
value = 0;
db = db.getSiblingDB('taxi_company');
driver = db.Drivers.findOne(
{
    "name.first_name": full_name[0],
    "name.last_name" : full_name[1]
})
bookings = db.Bookings.find({    
    "driver_id": driver._id,
    "paid": true,
    "travel_date":{
        "$gte" :  new Date(today.getYear()+1900,today.getMonth()-1,driver.employment.due_date),
        "$lt" : new Date(today.getYear()+1900,(today.getMonth()),driver.employment.due_date)
        }
   }).forEach(function (b){
    payment = db.Payments.findOne({
        "booking_id": b._id
        })
     value = value + payment.amount  
    })
    print(full_name_str +" has to pay " + value + "£, corresponding to " + 
    driver.employment.due_date + "/" + today.getMonth() +"/" + (today.getYear()+1900) +
    " to " + driver.employment.due_date + "/" + (today.getMonth()+1) + "/"+ (today.getYear()+1900))