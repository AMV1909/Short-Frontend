import { api } from "../config/axios";

export const postData = async (endpoint: string, data: object) => {
	return api.post(endpoint, data).then((res) => res.data);
};
