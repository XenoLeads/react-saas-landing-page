import logo from "../assets/logo.png";

const footer_links = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Security", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API", "Community"],
  },
];

const Footer = ({ ref }) => {
  return (
    <div className="w-full bg-gray-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto py-12  flex flex-col gap-8 px-8">
        <div className="grid grid-cols-4 items-start gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-start items-center gap-4">
              <img src={logo} alt="Logo" className="h-9 rounded-xl" />
              <h1 className="font-semibold text-xl">XENO</h1>
            </div>
            <p className="text-sm text-neutral-400">Simple, powerful project management for modern teams.</p>
          </div>
          {footer_links.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <p className="font-semibold">{title}</p>
              <ul className="text-sm text-neutral-400 flex flex-col gap-2">
                {links.map(link => (
                  <li key={link}>
                    <a className="cursor-pointer">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="w-full text-gray-800" />
        <p className="text-center text-neutral-400 text-sm">&copy; 2026. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
