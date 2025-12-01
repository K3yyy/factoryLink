"use client";
import { LinkCollection } from "@/components/link-collection"
import {checkEmployeeGms, checkEmployeeLink, myLinks} from "../../data";
import AdminNavbar from "@/components/AdminNavbar";
import {useState} from "react";
import EmployeeLinkProtected from "@/components/EmployeeLinkProtected";

export default function Page() {

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
