import { MiddleLinks } from "./midlinks.style";
import { midlinks } from "../data";
import { Link } from "components";

export const MidLinks = () => {
	return (
		<MiddleLinks>
			{midlinks.map((el, index) => (
				<Link key={index} name={el.name} href={el.href} />
			))}
		</MiddleLinks>
	);
};
