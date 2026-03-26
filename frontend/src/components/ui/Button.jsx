import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import "../../styles/components/ui/button.scss";

const Button = ({
	children,
	to,
	variant = "primary",
	className = "",
	onClick,
	type = "button",
	disabled = false,
	isLoading = false,
}) => {
	const btnClass = `btn btn--${variant} ${disabled || isLoading ? "btn--disabled" : ""} ${className}`;

	if (to && !disabled && !isLoading) {
		return (
			<Link to={to} className={btnClass} onClick={onClick}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			className={btnClass}
			onClick={onClick}
			disabled={disabled || isLoading}>
			{isLoading ? (
				<>
					<Loader2 className="btn__spinner" size={18} />
					{children}
				</>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
