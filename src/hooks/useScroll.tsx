// useScroll hook
// use intersection observer to find percent of element in viewport

import { useEffect, useState } from "react";

interface UseScrollProps {
    ref: React.MutableRefObject<HTMLElement | null>
}

export default function UseScroll(props: UseScrollProps) {
    const { ref } = props;

    const [percent, setPercent] = useState(0);

    const callbackFunction = (entries: any) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            const percent = Math.floor(entry.intersectionRatio * 100);
            setPercent(percent);
        }
    }

    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 50;

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholdList(),
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }
    }, [ref.current])

    return percent;
}