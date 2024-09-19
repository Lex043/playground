"use client";

import React from "react";
import { motion, useAnimate } from "framer-motion";

export default function CopyWalletAddress() {
    const [scope, animate] = useAnimate();

    const handleClickEffect = async () => {
        await Promise.all([
            animate(
                ".btn-text",
                { y: "-20px", opacity: 0.3, filter: "blur(1px)" },
                { duration: 0.4, ease: "easeInOut" }
            ),
            animate(
                ".copied",
                { y: 0, opacity: 1 },
                { duration: 0.5, ease: "easeInOut" }
            ),
        ]);

        await animate(
            ".btn-text",
            { y: 0, opacity: 1, filter: "blur(0px)" },
            { duration: 0.2, ease: "easeInOut" }
        );

        await Promise.all([
            animate(
                ".svg-container",
                { scale: 1.2 },
                { duration: 0.3, ease: "easeInOut" }
            ),

            animate(
                ".svg",
                { rotate: 0 },
                { duration: 0.3, ease: "easeInOut" }
            ),
        ]);

        await animate(
            ".copied",
            { y: 100, opacity: 0 },
            { duration: 0.3, ease: "easeInOut", delay: 0.6 }
        );

        await animate(
            ".svg-container",
            { scale: 0.7 },
            { duration: 0.3, ease: "easeInOut" }
        );

        await animate(
            ".svg",
            { rotate: -50 },
            { duration: 0.3, ease: "easeInOut" }
        );
    };

    return (
        <motion.div ref={scope} className="relative w-[30%] overflow-hidden">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                className="copied absolute left-[40%] flex w-fit -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-2 rounded-full bg-green-400 px-2 py-1 text-center text-white"
            >
                <motion.div className="svg-container" initial={{ scale: 0.7 }}>
                    <motion.svg
                        initial={{ rotate: -50 }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="white"
                        className="svg h-4 w-4 bg-inherit"
                    >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </motion.svg>
                </motion.div>

                <motion.p className="text-base">Copied!</motion.p>
            </motion.div>
            <div className="mt-10 flex justify-between rounded-lg bg-[#e4e2e2] p-2 text-[#535353]">
                <p>Solana address:</p>
                <p>ArKrjZ...rDdQe8</p>
            </div>
            <motion.button
                onClick={() => handleClickEffect()}
                className="relative z-10 w-full overflow-hidden rounded-lg bg-black py-4 text-xl text-white outline-none"
            >
                <motion.span
                    initial={{ y: 0, opacity: 1 }}
                    className="btn-text block cursor-pointer"
                >
                    {" "}
                    Copy address
                </motion.span>
            </motion.button>
        </motion.div>
    );
}
