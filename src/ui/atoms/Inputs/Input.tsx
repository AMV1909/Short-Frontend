import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"input"> {
	errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
	({ className, type, errorMessage, ...props }, ref) => {
		return (
			<>
				<input
					type={type}
					className={cn(
						"flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm",
						className,
					)}
					ref={ref}
					{...props}
				/>

				{errorMessage && (
					<p className="mt-1 text-sm text-red-500">{errorMessage}</p>
				)}
			</>
		);
	},
);

Input.displayName = "Input";