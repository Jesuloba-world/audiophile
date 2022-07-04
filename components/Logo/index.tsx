import RealLogo from "assets/shared/desktop/logo.svg";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href={"/"}>
			<a>
				<RealLogo />
			</a>
		</Link>
	);
};
