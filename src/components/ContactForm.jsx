import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const checkErrors = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setIsFormValid(false);
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isFormValid = checkErrors();

    if (isFormValid) {
      emailjs
        .sendForm(
          "service_sh08jlm",
          "template_2v1d89x",
          form.current,
          "3gg23xKscxJolDgyX"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-[#00264B] p-8 mt-10 rounded-xl border-[1px] border-primary flex-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-gray-200 font-bold text-lg">
          Name:
        </label>
        <input
          id="name"
          className="bg-[#00172F] px-4 py-2 rounded-xl text-white caret-primary"
          placeholder="Name"
          name="from_name"
        ></input>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <label className="text-gray-200 font-bold text-lg">Email:</label>
        <input
          className="bg-[#00172F] px-4 py-2 rounded-xl text-white caret-primary"
          placeholder="johndoe@gmail.com"
          type="Email"
          name="from_email"
        ></input>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <label className="text-gray-200 font-bold text-lg">Message:</label>
        <textarea
          className="bg-[#00172F] px-4 py-2 rounded-xl h-40 overflow-y-auto text-white caret-primary"
          placeholder="Message"
          name="message"
        ></textarea>
      </div>
      <button className="btn w-full mt-4 font-medium bg-primary">Send</button>
    </form>
  );
};

export default ContactForm;
