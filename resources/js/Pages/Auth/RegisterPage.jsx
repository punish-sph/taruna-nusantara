import { useForm } from "@inertiajs/react";
import RegisterLayout from "../../Components/templates/RegisterLayout";

export default function RegisterPage() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit: ", data);
        post("register");
    };

    return (
        <div className="min-w-full min-h-screen flex justify-center items-center bg-gray-50">
            <RegisterLayout
                formData={data}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
                processing={processing}
            />
        </div>
    );
}
