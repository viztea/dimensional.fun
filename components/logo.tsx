import { concat } from 'lib/tools/concat';
import Image from 'next/legacy/image';

type LogoProps = {
	className?: string;
};

export default function Logo({ className }: LogoProps) {
	return (
		<div className={concat(className || 'relative h-80 md:w-80')}>
			<Image
				src="/logo-text.png"
				className="inline-block"
				layout="fill"
				objectFit="cover"
				alt="text logo"
			/>
		</div>
	);
}
