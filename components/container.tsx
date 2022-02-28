import { concat } from 'lib/tools/concat';
import React, { PropsWithChildren } from 'react';

export default function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
	return (
		<div className="flex h-full px-4 md:p-0">
			<div className={concat("mx-auto", className ?? "")}>{children}</div>
		</div>
	);
}
