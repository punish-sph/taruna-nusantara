import React from "react";
import Button from "../../Components/atoms/Button";
import InputField from "../../Components/molecules/InputField";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

export default function LoginForm({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <form onSubmit={onSubmit} method="post" className="w-full space-y-5">
            <div className="text-center mb-6">
                <Title 
                    text="Login" 
                    size="xl" 
                    mdSize="2xl" 
                    align="center"
                    className="font-bold mb-2 text-gray-800"
                />
                <Description 
                    size="sm" 
                    color="gray-600" 
                    align="center"
                >
                    Silahkan login untuk melanjutkan
                </Description>
            </div>
            
            <div className="space-y-4">
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
            </div>
            
            <Button
                variant="primary"
                type="submit"
                className="w-full py-3 text-base font-semibold"
                disabled={processing}
            >
                {processing ? "Logging in..." : "Login"}
            </Button>
            
            <div className="text-center pt-4 border-t border-gray-200">
                <Description 
                    size="sm" 
                    color="gray-600" 
                    align="center"
                >
                    Belum punya akun?{" "}
                    <a
                        href="/register"
                        className="text-sky-600 hover:text-sky-800 hover:underline transition duration-300 font-semibold ease-in-out"
                    >
                        Daftar Sekarang
                    </a>
                </Description>
            </div>
        </form>
    );
}