"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const MotionImage = motion(Image);

const profileDetails = [
    {
        id: 1,
        name: "Lil Kesh",
        industry: "Nigerian rapper, singer and songwriter.",
        profile:
            "Lil Kesh, born Keshinro Ololade, is a Nigerian singer, rapper, and songwriter. Born on March 14, 1995, in Lagos, Nigeria, he rose to fame with his debut single 'Shoki' in 2014. Lil Kesh's music blends Afrobeats, Hip-Hop, and Street Pop, earning him a spot as one of Nigeria's prominent new-school artists. Notable releases include 'Shoki', 'Efejoku', 'Cause Trouble', and 'Apami'. He has collaborated with artists like Olamide, Davido, and Tiwa Savage, and was previously signed to Olamide's YBNL Nation record label.",
        image: "/images/lilkeshofficial.jpg",
    },
    {
        id: 2,
        name: "Big Kala",
        industry: "Nigerian Afrobeats singer and songwriter",
        profile:
            "Tochukwu Gbubemi Ojogwu (born 19 October 1993), known professionally as Odumodublvck, is a Nigerian rapper, singer and songwriter.[1] He is known for his stage performances, genre-blend and often wearing the Okpu Agu hat. The Okpu-Agu is traditionally worn by warriors in Igbo land,[2] Odumodublvck is a member of the hip-hop collective Anti World Gangstars. He currently resides in Abuja, Nigeria. Hails from Anioma in Delta State and born in Lagos, he relocated with his family to Abuja at the age of 7.",
        image: "/images/odumodublvck.jpg",
    },
];

export default function ProfileRevealAnimation() {
    const [toggle, setToggle] = useState<number | null>(null);
    return (
        <div className="flex h-screen w-full items-center justify-center bg-white px-10">
            <div className="flex w-[700px] gap-10">
                {profileDetails.map((details) => (
                    <motion.div
                        key={details.id}
                        className="relative h-[450px] cursor-pointer overflow-hidden rounded-md bg-gray-300"
                    >
                        <MotionImage
                            src={details.image}
                            alt={details.name}
                            fill
                            className="rounded-md object-cover grayscale hover:grayscale-0"
                            animate={
                                toggle === details.id
                                    ? {
                                          opacity: 0,
                                          x: -220,
                                          y: -120,
                                          rotate: -30,
                                      }
                                    : { opacity: 1, x: 0, y: 0, rotate: 0 }
                            }
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                // delay: 0.2,
                            }}
                        />

                        <motion.div className="p-4">
                            <motion.p
                                initial={false}
                                animate={
                                    toggle === details.id
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.85 }
                                }
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="text-xs leading-loose"
                            >
                                {details.profile}
                            </motion.p>

                            <div className="relative z-10 mt-32 flex items-center justify-between">
                                <div>
                                    <h1
                                        className={`font-mono text-2xl font-bold ${toggle === details.id ? "text-black" : "text-white"}`}
                                    >
                                        {details.name}
                                    </h1>
                                    <p
                                        className={`pt-2 text-xs font-normal ${toggle === details.id ? "text-black" : "text-white"}`}
                                    >
                                        {details.industry}
                                    </p>
                                </div>
                                <div
                                    onClick={() =>
                                        setToggle(
                                            toggle === details.id
                                                ? null
                                                : details.id
                                        )
                                    }
                                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${toggle === details.id ? "border-black text-black" : "border-white text-white"}`}
                                >
                                    {toggle === details.id ? "-" : "+"}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
