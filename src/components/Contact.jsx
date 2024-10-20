import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1110px] w-11/12 mx-auto my-28 text-center space-y-10">
      <h2 className="secondary-heading">Get In Touch</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="tel" name="phone" placeholder="Your Phone" />
        <textarea name="message" cols={1} rows={3} placeholder="Message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
