import { useForm } from "@inertiajs/react";
import LoginLayout from "../../Components/templates/LoginLayout";

export default function LoginPage() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit: ", data);
        post("login");
    };

    return (
        <div className="min-w-full min-h-screen flex justify-center items-center bg-gray-50">
            <LoginLayout
                formData={data}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
                processing={processing}
            />
        </div>
    );
}
