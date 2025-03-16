"use client";
import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../../public/svg/Loader";
import { TriangleAlert } from "lucide-react";

export default function EmailVerification() {
    const [isToggled, setIsToggled] = useState<boolean>(false);
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isValidEmail = (email: string) => {
        return email === "alexferanmi390@gmail.com";
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsValid(isValidEmail(email));
            setIsLoading(false);
        }, 1000);
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

                        <div className="relative">
                            {isLoading && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute bottom-2.5 left-3"
                                >
                                    <Loader className="animate-spin" />
                                </motion.span>
                            )}
                            <input
                                name="email"
                                className={`peer mt-2 w-full rounded-2xl border-gray-300 bg-gray-100 text-sm text-gray-500 outline-none placeholder-shown:border-gray-300 focus:border-2 focus:bg-white ${
                                    isValid
                                        ? "border-gray-300"
                                        : "border-red-500"
                                } ${isLoading ? "p-2.5 pl-10" : "p-2.5"}`}
                                placeholder="user@example.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                            />
                        </div>

                        {!isValid && (
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="mt-4 flex items-center gap-2 rounded-2xl border border-red-500 bg-red-200 p-2.5"
                            >
                                <TriangleAlert stroke="#ef4444" />
                                <p className="text-xs text-red-500">
                                    Email could not be verified
                                </p>
                            </motion.div>
                        )}
                    </motion.form>
                )}
            </AnimatePresence>
        </section>
    );
}
