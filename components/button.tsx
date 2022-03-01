import { concat } from 'lib/tools/concat';
import { PropsWithClassName } from 'lib/types';
import { AllHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonType = 'default';
export type ButtonStyle = 'default' | 'primary';

const styles: Record<ButtonStyle, string> = {
	default: 'text-gray-200 hover:bg-opacity-25 hover:bg-gray-800',
	primary: 'text-primary-light hover:bg-opacity-25 hover:bg-gray-800'
};

export default function Button({
	// type,
	children,
	style = 'default',
	className = '',
	link,
	...props
}: PropsWithChildren<ButtonProps>) {
	const classes = concat(
		'flex items-center transition px-3 py-2 rounded-lg',
		styles[style],
		className,
		link ? 'select-none cursor-pointer' : ''
	);

	return link ? (
		<a className={classes} {...props}>
			{children}
		</a>
	) : (
		<div className={classes}>{children}</div>
	);
}


type ButtonProps = PropsWithClassName<
	{
		type?: ButtonType;
		style?: ButtonStyle;
		link?: boolean;
	} & AllHTMLAttributes<{}>
>;

