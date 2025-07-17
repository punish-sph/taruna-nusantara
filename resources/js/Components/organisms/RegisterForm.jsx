
import Button from "../../Components/atoms/Button";
import InputField from "../../Components/molecules/InputField";
import Description from "../../Components/atoms/Description";

export default function RegisterForm({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <form onSubmit={onSubmit} method="post" className="w-full">
            <div className="w-full grid grid-cols-1">
                <InputField
                    label="Nama Lengkap"
                    inputType="text"
                    name="name"
                    id="name"
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={onChange}
                    error={errors.name}
                />
                <InputField
                    label="Email"
                    inputType="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan email"
                    value={formData.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <InputField
                    label="Password"
                    inputType="password"
                    name="password"
                    id="password"
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={onChange}
                    error={errors.password}
                />
                <InputField
                    label="Konfirmasi Password"
                    inputType="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Konfirmasi password"
                    value={formData.password_confirmation}
                    onChange={onChange}
                    error={errors.password_confirmation}
                />
            </div>

            <Button
                variant="primary"
                type="submit"
                disabled={processing}
                className="w-full mb-4 py-3"
            >
                {processing ? "Mendaftar..." : "Daftar Sekarang"}
            </Button>

            <div className="text-center pt-4 border-t border-gray-100">
                <Description
                    size="sm"
                    color="gray-600"
                    align="center"
                >
                    Sudah punya akun?{" "}
                    <a
                        href="/login"
                        className="text-sky-600 hover:text-sky-800 hover:underline transition-all duration-300 font-semibold"
                    >
                        Login di sini
                    </a>
                </Description>
            </div>
        </form>
    );
}