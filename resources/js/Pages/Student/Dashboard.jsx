import { usePage } from "@inertiajs/react";
import StudentLayout from "../../Components/templates/StudentLayout";

export default function StudentDashboard() {
    const { auth } = usePage().props;
    const user = auth.user;
    return (
        <>
            <StudentLayout>
                <h1 className="text-2xl font-semibold">
                    Welcome back,{" "}
                    <span className="text-gray-600">{user.name}</span>
                </h1>
            </StudentLayout>
        </>
    );
}
