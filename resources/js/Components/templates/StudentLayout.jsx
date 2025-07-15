import StudentNavbar from "../../Components/organisms/StudentNavbar";

export default function StudentLayout({ children }) {
    return (
        <>
            <StudentNavbar />
            <main className="p-4">{children}</main>
        </>
    );
}
