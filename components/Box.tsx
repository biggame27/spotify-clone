import { twMerge } from "tailwind-merge"

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}
    
const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        <div
            //makes sure last rule always takes precedence
            className={twMerge(`
                bg-neutral-900
                rounded-lg
                h-fit
                w-full
            `,
                //returns class name
                className
            )}
        >
            {children}
        </div>
    )
}

export default Box;