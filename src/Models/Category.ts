import { ObjectId } from "mongodb";

export default interface Category {
	_id: ObjectId;
	type: string;
	categoryTypeName: string;
	displayName: string;
}
