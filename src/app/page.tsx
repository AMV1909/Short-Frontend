"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { Button } from "@/ui/atoms/Buttons/Button";
import { InputWithLabel } from "@/ui/molecules/Inputs/InputWithLabel";

import { formUrlSchema, type FormUrlData } from "@/lib/schemas/forms/urls";
import { useCreateShortUrl } from "@/lib/hooks/queries/useQueryUrls";

export default function Home() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormUrlData>({
		resolver: zodResolver(formUrlSchema),
	});

	const { isPending, mutateAsync: createShortUrl } = useCreateShortUrl();

	const [shortUrl, setShortUrl] = useState("");

	const onSubmit = async (data: FormUrlData) => {
		const url = await createShortUrl(data.url);

		setShortUrl(url);
	};

	return (
		<main className="flex justify-center pt-10">
			<div className="w-[400px] rounded-lg border border-gray-300 p-6">
				<h1 className="text-3xl font-semibold">URL Shortener</h1>

				<p className="text-sm text-gray-400">
					Enter a long URL to get a shortened version
				</p>

				<form onSubmit={handleSubmit(onSubmit)} className="mt-4">
					<InputWithLabel
						label="URL to shorten"
						{...register("url")}
						placeholder="https://example.com/very-long-url"
						errorMessage={errors.url?.message}
					/>

					<Button className="mt-4" disabled={isPending}>
						Shorten URL
					</Button>
				</form>

				{shortUrl && (
					<p className="mt-4 gap-1 whitespace-pre-line break-all rounded-lg border border-gray-300 p-4 text-sm">
						Shortened URL:{" "}
						<Link
							href={shortUrl}
							target="_blank"
							className="underline"
						>
							{shortUrl}
						</Link>
					</p>
				)}
			</div>
		</main>
	);
}
