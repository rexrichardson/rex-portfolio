import Image from "next/image";
import { useId } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MdPhoneIphone, MdOutlineWeb } from "react-icons/md";
import BulletCheck from "./BulletCheck/BulletCheck";
import Spacer from "./Spacer/Spacer";
import GridPattern from "./GridPattern/GridPattern";

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className=" absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#009ffd] to-[#009ffd] opacity-0 transition duration-300 group-hover:opacity-10 "
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 "
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

export default function ServicesItem({ service, theme }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      key={service.title}
      onMouseMove={onMouseMove}
      className={`group relative flex rounded-2xl 
      bg-white
      transition-shadow hover:shadow-md hover:shadow-zinc-900/5 `}
    >
      <ResourcePattern {...service.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200 group-hover:ring-zinc-900/10 " />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        {service.icon == "app" ? (
          <MdPhoneIphone size={40} />
        ) : service.icon == "web" ? (
          <MdOutlineWeb size={40} />
        ) : (
          ""
        )}
        <h3 className="mt-2 text-large font-semibold leading-7 text-zinc-900 sm:text-xl">
          {service.title}
        </h3>
        <Spacer l />
        <div className="flex flex-col gap-2">
          {service.points.map((point) => (
            <BulletCheck key={point} text={point} />
          ))}
        </div>
        <Spacer m />
      </div>
    </div>
  );
}
