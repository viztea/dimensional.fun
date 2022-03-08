import { concat } from 'lib/tools/concat';
import { PropsWithStyling } from 'lib/types';
import { PropsWithChildren } from 'react';

export function CardFooter({ children, className = "", style = {} }: PropsWithStyling<PropsWithChildren<{}>>) {
	return (
		<span style={style} className={concat("flex text-neutral-300 text-[.65rem] mt-2.5 font-medium space-x-1", className)}>
			{children}
		</span>
	);
}

export function CardHeader({ children, className = "", style = {} }: PropsWithStyling<PropsWithChildren<{}>>) {
	return (
		<div style={style} className={concat("flex px-4 py-3 mb-2 bg-[#050505] bg-opacity-50 border-primary-dark border-b-1 justify-between items-center rounded-t-xl", className)}>
            {children}
		</div>
	);
}

export function CardTitle({ children, className = "", style = {} }: PropsWithStyling<PropsWithChildren<{}>>) {
	return (
        <h1 style={style} className={concat('font-bold text-lg', className)}>{children}</h1>
	);
}

export function CardBody({ children, className = "", style = {} }: PropsWithStyling<PropsWithChildren<{}>>) {
	return (
        <div style={style} className={concat("px-4 pb-4 text-neutral-200", className)}>{children}</div>
	);
}

export default function Card({ children, className = "", style = {} }: PropsWithStyling<PropsWithChildren<{}>>) {
	return (
		<div style={style} className={concat("block max-w-lg bg-black bg-opacity-50 border-[#6b7280] border rounded-xl mb-6 last:mb-0 shadow-xl", className)}>
			{children}
		</div>
	);
}
