import clsx from "clsx";

export default function Input({
    type = "text",
    id,
    name,
    placeholder,
    className,
    ...props
}) {
    const baseClass =
        "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out";
    const classes = clsx(baseClass, className);
    return (
        <input
            {...props}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className={classes}
        />
    );
}
