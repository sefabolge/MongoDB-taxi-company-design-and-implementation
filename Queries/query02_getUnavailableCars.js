db = db.getSiblingDB('taxi_company');

result = db.getCollection('Cars').find({"description_status.roadworthy":false})

print("**********************")
print("Cars that are not available for driving:")
print("-----------------------------")
print("Registration Number | Model ")
print("-----------------------------")
result.forEach(function(row){
	print(row.registration_number + "|"  + row.model )
})