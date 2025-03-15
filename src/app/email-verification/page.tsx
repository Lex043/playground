import React from "react";
import EmailVerification from "@/components/email-verification";

export default function page() {
    return (
        <section className="flex h-screen flex-col items-center justify-center">
            <EmailVerification />
        </section>
    );
}
