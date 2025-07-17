// RegisterLayout.jsx
import RegisterForm from "../../Components/organisms/RegisterForm";
import { Head } from "@inertiajs/react";
import Card from "@/Components/atoms/Card";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

export default function RegisterLayout({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    return (
        <>
            <Head title="Register" />
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-3/5 xl:w-1/2">
                <Card 
                    padding="p-6 sm:p-8"
                    className="bg-gradient-to-br from-white to-gray-50/50"
                >
                    <div className="text-center mb-6">
                        <Title
                            text="Bergabung dengan Kami"
                            highlight="Bergabung"
                            size="xl"
                            mdSize="2xl"
                            align="center"
                            className="mb-2"
                        />
                        <Description
                            size="md"
                            color="gray-600"
                            align="center"
                            className="max-w-md mx-auto"
                        >
                            Daftarkan diri Anda untuk mengakses Portal Akademik SMA Taruna Nusantara
                        </Description>
                    </div>

                    {/* Form Section */}
                    <RegisterForm
                        formData={formData}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        errors={errors}
                        processing={processing}
                    />
                </Card>
            </div>
        </>
    );
}
