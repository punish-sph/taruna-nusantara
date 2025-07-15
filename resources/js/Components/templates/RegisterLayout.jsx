import RegisterForm from "../../Components/organisms/RegisterForm";

export default function RegisterLayout({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-1/2 bg-white border flex items-center border-gray-300 shadow-lg p-4 sm:p-6 rounded-lg">
            <RegisterForm
                formData={formData}
                onChange={onChange}
                onSubmit={onSubmit}
                errors={errors}
                processing={processing}
            />
        </div>
    );
}
