"use client";

import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EmailVerification() {
    const [isToggled, setIsToggled] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="h-[30%] w-[20%]">
            <div className="flex justify-between">
                <p>Activate notification</p>
                <label className="relative z-10 inline-block h-[28px] w-[50px] cursor-pointer">
                    <input
                        type="checkbox"
                        className="peer hidden"
                        onChange={() => setIsToggled((prev) => !prev)}
                    />
                    <span className="duration-400 absolute inset-0 cursor-pointer rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
                    <span className="duration-400 absolute bottom-1 left-1 h-[20px] w-[20px] rounded-full bg-white transition-transform peer-checked:translate-x-[20px]"></span>
                </label>
            </div>

            <AnimatePresence>
                {isToggled && (
                    <motion.form
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        onSubmit={handleSubmit}
                        className="mt-4 flex flex-col"
                    >
                        <label className="text-xs text-gray-400">Email</label>

                        <input
                            name="email"
                            className={`peer mt-2 w-full rounded-2xl border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-500 outline-none placeholder-shown:border-gray-300 ${
                                isSubmitted ? "invalid:border-red-500" : ""
                            }`}
                            placeholder="user@example.com"
                            required
                            type="email"
                        />

                        {isSubmitted && (
                            <p className="mt-1 hidden text-xs text-red-500 peer-invalid:block">
                                Please enter a valid email.
                            </p>
                        )}
                    </motion.form>
                )}
            </AnimatePresence>
        </section>
    );
}
