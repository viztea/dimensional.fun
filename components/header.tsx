import { concat } from "lib/tools/concat";
import { PropsWithStyling } from "lib/types";

type HeaderProps = {
	title: string;
	subtitle?: string;
};

export default function Header({ title, subtitle, className, ...props }: PropsWithStyling<HeaderProps>) {
	return (
		<div className={concat("my-4", className)} {...props}>
			<h1 className="text-4xl font-bold">{title}</h1>
			{subtitle && <h2 className="font-normal">{subtitle}</h2>}
		</div>
	);
}
