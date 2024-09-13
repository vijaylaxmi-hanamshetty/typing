import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const DefaultFooter = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help Center",
      links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms & Conditions"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];

  const socialIcons = [
    { href: "#", icon: BsFacebook },
    { href: "#", icon: BsInstagram },
    { href: "#", icon: BsTwitter },
    { href: "#", icon: BsGithub },
    { href: "#", icon: BsDribbble },
  ];

  return (
    <Footer className="mt-12">
      <div className="w-full bg-black">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          {footerSections.map((section, index) => (
            <div key={index} className="text-white">
              <Footer.Title title={section.title} className="text-white" />
              <Footer.LinkGroup col className="text-white">
                {section.links.map((link, linkIndex) => (
                  <Footer.Link key={linkIndex} href="#">
                    {link}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
          ))}
        </div>
        <hr />
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between text-white">
          <Footer.Copyright href="#" by="TypingCat™" year={2024} className="text-white" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {socialIcons.map((social, iconIndex) => (
              <Footer.Icon key={iconIndex} className="text-white" href={social.href} icon={social.icon} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default DefaultFooter;
