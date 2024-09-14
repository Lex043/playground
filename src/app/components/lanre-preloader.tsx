"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LanrePreloader() {
    return (
        <section className="fixed left-0 top-0 h-full w-full overflow-hidden bg-[#05ff00]">
            <div className="mx-auto flex h-full w-full max-w-[40rem] flex-col items-center justify-center px-10 font-mono text-black md:max-w-full">
                <motion.section className="relative">
                    <motion.div className="relative z-20 h-[27rem] w-full">
                        <Image
                            className="h-full w-full object-cover"
                            height={200}
                            width={300}
                            src="/about-hero.webp"
                            alt="hero-image"
                        ></Image>
                    </motion.div>

                    <motion.div>
                        <motion.p className="absolute -right-20 -top-40 z-30 text-[12rem] font-bold">
                            99
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100,
                            // backgroundColor: "",
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            backgroundColor: "white",
                        }}
                        transition={{
                            duration: 0.75,
                            ease: "easeOut",
                        }}
                        className="z-10 overflow-hidden bg-white"
                    >
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: -100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                            className="text-center text-7xl font-bold uppercase tracking-wider"
                        >
                            lanre.wtf
                        </motion.h1>
                    </motion.div>
                    <motion.div className="absolute bottom-0 right-[30rem] w-[18rem]">
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                            }}
                            className="mt-2 font-sans text-xl text-black"
                        >
                            Go, CI, CD, Testing, Tutorials, Rants and stuff I
                            think (I don't) know
                        </motion.p>
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
}
