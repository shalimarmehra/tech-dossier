import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border-blue-700 footer">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 max-sm:justify-center">
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className="text-bold cursor-none"
              by="Shalimar Mehra™. All Rights Reserved."
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 max-sm:justify-center">
              <Footer.Icon
                className="hover:text-blue-700"
                href="https://www.instagram.com/shalimarmehra/"
                icon={BsInstagram}
              />
              <Footer.Icon
                className="hover:text-blue-700"
                href="https://twitter.com/shalimarmehra"
                icon={BsTwitter}
              />
              <Footer.Icon
                className="hover:text-blue-700"
                href="https://www.linkedin.com/in/shalimar-mehra/"
                icon={BsLinkedin}
              />
              <Footer.Icon
                className="hover:text-blue-700"
                href="https://github.com/shalimarmehra"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
