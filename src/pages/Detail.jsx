import React from "react";

function Detail() {
  const projects = [
    {
      title: "Thailand Culture Website",
      description: "Here is a travel recommendation project for each region of Thailand.",
      image: "/images/culture-app-pic.png",
      link: "https://github.com/Titiwat-Chuyoung/web-thailand-culture.git",
    },
    {
      title: "MIX–MAX Shop Website",
      description: "This is a student uniform online store project.",
      image: "/images/Group 1 (1).png",
      link: "https://github.com/Titiwat-Chuyoung/web-Shop.git",
    },
    {
      title: "TripTove App Figma",
      description: "This is a travel booking website design.",
      image: "/images/Group 1 (2).png",
      link: "https://www.figma.com/design/05EJcb03A1A9lvXow1yCaL/final-test?node-id=2074-868&t=QsfUvk2cdDiv1Agt-1",
    },
    {
      title: "Nova buy App Figma",
      description: "This is a design of the IT equipment ordering application.",
      image: "/images/Group 45.png",
      link: "https://www.figma.com/design/gcuHdlcPQ4DLHNnlXr6r9F/Untitled?node-id=0-1&t=JKBq0z4e3610VNcz-1",
    },
    {
      title: "Book Borrowing App Figma",
      description: "This is the design of the library's book lending application.",
      image: "/images/Group 3158.png",
      link: "https://www.figma.com/design/sSGEqj3NwkOAEJAMRJZelo/Book-Borrowing?node-id=0-1&t=7WXpTQPVGperu48m-1",
    },
    {
      title: "Thailand Culture Website Figma",
      description: "This is a website design that recommends travel in each region of Thailand.",
      image: "/images/culture-app-pic.png",
      link: "https://www.figma.com/design/Wuqm9bgftzj5QGCQ1ONeKo/Untitled?t=KzY8pB8Vg9gemZr7-1",
    },
  ];

  const techStack = [
    {
      category: "Languages",
      skills: ["C", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Tools",
      skills: ["Visual Studio Code", "Git", "MySQL", "XAMPP", "Figma"],
    },
    {
      category: "Frameworks",
      skills: ["React.js", "TailwindCSS", "Express.js", "Node.js"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-6 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Section: Education */}
      <section className="w-full max-w-6xl mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Education and Qualifications</h1>
        <div className="p-6 bg-white shadow rounded text-base md:text-xl space-y-4">
          <p>
            <strong>2022-present:</strong> Songkhla Rajabhat University. Faculty of Science and Technology. Department of Computer Science.
          </p>
          <p>
            <strong>2017-2022:</strong> Trang Industrial and Community Education College. Diploma in Electronics.
          </p>
          <p>
            <strong>2005-2017:</strong> Municipal 1 School (Sangkhawit School). Junior High School.
          </p>
        </div>
      </section>

      {/* Section: Tech Stack */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <div key={index} className="p-4 bg-white shadow rounded">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-500">{stack.category}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {stack.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Projects */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white shadow rounded transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Detail;
