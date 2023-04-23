import styles from "./Button.module.css";

const resolveStyles = ({ variant, color, fullWidth }) => {
  let colorClass = styles.primary;
  let variantClass = styles.contained;
  const fullWidthClass = fullWidth ? styles.fullWidth : ""

  switch (variant) {
    case "contained":
      variantClass = styles.contained;
      break;
    case "outlined":
      variantClass = styles.outlined;
      break;
    default:
      variantClass = styles.contained;
      break;
  }

  switch (color) {
    case "primary":
      colorClass = variant === "outlined" ? styles.primaryOutlined: styles.primaryContained ;
      break;
    case "secondary":
      colorClass = variant === "outlined" ? styles.secondaryOutlined: styles.secondaryContained ;
      break;
    default:
      colorClass = styles.primaryContained;
      break;
  }

  return `${colorClass} ${variantClass} ${fullWidthClass}`;
};

export function Button({fullWidth, variant = "contained", color = "primary", onClick = () => {}, content = "Button" }) {
  const classnames = resolveStyles({ variant, color, fullWidth });
  return (
    <button
      className={classnames}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
