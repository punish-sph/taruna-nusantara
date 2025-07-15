import Button from "../../Components/atoms/Button";
import InputField from "../../Components/molecules/InputField";

export default function LoginForm({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <form onSubmit={onSubmit} method="post" className="w-full p-2 sm:p-4">
            <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4">
                Login
            </h1>
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
            <Button
                variant="primary"
                type="submit"
                className="w-full"
                disabled={processing}
            >
                {processing ? "Logging in..." : "Login"}
            </Button>
            <p className="text-gray-600 text-center mt-4">
                Belum punya akun?{" "}
                <a
                    href="/register"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300 font-semibold ease-in-out" // Warna dan style link ditingkatkan
                >
                    Daftar Sekarang
                </a>
            </p>
        </form>
    );
}
