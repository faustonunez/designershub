import React, { useState } from "react";
import emailjs from "emailjs-com";
import formImage from "../assets/form-image.png";
import newslettersGraphic from "../assets/newsletter-graphic.png";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false); // New state to track submission success

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_5yuatnj",
        "template_hkd0wop",
        e.target,
        "GiKL-_cOw87E5Dyr_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("You are now subscribe!");
          setIsSubmitting(false);
          setIsSubmittedSuccessfully(true); // Set submission success to true
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again later.");
          setIsSubmitting(false);
          setIsSubmittedSuccessfully(false); // Ensure this is set to false on failure
        }
      );
  };

  return (
    <div
      id="ContactForm"
      className="lg:flex justify-center items-start bg-[#2F80ED] lg:p-[50px] p-[32px] rounded-md "
    >
      <div className=" h-auto  w-full">
        {isSubmittedSuccessfully ? (
          <div className=" flex justify-center items-center h-full text-center text-lg text-grey-100 w-full  p-4 border  rounded-lg">
            {statusMessage}
          </div>
        ) : (
          <form className="space-y-4 text-grey-100  " onSubmit={sendEmail}>
            <div>
              <h2 className="dark:text-grey-100">
                Subscribe to our Newsletter!
              </h2>
              <p>
                Subscribe to our Newsletter for the latest and greatest learning
                resources delivered directly to your inbox!{" "}
              </p>
            </div>
            <div className="lg:flex lg:items-end ">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-grey-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-3 bg-[#E2EBFF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                />
              </div>
              <div className="w-full lg:ml-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-grey-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-3 bg-[#E2EBFF] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-[50px] lg:ml-3 ml-0 lg:mt-0 mt-4 "
              >
                {isSubmitting ? "Sending..." : "Subscribe"}
              </button>
            </div>
          </form>
        )}
        {!isSubmittedSuccessfully && statusMessage && (
          <div className="text-center text-lg text-red-500 w-full mt-4">
            {statusMessage}
          </div>
        )}
      </div>
      <div className="lg:flex flex justify-center  item-center ">
        <img
          src={newslettersGraphic}
          alt="form image"
          className=" w-1/2 h-fit "
        />
      </div>
    </div>
  );
};
