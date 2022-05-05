import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
    const notify = () => {
        toast.success('Submitted!')
    }
  return (
    <div className=" h-[1150px] relative ">
      <Toaster  />
      <div className="top-[120px] 2xl:top-[250px] absolute w-[75vw] mx-[12.5vw] h-[40vh]">
        <h1 className="font-bold text-[crimson] text-[40px] 2xl:text-[60px] text-center mt-[30px]">
          Contact
        </h1>
        <div class="container">  
  <form className="rounded-[1rem]" id="contact" action="" method="post">
  
    <fieldset>
      <input className="rounded-[1rem]" placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input className="rounded-[1rem]" placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input className="rounded-[1rem]" placeholder="Your Phone Number" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <textarea className="rounded-[1rem]" placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button className="rounded-[1rem]" name="submit" type="button" id="contact-submit" data-submit="...Sending" onClick={notify}>Submit</button>
    </fieldset>

  </form>
</div>
      </div>
    </div>
  );
}

export default Contact;
