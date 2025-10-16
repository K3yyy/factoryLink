import { LinkCollection } from "@/components/link-collection"
import {checkEmployeeLink, myLinks} from "../../data";
import AdminNavbar from "@/components/AdminNavbar";



export default function Page() {
    return (
        <main>
            <AdminNavbar/>
            <div>
                <div>
                    <LinkCollection links={myLinks} title="My Links" />
                </div>
                <div>
                    <LinkCollection links={checkEmployeeLink} title="Check employee link" />
                </div>

            </div>
        </main>
    )
}
