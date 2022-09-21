import { FC, useRef, useState } from "react";
import { Container, Inner, IconLinks } from "./header.style";
import { Logo, IconButton } from "components";
import { iconButtons } from "../data";
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

	const containerRef = useRef<HTMLElement>();

	return (
		<Container ref={containerRef} home={home}>
			<Inner>
				<Logo />
				<MidLinks />
				<IconLinks>
					{iconButtons.map((el, index) => (
						<IconButton
							key={index}
							name={el.name}
							Icon={el.icon}
							modal={el.modal}
							containerHeight={containerRef.current?.offsetHeight}
							whichIsActive={whichIsActive}
							setActive={setActive}
						/>
					))}
				</IconLinks>
			</Inner>
		</Container>
	);
};
