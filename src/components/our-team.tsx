"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamsProps {
    id: number;
    name: string;
    position: string;
    image: string;
}

const teams: TeamsProps[] = [
    {
        id: 1,
        name: "Alex Oyebamiji",
        position: "Software Engineer",
        image: "/images/lilkeshofficial.jpg",
    },
    {
        id: 2,
        name: "Alex Feranmi",
        position: "Frontend Developer",
        image: "/images/odumodublvck.jpg",
    },
    {
        id: 3,
        name: "Lex043",
        position: "Backend Developer",
        image: "/images/lilkeshofficial.jpg",
    },
    {
        id: 4,
        name: "Busayo Omidiji",
        position: "Product Designer",
        image: "/images/odumodublvck.jpg",
    },
    {
        id: 5,
        name: "Dara Alabi",
        position: "Data Analyst",
        image: "/images/lilkeshofficial.jpg",
    },
    {
        id: 6,
        name: "Amos Alabi",
        position: "Chef",
        image: "/images/odumodublvck.jpg",
    },
    {
        id: 7,
        name: "Dara Alabi",
        position: "Data Analyst",
        image: "/images/lilkeshofficial.jpg",
    },
    {
        id: 8,
        name: "Busayo Omidiji",
        position: "Product Designer",
        image: "/images/odumodublvck.jpg",
    },
];

export default function OurTeam() {
    const [mouse, setMouse] = useState<number | null>(null);

    return (
        <section className="h-full bg-gray-200 px-4 py-10 lg:px-24">
            <div className="container mx-auto">
                <button className="rounded-full border bg-white px-4 py-2 uppercase">
                    Team
                </button>
                <h1 className="pt-4 text-3xl font-semibold">Meet our team</h1>
                <p className="py-6 font-mono">
                    We're a small team of designers, developers, <br /> and
                    product thinkers. No bloated layers, No filler. <br /> Just
                    real people who know how to ship.
                </p>
                <div className="mt-10 grid grid-cols-4 gap-x-4 gap-y-8">
                    {teams.map((team) => (
                        <div key={team.id}>
                            <div
                                onMouseEnter={() => setMouse(team.id)}
                                onMouseLeave={() => setMouse(null)}
                                className="relative"
                            >
                                <Image
                                    src={team.image}
                                    className="h-[400px] w-full cursor-pointer rounded-md object-cover grayscale hover:grayscale-0"
                                    width={300}
                                    height={300}
                                    alt="profile image"
                                />
                                <AnimatePresence>
                                    {mouse === team.id && (
                                        <motion.div
                                            key="wrapper"
                                            className="absolute bottom-6 right-0 flex items-center gap-3"
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                key="twitter"
                                                className="rounded-md bg-stone-300 p-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Twitter />
                                            </motion.div>

                                            <motion.div
                                                key="linkedin"
                                                className="rounded-md bg-stone-300 p-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{
                                                    delay: 0.04,
                                                    duration: 0.4,
                                                }}
                                            >
                                                <Linkedin />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-mono font-semibold">
                                    {team.name}
                                </h3>
                                <p className="mt-2 w-fit rounded-full border border-gray-300 p-2.5 text-sm font-light">
                                    {team.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
