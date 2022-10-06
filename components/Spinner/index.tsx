import style from "./style.module.css";

export const Spinner = () => (
	<div className={style["lds-ellipsis"]}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);
