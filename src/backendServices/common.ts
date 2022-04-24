import { MongoClient, ServerApiVersion } from "mongodb";


function getInterests() {
	let interests = null;
	const client = new MongoClient(uri);

	client.connect((err) => {
		const collection = client.db("mongodb").collection("data");
		// perform actions on the collection object

		const query = { type: "categories" };
		const feed = collection.find(query).toArray();
		client.close();
		interests = feed;
	});

	return interests;
}

export default {
	getInterests,
};
