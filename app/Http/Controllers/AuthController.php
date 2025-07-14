<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    // Menampilkan halaman Login
    public function showLoginForm()
    {
        return Inertia::render("Auth/LoginPage");
    }

    // Menampilkan halaman Register
    public function showRegisterForm()
    {
        return Inertia::render("Auth/RegisterPage");
    }

    // Fungsi untuk login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required|email",
            "password" => "required|string"
        ], [
            "email.required" => "Email harus diisi",
            "email.email" => "Email tidak valid",
            "password.required" => "Password harus diisi",
        ]);

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/siswa');
        }

        return back()->withErrors(["email" => "Email atau password salah"]);
    }

    // Fungsi untuk register
    public function register(Request $request)
    {
        $request->validate([
            "name" => "required|string|max:200",
            "email" => "required|email|unique:users,email",
            "password" => "required|string|confirmed"
        ],[
            "name.required" => "Nama harus diisi",
            "name.max" => "Nama tidak boleh lebih dari 200 karakter",
            "email.required" => "Email harus diisi",
            "email.email" => "Email tidak valid",
            "email.unique" => "Email sudah terdaftar",
            "password.required" => "Password harus diisi",
            "password.confirmed" => "Password tidak cocok",
        ]);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            "role" => "student"
        ]);

        // membuat student baru
        $student = Student::create([
            "user_id" => $user->id
        ]);

        return redirect()->route('login')->with("success", "Berhasil mendaftar");
    }

    // Fungsi untuk logout
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
