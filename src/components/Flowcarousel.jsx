import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";

import flow1 from "../assets/Guidesflow/Dynamic.jpg";
import flow2 from "../assets/Guidesflow/Essential.jpg";
import flow3 from "../assets/Guidesflow/Zenflow.jpg";
import flow4 from "../assets/Guidesflow/Peakflow.jpg";

const IMGS = [flow1, flow2, flow3, flow4];

const Flowcarousel = ({
  autoplay = true,
  pauseOnHover = true,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ------------------------
  // Container and carousel sizing
  // ------------------------
  const cylinderHeight = screenWidth <= 640 ? 220 : 350;
  const cylinderWidth = screenWidth <= 640 ? cylinderHeight * 6.5 : 1400;

  const faceCount = images.length;
  const faceWidth = cylinderWidth / faceCount;

  const radius = (cylinderWidth / (2 * Math.PI)) * 0.85;

  // ------------------------
  // Motion/drag logic
  // ------------------------
  const dragFactor = 0.005;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 25, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) startInfiniteSpin(rotation.get());
    else controls.stop();
  }, [autoplay]);

  // ------------------------
  // Event handlers
  // ------------------------
  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") rotation.set(latest.rotateY);
  };
  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };
  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };
  const handleMouseEnter = () => autoplay && pauseOnHover && controls.stop();
  const handleMouseLeave = () =>
    autoplay && pauseOnHover && startInfiniteSpin(rotation.get());

  // ------------------------
  // Render
  // ------------------------
  return (
    <div
      className="relative w-[95%] max-w-[750px] mx-auto flex items-center justify-center
                 rounded-lg overflow-hidden"
      style={{ height: cylinderHeight }}
    >
      <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[150px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[0.2%] [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt={`flow-${i}`}
                className="pointer-events-none h-[160px] w-[240px] md:h-[200px] md:w-[300px]
                           rounded-xl border border-[var(--foreground)]/20 backdrop-blur-sm shadow-lg
                           object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Flowcarousel;
