import Category from "@/Models/Category";

const url = "http://localhost:5000/api/";

export async function getCategories() {
	let categories: Category[] = [];

	await fetch(url + "category")
		.then((res) => res.json())
		.then((res) => {
			categories = res as Category[];
		})
		.catch((err) => {
			console.log(err);
		});
	return categories;
}
