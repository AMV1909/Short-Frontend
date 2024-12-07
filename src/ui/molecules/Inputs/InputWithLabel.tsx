import { type ComponentProps } from "react";
import { Input } from "@/ui/atoms/Inputs/Input";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<typeof Input> {
	label: string;
}

export function InputWithLabel({ label, className, ...props }: Props) {
	return (
		<label className={cn("flex flex-col gap-1 text-sm", className)}>
			{label + (props.required ? "*" : "")}
			<Input {...props} />
		</label>
	);
}
