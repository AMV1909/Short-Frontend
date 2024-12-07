import { useMutation, useQuery } from "@tanstack/react-query";

import { getData } from "@/lib/helpers/getData";
import { postData } from "@/lib/helpers/postData";
import { validateUrlSchema } from "@/lib/schemas/queries/urls";
import { urlsRoutes } from "@/lib/utils/routes";

// Get normal URL
const getNormalUrl = async (id: string) => {
	const endpoint = urlsRoutes.get_url(id);
	const response = await getData(endpoint);
	const validation = validateUrlSchema(response);

	if (!validation.success) {
		console.error(validation.error.message);

		throw new Error("Data validation failed in 'getNormalUrl'");
	}

	return validation.data.url;
};

export const useGetNormalUrl = (id: string) => {
	const {
		data: url,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["url", id],
		queryFn: () => getNormalUrl(id),
		retry: (_, error) => !(error.message !== "Not Found"),
	});

	return { url, isLoading, error };
};

// Creates a short URL
const createShortUrl = async (url: string) => {
	const endpoint = urlsRoutes.create_url;
	const response = await postData(endpoint, { url });
	const validation = validateUrlSchema(response);

	if (!validation.success) {
		console.error(validation.error.message);

		throw new Error("Data validation failed in 'createShortUrl'");
	}

	return validation.data.url;
};

export const useCreateShortUrl = () => {
	return useMutation({
		mutationFn: (url: string) => createShortUrl(url),
	});
};
