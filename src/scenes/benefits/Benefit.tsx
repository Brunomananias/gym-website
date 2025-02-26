import React, { JSX } from "react";
import { SelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
}
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit: React.FC<Props> = ({
  icon,
  title,
  description,
  setSelectedPage,
}) => {
  return (
    <motion.div 
    className="mt=5 rounded-md border-2 border-gray-100 px-5 py-16  text-center"
    variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-pink-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">
        <AnchorLink
          className="text-sm font-bold text-pink-400 underline hover:text-yellow-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>{description}</p>
        </AnchorLink>
      </p>
    </motion.div>
  );
};

export default Benefit;
