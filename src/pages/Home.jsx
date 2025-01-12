import React from "react";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between mt-6 px-4 sm:px-6 lg:px-16">
      {/* รูป */}
      <div className="flex items-center justify-center mx-auto md:mx-[230px] mt-6 md:mt-12">
        <img
          src="/images/Group 2.png" 
          alt="Profile"
          className="max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] h-auto"
        />
      </div>

      {/* เนื้อหา */}
      <div className="text-left mt-6 md:mt-0 p-4 md:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6">About Me</h1>
        <h2 className="text-[rgb(84,96,254)] text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6">
          Web Developer
        </h2>
        <p className="mt-4 text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal indent-4 sm:indent-6 md:indent-8 md:mr-[150px]">
          I have expertise in React.js and Tailwind CSS, along with a strong foundation in HTML, CSS, and JavaScript.
          Additionally, I possess programming skills in C and Python, which enhance my understanding of in-depth software
          development. I have worked on projects such as a travel recommendation website and an e-commerce platform for
          student uniforms, focusing on user-centric design and compatibility across all devices.
        </p>
        <p className="mt-4 text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal indent-4 sm:indent-6 md:indent-8 md:mr-[150px]">
          I am eager to gain real-world experience, contribute to impactful projects, and grow in the field of Front-End
          Development. I am confident that my dedication to continuous learning and ability to collaborate effectively with
          a team will make me a valuable asset to your organization.
        </p>
      </div>
    </div>
  );
}

export default Home;
