import React from "react";

/**
 * @typedef {{
 *  color?: string,
 *  onClick?: () => void,
 *  children?: React.ReactNode
 * }} ButtonProps
 */

/**
 * Button component
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
function Button({ color, onClick, children }) {
	return (
		<button
			type="button"
			style={{
				color: color || "red",
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
