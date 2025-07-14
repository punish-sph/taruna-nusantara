export default function LoginPage() {
    return (
        <div className="min-w-full min-h-screen flex justify-center items-center">
            <div className="w-[80%] lg:w-1/2 bg-white border grid grid-cols-1 lg:grid-cols-2 items-center border-gray-300 shadow-lg p-2 rounded-lg">
                <div className="w-full p-1 hidden lg:flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold text-center">
                        Login
                    </h1>
                    <p className="font-medium text-gray-500">
                        Silahkan login untuk melanjutkan
                    </p>
                    <img
                        src="/images/schoolLogo.jpg"
                        alt="School Logo"
                        className="w-48 md:w-64 object-contain"
                    />
                </div>
                <form action="#" method="post" className="w-full px-2">
                    <h1 className="text-xl font-semibold text-center block lg:hidden">
                        Login
                    </h1>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Masukan email"
                            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-indigo-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Masukan password"
                            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-indigo-500"
                        />
                    </div>
                    <button className="w-full px-3 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300 font-medium ease-in-out">
                        Login
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-2">
                        Belum punya akun?{" "}
                        <a
                            href="#"
                            className="text-indigo-500 hover:text-indigo-600 hover:underline transition duration-300 font-medium ease-in-out"
                        >
                            Daftar
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
