"use client";

import { LinkCollection } from "@/components/link-collection"
import {
    checkEmployeeGms,
    checkEmployeeLink,
    companyLink,
    myLinks,
    scanCard, scanQC,
} from "../../data/data";
import EmployeeLinkProtected from "@/components/EmployeeLinkProtected";
import CollapsibleSection from "@/components/CollapsibleSection";

export default function Page() {
    return (
        <main>
            <div>
                <CollapsibleSection title="TV Links">
                    <LinkCollection links={myLinks} />
                </CollapsibleSection>

                <CollapsibleSection title="Check Scan employee link">
                    <LinkCollection links={checkEmployeeLink} />
                </CollapsibleSection>

                <CollapsibleSection title="Performace system">
                    <EmployeeLinkProtected />
                </CollapsibleSection>

                <CollapsibleSection title="Company link">
                    <LinkCollection links={companyLink} />
                </CollapsibleSection>

                <CollapsibleSection title="Employee GMS">
                    <LinkCollection links={checkEmployeeGms} />
                </CollapsibleSection>

                <CollapsibleSection title="Scan Card">
                    <LinkCollection links={scanCard} />
                </CollapsibleSection>
                <CollapsibleSection title="Scan QC">
                    <LinkCollection links={scanQC} />
                    <pre>
                Dinling.endline | o4KUvgclDx2j^V       phat.suo | Ps@2025@
                </pre>

                </CollapsibleSection>
            </div>
        </main>
    )
}
