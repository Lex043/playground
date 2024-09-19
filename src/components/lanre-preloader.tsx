"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function LanrePreloader() {
    const [isFadedOut, setIsFadedOut] = useState(false);

    return (
        <motion.section
            initial={{
                clipPath: "inset(0 0 0 0)",
            }}
            animate={{
                clipPath: isFadedOut ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: isFadedOut ? 3 : 0,
            }}
            className="fixed left-0 top-0 h-full w-full overflow-hidden bg-[#05ff00]"
        >
            <div className="mx-auto flex h-full w-full max-w-[40rem] flex-col items-center justify-center px-10 font-mono text-black md:max-w-full">
                <motion.section className="relative">
                    <motion.div
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{
                            clipPath: isFadedOut
                                ? "inset(0 0 100% 0)"
                                : "inset(0 0 0 0)",
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: isFadedOut ? 1.9 : 0,
                        }}
                        className="relative z-20 h-[27rem] w-full overflow-hidden"
                    >
                        <Image
                            className="h-full w-full object-cover"
                            height={200}
                            width={300}
                            src="/about-hero.webp"
                            alt="hero-image"
                        ></Image>
                    </motion.div>

                    <motion.div>
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: isFadedOut ? 0 : 1,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: isFadedOut ? 1.7 : 0.5,
                            }}
                            className="absolute -right-16 -top-44 z-30 text-[12rem] font-bold"
                        >
                            <AnimatedCounter
                                from={10}
                                to={99}
                                onFinish={() => setIsFadedOut(true)}
                                onFinishDelay={500}
                            />
                        </motion.p>
                    </motion.div>

                    <motion.div className="oveflow-hidden w-full">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: "-100%",
                                backgroundColor: "white",
                            }}
                            animate={{
                                opacity: isFadedOut ? 0 : 1,
                                y: isFadedOut ? "-100%" : 0,
                                backgroundColor: isFadedOut ? "white" : "",
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: isFadedOut ? 1.5 : 0.5,
                            }}
                            className="z-10 overflow-hidden bg-white"
                        >
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: "-100%",
                                }}
                                animate={{
                                    opacity: isFadedOut ? 0 : 1,
                                    y: isFadedOut ? "-100%" : 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: isFadedOut ? 1 : 0.5,
                                }}
                                className="text-center text-7xl font-bold uppercase tracking-wider"
                            >
                                lanre.wtf
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div className="absolute bottom-0 right-[30rem] w-[18rem]">
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{
                                opacity: isFadedOut ? 0 : 1,
                                y: isFadedOut ? "100%" : 0,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                            className="mt-2 font-sans text-xl text-black"
                        >
                            Go, CI, CD, Testing, Tutorials, Rants and stuff I
                            think (I don&apos;t) know
                        </motion.p>
                    </motion.div>
                </motion.section>
            </div>
        </motion.section>
    );
}
