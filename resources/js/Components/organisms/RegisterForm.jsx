import Button from "../../Components/atoms/Button";
import InputField from "../../Components/molecules/InputField";

export default function RegisterForm({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <form onSubmit={onSubmit} method="post" className="w-full p-2 sm:p-4">
            <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4">
                Register
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField
                    label={"Nama Lengkap"}
                    inputType="text"
                    name="name"
                    id="name"
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={onChange}
                    error={errors.name}
                />
                <InputField
                    label={"Email"}
                    inputType="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan email"
                    value={formData.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <InputField
                    label={"Password"}
                    inputType="password"
                    name="password"
                    id="password"
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={onChange}
                    error={errors.password}
                />
                <InputField
                    label={"Konfirmasi Password"}
                    inputType="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Masukkan konfirmasi password"
                    value={formData.password_confirmation}
                    onChange={onChange}
                    error={errors.password_confirmation}
                />
            </div>

            <Button
                variant="primary"
                type="submit"
                disabled={processing}
                className={"w-full"}
            >
                {processing ? "Mendaftar..." : "Daftar"}
            </Button>
            <p className="text-gray-600 text-center mt-4">
                Sudah punya akun?{" "}
                <a
                    href="/login"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300 font-semibold ease-in-out" // Warna dan style link ditingkatkan
                >
                    Login Sekarang
                </a>
            </p>
        </form>
    );
}
