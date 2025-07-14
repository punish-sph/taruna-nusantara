export default function LoginPage() {
    return (
        <div className="min-w-full min-h-screen flex justify-center items-center bg-gray-50">
            {" "}
            {/* Menambahkan bg-gray-50 untuk sedikit kontras */}
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-1/2 bg-white border grid grid-cols-1 lg:grid-cols-2 items-center border-gray-300 shadow-lg p-4 sm:p-6 rounded-lg">
                {" "}
                {/* Penyesuaian lebar dan padding */}
                {/* Kolom Kiri (Hanya Muncul di Layar Besar) */}
                <div className="w-full p-2 sm:p-4 hidden lg:flex flex-col justify-center items-center ">
                    {" "}
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
                <form action="#" method="post" className="w-full p-2 sm:p-4">
                    <div className="flex justify-between w-full items-center mb-4 lg:hidden">
                        <img
                            src="/images/schoolLogo.jpg"
                            alt="School Logo"
                            className="w-24 sm:w-28 object-contain mr-4"
                        />
                        <h1 className="flex-grow text-2xl font-bold text-center text-gray-800">
                            Login
                        </h1>
                        <div className="w-24 sm:w-28 mr-4"></div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-800 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Masukan email Anda"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out" // Style focus ditingkatkan
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-800 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Masukan password Anda"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
                        />
                    </div>
                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 font-semibold ease-in-out">
                        {" "}
                        Login
                    </button>
                    <p className="text-sm text-gray-600 text-center mt-4">
                        {" "}
                        Belum punya akun?{" "}
                        <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300 font-semibold ease-in-out" // Warna dan style link ditingkatkan
                        >
                            Daftar Sekarang
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
