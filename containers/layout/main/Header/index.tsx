import { FC, useState, useEffect } from "react";
import {
	Container,
	Inner,
	IconLinks,
	HamButton,
	SideNav,
} from "./header.style";
import { Logo, IconButton } from "components";
import { iconButtons } from "./data";
import { MidLinks } from "../MidLinks";
import Hamburger from "assets/shared/tablet/icon-hamburger.svg";
import { useBackdrop } from "hooks";
import { CategoryPick } from "containers";
import { CategoryType } from "src/graphql/generated";

interface headerProps {
	home?: boolean;
	categories: CategoryType[];
}

type whichIsActiveType = "cart" | "user" | undefined;

export const Header: FC<headerProps> = ({ home, categories }) => {
	const [showSideNav, setShowSideNav] = useState(false);
	const [whichIsActive, setWhichIsActive] = useState<whichIsActiveType>();

	const setActive = (name: whichIsActiveType) => {
		setWhichIsActive(name);
	};

	const { toggleBackdrop, showBackdrop } = useBackdrop();

	useEffect(() => {
		if (!showBackdrop) {
			setShowSideNav(false);
		}
	}, [showBackdrop]);

	const onHamClick = () => {
		setShowSideNav((prev) => !prev);
		toggleBackdrop();
	};

	return (
		<Container home={home}>
			<Inner>
				<HamButton onClick={onHamClick} active={showSideNav}>
					<div className="first" />
					<div className="second" />
					<div className="third" />
				</HamButton>
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
			{showSideNav ? (
				<SideNav>
					<CategoryPick categories={categories} home={false} />
				</SideNav>
			) : null}
		</Container>
	);
};
