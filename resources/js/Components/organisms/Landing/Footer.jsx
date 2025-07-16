import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  const socialIcons = [
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaGithub />, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "Changelog"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Blog", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Partners"],
    },
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

  return (
    <footer>
      <div className="w-full bg-white shadow-md p-8 md:p-12 space-y-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold">Taruna Nusantara</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Membentuk karakter bangsa melalui pendidikan yang berkualitas dan
              berintegritas — membuat ilmu lebih mudah dibagikan, dipahami, dan
              diterapkan.
            </p>
            <div className="flex space-x-4 mt-5">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-gray-500 hover:text-black transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom legal section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Taruna Nusantara. All rights reserved.</p>
          <div className="flex space-x-4">
            {legalLinks.map((text) => (
              <a key={text} href="#" className="hover:text-black transition">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
