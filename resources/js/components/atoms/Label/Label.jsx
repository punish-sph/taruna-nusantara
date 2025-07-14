import clsx from "clsx";

export default function Label({ children, id, classname }) {
    const baseClass = "block text-sm font-medium text-gray-800 mb-1";
    const classes = clsx(baseClass, classname);
    return (
        <label htmlFor={id} className={classes}>
            {children}
        </label>
    );
}
