import Input from "../../Components/atoms/Input";
import Label from "../../Components/atoms/Label";

export default function InputField({
    label,
    inputType,
    name,
    id,
    placeholder,
    error,
    ...props
}) {
    return (
        <div className="mb-4">
            <Label id={id}>{label}</Label>
            <Input
                type={inputType}
                name={name}
                id={id}
                placeholder={placeholder}
                {...props}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}
