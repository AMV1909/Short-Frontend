import { api } from "../config/axios";

export const getData = async (endpoint: string, params?: object) => {
	return api.get(endpoint, { params }).then((res) => res.data);
};
