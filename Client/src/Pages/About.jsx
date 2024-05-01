import React from "react";
import { FaYoutube } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function About() {
  return (
    // About Me
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-md:p-10 pl-20 pr-20 text-center w-full md:m-20">
        <div>
          <h1 className="text-4xl font text-center my-7 font-custom1 border-b-2 border-blue-500 rounded-full">
            About Me
          </h1>
          <div className="text-md dark:text-blue-200 text-blue-900 flex flex-col gap-6">
            <p>
              <span className="font-bold">HI, MY NAME IS </span>
              <span className="underline underline-offset-8 decoration-dotted">
                𝑺𝒉𝒂𝒍𝒊𝒎𝒂𝒓 𝑴𝒆𝒉𝒓𝒂{" "}
              </span>
              ! <br />
              <br />{" "}
              <span className="italic font-semibold">
                Where it all began! Hundreds of in-depth articles designed to
                help you reprogram your limiting beliefs and create a booming,
                digital business. Guaranteed to make you scream: “I can’t
                believe this stuff is free!!”{" "}
              </span>
              <br />
              <br />
              My name is Shalimar Mehra and I have recently completed a Bachelor
              of Computer Application and now pursuing an MCA ( Master of
              Computer Application ), majoring in Computing and Software Systems
              at the University of IGNOU ( Indira Gandhi National Open
              University ). I have a passion for all things technology and
              design, from software engineering to UI/UX. In addition to my love
              of technology and design.
              <br />
              <br />
              I have completed some of courses from : Udemy, Accenture, Tata
              Consultancy Services etc.
              <br />
              Now I'm pursuing a MCA from IGNOU.
              <br />
              <br />
              <h6>
                Need to get in touch with us? Either fill out the
                <a href="/contact-us">
                  <span className="underline underline-offset-4 text-blue-400 font-medium hover:text-blue-700">
                    {" "}
                    form{" "}
                  </span>
                </a>
                with your inquiry or <br className="max-sm:hidden"></br>mail us
                your inquiry on this{" "}
                <a href="mailTo:shalimarmehra01@gmail.com">
                  <span className="underline underline-offset-4 text-blue-400 font-medium hover:text-blue-700">
                    email
                  </span>
                </a>{" "}
                address.
              </h6>
              <br />
              <br />
              <h4 className="flex flex-row justify-center">
                My Own Website&nbsp;
                <CgWebsite className="mt-1 mr-2 text-blue-500" />
                <a href="/">
                  <span className="underline underline-offset-4 text-blue-400 font-medium hover:text-blue-700">
                    Shalimar Mehra
                  </span>
                </a>
              </h4>
              <h4 className="flex flex-row justify-center">
                My YouTube Channel&nbsp;
                <FaYoutube className="mt-1 mr-2 text-blue-500" />
                <a
                  href="https://www.youtube.com/@shalimarmehra"
                  target="_blank"
                >
                  <span className="underline underline-offset-4 text-blue-400 font-medium hover:text-blue-700">
                    Shalimar Mehra
                  </span>
                </a>
              </h4>
            </p>
          </div>
          <br />
          <br />
          {/* Social Media */}
          <section class="flex flex-col md:flex-row bg-blue-100 dark:bg-blue-900 rounded-b-lg mb-10">
            <div class="flex-1 m-6">
              <p class="text-2xl text-center">𝐹𝑜𝓁𝓁𝑜𝓌 𝑀𝑒 𝑜𝓃 :</p>
              <hr class="my-4 border-b border-b-blue-700" />
              <div class="flex flex-wrap justify-center gap-1">
                <a href="https://twitter.com/shalimarmehra" target="_blank">
                  <button class="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <i class="fab fa-twitter mr-1"></i> Twitter ( X )
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/shalimar-mehra/"
                  target="_blank"
                >
                  <button class="bg-[#0077B5] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <i class="fab fa-linkedin mr-1"></i> Linked In
                  </button>
                </a>
                <a
                  href="https://www.instagram.com/shalimarmehra/"
                  target="_blank"
                >
                  <button class="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <i class="fab fa-instagram mr-1"></i> Instagram
                  </button>
                </a>
                <a href="https://github.com/shalimarmehra" target="_blank">
                  <button class="bg-[#171515] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <i class="fab fa-github mr-1"></i> Github
                  </button>
                </a>
                <a
                  href="https://www.facebook.com/shalimar.mehra.7/"
                  target="_blank"
                >
                  <button class="bg-[#1877F2] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <i class="fab fa-facebook mr-1"></i> Facebook
                  </button>
                </a>
                <a
                  href="https://www.youtube.com/@shalimarmehra?sub_confirmation=1"
                  target="_blank"
                >
                  <button class="bg-[#FF0000] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    <i class="fab fa-youtube mr-1"></i> Youtube
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
