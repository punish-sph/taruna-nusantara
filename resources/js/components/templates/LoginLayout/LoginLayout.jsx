import LoginForm from "../../organisms/LoginForm/LoginForm";

export default function LoginLayout({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-1/2 bg-white border grid grid-cols-1 lg:grid-cols-2 items-center border-gray-300 shadow-lg p-4 sm:p-6 rounded-lg">
            <div className="w-full p-2 sm:p-4 hidden lg:flex flex-col justify-center items-center ">
                <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-2">
                    Selamat Datang
                </h1>
                <p className="font-medium text-gray-600 text-center mb-4">
                    Silahkan login untuk melanjutkan
                </p>
                <img
                    src="/images/schoolLogo.jpg"
                    alt="School Logo"
                    className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain"
                />
            </div>
            <LoginForm
                formData={formData}
                onChange={onChange}
                onSubmit={onSubmit}
                errors={errors}
                processing={processing}
            />
        </div>
    );
}
