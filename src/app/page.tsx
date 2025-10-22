"use client";
import { LinkCollection } from "@/components/link-collection"
import {checkEmployeeGms, checkEmployeeLink, myLinks} from "../../data";
import AdminNavbar from "@/components/AdminNavbar";
import {useState} from "react";
import EmployeeLinkProtected from "@/components/EmployeeLinkProtected";

export default function Page() {

    const [password, setPassword] = useState("");
    const [accessGranted, setAccessGranted] = useState(false);

    const handleCheckPassword = () => {
        if (password === "143") { // set your password
            setAccessGranted(true);
        } else {
            alert("Wrong password!");
        }
    };
    // filter only the link you want to protect
    const employeeLink = checkEmployeeGms.filter(
        (link) => link.title === "Employee GMS DL"
    );
    return (
        <main>
            <AdminNavbar/>
            <div>
                <div>
                    <LinkCollection links={myLinks} title="TV Links" />
                </div>
                <div>
                    <LinkCollection links={checkEmployeeLink} title="Check employee link" />
                </div>
                <div>
                    <EmployeeLinkProtected/>
                </div>

            </div>
        </main>
    )
}
