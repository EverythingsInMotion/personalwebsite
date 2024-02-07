/* eslint-disable react/no-unescaped-entities */
// components
import Circles from "/components/Circles";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// emailjs
import emailjs from "@emailjs/browser";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import { useState, useRef } from "react";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // function formSubmitHandler(e) {
  //   e.preventDefault();
  //   console.log(formDetails);

  //   console.log("FORM SUBMITTED");
  //   setFormDetails({});
  //   setFormSubmitted(true);

  //   sendEmail(e);
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    // Error Handling - Empty entries
    for (const [key, value] of Object.entries(formDetails)) {
      if (value === "") {
        console.log(`Key: ${key}, Value: ${value}`);
        toast.error(`Error: ${key} is Empty.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }
    }

    emailjs
      .sendForm(
        "service_biqxxwb",
        "template_l2bne8k",
        form.current,
        "YmkU92pRKRgppSSRt"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Form Submitted", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormDetails({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFormSubmitted(true);
  };

  const form = useRef();

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            // onSubmit={formSubmitHandler}
            onSubmit={sendEmail}
            ref={form}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="user_name"
                value={formDetails.name}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="user_email"
                value={formDetails.email}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, email: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="user_subject"
              value={formDetails.subject}
              onChange={(e) =>
                setFormDetails({ ...formDetails, subject: e.target.value })
              }
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              value={formDetails.message}
              onChange={(e) =>
                setFormDetails({ ...formDetails, message: e.target.value })
              }
            ></textarea>
            {formSubmitted === false ? (
              <>
                <button
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  disabled={formSubmitted}
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let's talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </>
            ) : (
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={formSubmitted}
              >
                Form Submitted
              </button>
            )}
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
