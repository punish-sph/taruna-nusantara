import { useState } from "react";
import LoginForm from "@/Components/organisms/Auth/LoginForm";
import { Head } from "@inertiajs/react";
import Card from "@/Components/atoms/Card";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

export default function LoginLayout({
    formData,
    onChange,
    onSubmit,
    errors,
    processing,
}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <>
            <Head title="Login" />
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-4/5 xl:w-3/4">
                <Card
                    padding="p-0"
                    className="grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[400px] md:min-h-[500px]"
                >
                    <div className="relative w-full overflow-hidden hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1986&q=80"
                            alt="SMA Taruna Nusantara"
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                                imageLoaded
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-110"
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-sky-400/40"></div>
                        <div
                            className={`absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-900 transition-opacity duration-700 ${
                                imageLoaded ? "opacity-0" : "opacity-100"
                            }`}
                        ></div>

                        <div className="relative z-10 h-full flex flex-col justify-end items-start p-6 sm:p-8 text-white">
                            <div className="text-center">
                                <Title
                                    text="Selamat Datang Kembali"
                                    size="xl"
                                    align="left"
                                    className=" text-white drop-shadow-lg lg:text-4xl"
                                />
                                <Description
                                    size="lg"
                                    color="white"
                                    align="left"
                                    className=" text-white/95 drop-shadow-md"
                                >
                                    Portal Akademik SMA Taruna Nusantara
                                </Description>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white flex items-center justify-center p-6 sm:p-8 md:col-span-1 col-span-1">
                        <div className="w-full max-w-sm">
                            <LoginForm
                                formData={formData}
                                onChange={onChange}
                                onSubmit={onSubmit}
                                errors={errors}
                                processing={processing}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
