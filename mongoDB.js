const MongoClient = require('mongodb').MongoClient;

async function main ()
{
    const uri = "mongodb+srv://zsong249:qingqing0419@edulearn.e2r9twi.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try
    {
        await client.connect();

        await calculateMoney(client, 1200, "Tim");

    }
    catch (e)
    {
        console.error(e); 
    }
    finally
    {
        await client.close(); 
    }
 
}

main().catch(console.error); 

async function createListing(client, newListing)
{
    const result = await client.db("eduLearn").collection("User Info").insertOne(newListing);

    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);
}

async function createMultipleListings(client, newListing)
{
    const result = await client.db("eduLearn").collection("User Info").insertMany(newListing);
    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);

}

async function calculateTotalLikes(client)
{
    var sumLike = 0;
    const sum = client.db("eduLearn").collection("User Info").find({likes : {$gt:0}});
    const result = await sum.toArray();
    result.forEach((result, i) =>
    {
        sumLike += result.likes;
    })
    return sumLike;

}

async function calculateMoney(client, moneyPool, name)
{
    const sum = await client.db("eduLearn").collection("User Info").findOne({name : name});
    var userLikes = sum.likes;
    var totalLikes = await calculateTotalLikes(client);
    var percentage = parseFloat(userLikes) / parseFloat(totalLikes);
    console.log(percentage);
    var money_earned = percentage * parseFloat(moneyPool);
    console.log(money_earned);
}

async function listDatabases(client)
{
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

async function findOneListingByName(client, nameOfListing)
{
    const result = await client.db("eduLearn").collection("User Info").findOne({name : nameOfListing});
    if (result)
    {
        console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
        console.log(result);
    }
    else
    {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
