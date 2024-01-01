import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Team() {
  return (
    <div id="team" className="px-20 lg:px-48">
      <p className="font-playfair text-center">
        GlobalX was born because we saw a need to change how we approach
        education, entrepreneurship, and technology in Africa and beyond.
        We&apos;re on a mission to make a positive impact and reshape the
        innovation landscape.
      </p>
      <br />
      <br />
      <p className="font-bold text-center text-sm">OUR TEAM</p>
      <br />
      <div className="gap-10 sm:grid grid-cols-2  items-center">
        {employees.map((employee, index) =>
          employeeCard(
            employee.name,
            employee.image,
            employee.alt,
            employee.title,
            employee.socials
          )
        )}
      </div>
    </div>
  );
}

const employees = [
  {
    name: "Sylvia Mukasa",
    image: "/sylvia.png",
    alt: "Sylvia Mukasa",
    title: "Founder and CEO",
    socials: [
      { link: "https://www.twitter.com/sylviamukasa", icon: <FaXTwitter /> },
      {
        link: "https://www.linkedin.com/in/sylviamukasa/",
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    name: "Kimberly Kuya",
    alt: "Kimberly Kuya",
    image: "/kim.jpg",
    title: "Creative Lead",
    socials: [
      {
        link: "https://www.linkedin.com/in/kimberly-kuya/",
        icon: <FaLinkedinIn />,
      },
    ],
  },
];
function employeeCard(name, image, alt, title, socials) {
  return (
    <div className="mb-5 sm:mb-0 flex flex-col sm:flex-row gap-5 items-center justify-center">
      <div className="size-20 sm:mb-8 md:m-0 md:size-32 lg:size-40">
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "100px",
            objectFit: "cover",
          }}
          height={600}
          width={600}
          alt={alt}
          src={image}
        />
      </div>
      <div className="flex flex-col justify-center items-center sm:items-start sm:block">
        <p className="font-playfair font-bold">{name}</p>
        <p className="text-sm">{title}</p>
        <div className="flex gap-1 mt-1">
          {socials.map((social, socialIndex) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={socialIndex}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
