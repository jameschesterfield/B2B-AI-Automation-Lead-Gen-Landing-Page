import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';

interface Props {
  value: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<Props> = ({ value, duration = 2, suffix = '' }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration,
    bounce: 0,
  });
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
