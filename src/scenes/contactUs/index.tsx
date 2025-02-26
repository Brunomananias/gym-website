/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs: React.FC<Props> = ({ setSelectedPage }) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-pink-300
    px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-pink-500">JOIN NOW</span> TO GET A NEW SHAPE
          </HText>
          <p className="my-5">
            We provide world class fitness equipment, trainers and classes to
            get you to yout ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* FORM  AND IMAGE */}
        <div className="mt-10 justify-between gap-8  md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.0 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/brunomananias2009@hotmail.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-pink-500">
                  {errors.name.type === "required" && "this field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max lengthis 100 characters"}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-pink-500">
                  {errors.name.type === "required" && "this field is required."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={500}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-pink-500">
                  {errors.name.type === "required" && "this field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max lengthis 2000 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-amber-200 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.0 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
                <img 
                className="w-full"
                alt="contactis"
                src={ContactUsPageGraphic}
                />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
