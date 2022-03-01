import { concat } from 'lib/tools/concat';
import { PropsWithClassName } from 'lib/types';
import React, { PropsWithChildren } from 'react';

export type ContainerProps = PropsWithClassName<{ 
	centered?: boolean; 
	grow?: boolean;
}>

export default function Container({
	children,
	className,
	centered,
	grow
}: PropsWithChildren<ContainerProps>) {
	return (
		<div className={concat('flex px-4 md:p-0', centered ? 'h-screen' : 'h-full')}>
			<div
				className={concat(
					centered ? 'm-auto' : 'mx-auto',
					grow ? '' : 'min-w-[362px] max-w-sm md:min-w-[392px] md:max-w-md',
					className ?? ''
				)}
			>
				{children}
			</div>
		</div>
	);
}
