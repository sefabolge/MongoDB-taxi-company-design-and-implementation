db.getCollection('Cars').find({"description_status.roadworthy":false})
db.getCollection('Cars').find({"description_status.roadworthy":false}).explain()