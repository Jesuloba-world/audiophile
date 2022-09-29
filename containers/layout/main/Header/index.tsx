import { FC, useRef, useState } from "react";
import { Container, Inner, IconLinks } from "./header.style";
import { Logo, IconButton } from "components";
import { iconButtons } from "./data";
import { MidLinks } from "../MidLinks";

interface headerProps {
	home?: boolean;
}

export const Header: FC<headerProps> = ({ home }) => {
	const [whichIsActive, setWhichIsActive] = useState<
		"cart" | "user" | undefined
	>();

	const setActive = (name: "cart" | "user" | undefined) => {
		setWhichIsActive(name);
	};

	return (
		<Container home={home}>
			<Inner>
				<Logo />
				<MidLinks />
				<IconLinks>
					{iconButtons.map((el, index) => (
						<IconButton
							key={index}
							name={el.name}
							Icon={el.icon}
							Modal={el.modal}
							whichIsActive={whichIsActive}
							setActive={setActive}
						/>
					))}
				</IconLinks>
			</Inner>
		</Container>
	);
};
