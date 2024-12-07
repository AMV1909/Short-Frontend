"use client";

import { useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Frown, Loader } from "lucide-react";

import { useGetNormalUrl } from "@/lib/hooks/queries/useQueryUrls";
import { Button } from "@/ui/atoms/Buttons/Button";

interface Props {
	params: Promise<{ urlId: string }>;
}

export default function Redirect({ params }: Props) {
	const { urlId } = use(params);
	const { url, isLoading, error } = useGetNormalUrl(urlId);

	const router = useRouter();

	useEffect(() => {
		if (!url) return;

		window.location.href = url;
	}, [url]);

	return (
		<main className="flex h-screen w-screen items-center justify-center">
			{isLoading && <Loader className="h-20 w-20 animate-spin" />}

			{!isLoading && error && (
				<div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 p-6">
					<h1 className="text-3xl font-semibold">
						The page you are looking for does not exist
					</h1>

					<Frown className="h-20 w-20" />
					<Button onClick={() => router.push("/")}>Go Home</Button>
				</div>
			)}
		</main>
	);
}
