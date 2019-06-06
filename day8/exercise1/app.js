//Firts i imported the db using this command 
//mongoimport --db restaurantdb --collection restaurant --file restaurants.json

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
let db;
let collection;


client.connect(async (err) => {
    db = client.db('restaurantdb');
    collection = db.collection('restaurant');
    try {

        console.log(await collection.find({}).toArray());
        console.log(await collection.find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0 }).toArray());
        console.log(await collection.find({}).project({ restaurant_id: 1, name: 1, district: 1, zipcode: 1, _id: 0 }).toArray());
        console.log(await collection.find({ district: 'Bronx' }).toArray());
        console.log(await collection.find({ district: 'Bronx' }).limit(5).toArray());
        console.log(await collection.find({ district: 'Bronx' }).skip(5).limit(5).toArray());
        console.log(await collection.find({ 'address.coord': { $lt: -95.754168 } }).forEach((element) => { console.log(element) }));
        console.log(await collection.find({ 'address.coord': { $lt: 65.754168 }, cuisine: { $ne: 'American' }, 'grades.score': { $gt: 70 } }).forEach((element) => { console.log(element) }));
        console.log(await collection.find({ name: { $regex: '^Wil.*' } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({ name: { $regex: '^.*ces$' } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({ name: { $regex: '^.*Reg.*$' } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({ district: 'Bronx', cuisine: { $in: ["American ", "Chinese"] } }).toArray());
        console.log(await collection.find({ district: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({ district: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({ district: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }, "grades.score": { $lt: 10 } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).toArray());
        console.log(await collection.find({ 'address.coord.1': { $lt: 52, $gt: 42 }, district: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }).project({ restaurant_id: 1, name: 1, address: 1, cuisine: 1 }).forEach((element) => { console.log(element) }));
        console.log(await collection.find({}).project({ name: 1, _id: 0 }).sort({ name: 1 }).toArray());
        console.log(await collection.find({}).project({ name: 1, _id: 0 }).sort({ name: -1 }).toArray());
        console.log(await collection.find({}).project({ name: 1, district: 1, _id: 0 }).sort({ name: 1, district: -1 }).toArray());
        console.log(await collection.find({ 'address.coord': { $type: 'double' } }).forEach((element) => { console.log(element) }));
        console.log(await collection.find({ name: { $regex: '^Mad.*' } }).project({ name: 1, 'address.coord': 1 }).forEach((element) => { console.log(element) }));


        client.close();
        console.log('done');
    } catch (error) {
        client.close();
        console.log(error);
        console.log('Error Happened');

    }
});


