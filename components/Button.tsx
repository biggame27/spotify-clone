import { forwardRef } from "react";
import { twMerge } from "tailwind-merge"
//gives all button stuff
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

//disabled is clickable or not
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      //disabed only works when disabled
      className={twMerge(`
        w-full
        rounded-full
        bg-green-500
        border
        border-transparent
        px-3
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition
      `, className,)}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button
