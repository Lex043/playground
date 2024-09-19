"use client";

import { animate, Keyframes } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    from: number; // Number to start counting from
    to: number; // Number to increment to
    onFinish: () => void; // Function to run when count ends
    onFinishDelay?: number;
    animationOptions?: Keyframes; // Additional animation options
    className?: string; // Additional classNames
    step?: number; // Increment step (default to 10)
}

const AnimatedCounter = ({
    from,
    to,
    onFinish,
    onFinishDelay = 0,
    animationOptions,
    className,
    step = 10,
}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        element.textContent = from.toString();

        const controls = animate(from, to, {
            duration: 5,
            ease: "easeInOut",
            ...animationOptions,
            onUpdate(value) {
                // Round value to nearest step (e.g., increment by 10)
                let incrementedValue = Math.round(value / step) * step;

                // Ensure the counter stops at 99
                if (incrementedValue >= to) {
                    incrementedValue = to;
                }

                element.textContent = incrementedValue.toString();
            },
            onComplete() {
                setTimeout(() => {
                    onFinish();
                }, onFinishDelay); // Adjust delay to fit your need
            },
        });

        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return <span className={className} ref={ref}></span>;
};

export default AnimatedCounter;
