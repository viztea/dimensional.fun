import { concat } from 'lib/tools/concat';
import { PropsWithChildren, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Container from './container';

type AlertProps = PropsWithChildren<{}>;

export default function Alert({ children }: AlertProps) {
	const [closed, setClosed] = useState(false);

	return (
		<div
			className={concat(
				'absolute select-none bottom-0 inset-x-0 bg-black bg-opacity-10 backdrop-blur-3xl border-t border-t-gray-800 py-2.5 justify-center',
				closed ? 'hidden' : 'flex'
			)}
		>
			<Container className="flex justify-between">
				<>{children}</>
				<button onClick={() => setClosed(true)} className="flex items-center right-0">
					<FaTimes />
				</button>
			</Container>
		</div>
	);
}
