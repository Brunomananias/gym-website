import React from "react";
import { BenefitType, SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from  "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art Facilities",
    description:
      "Neque aadipiscing amet amet enim. feughit enim semper it utodo nmaid jid kid. Efect ac turpia id.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Neque aadipiscing amet amet enim. feughit enim semper it utodo nmaid jid kid. Efect ac turpia id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Neque aadipiscing amet amet enim. feughit enim semper it utodo nmaid jid kid. Efect ac turpia id.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits: React.FC<Props> = ({ setSelectedPage }) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to yout ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/*BENEFITS*/}
        <motion.div
          className="md:flex items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
           className="mx-auto"
           alt="benefits-page-graphic"
           src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION  */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]  before:bg-[url('/src/assets/AbstractWaves.png')] before:bg-cover before:w-35 before:h-20">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.0 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-pink-600">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/*DESCRIPT*/}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.0 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <p className="my-5">
                Unrivaled Gym. Unparalledled Training Fitness Classes. World
                Class Studios to get the body shapes That you Dream of.. Get
                your Dream Body Now. Unrivaled Gym. Unparalledled Training
                Fitness Classes. World Class Studios to get the body shapes That
                you Dream of.. Get your Dream Body Now.
              </p>
              <p className="mb-5">
                Unrivaled Gym. Unparalledled Training Fitness Classes. World
                Class Studios to get the body shapes That you Dream of.. Get
                your Dream Body Now. Unrivaled Gym. Unparalledled Training
                Fitness Classes. World Class Studios to get the body shapes That
                you Dream of.. Get your Dream Body Now.
              </p>
            </motion.div>

            {/* {BUTTON} */}
            <div className="relative mt-16">
                <div className="before: absolute before:-bottom-20 before:right-40 before:z-[-1] before:bg-[url('/src/assets/Sparkles.png')] before:w-200 before:h-40">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
