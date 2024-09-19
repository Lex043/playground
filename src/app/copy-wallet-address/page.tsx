import React from "react";
import CopyWalletAddress from "@/components/copy-wallet-address";

export default function page() {
    return (
        <section className="flex h-screen flex-col items-center justify-center">
            <CopyWalletAddress />
        </section>
    );
}
