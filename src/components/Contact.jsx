import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" contact w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/43eb4354-49a9-4bc3-966e-1b5295625cd3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below to send me an email -
            truptivijayyadav27@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
