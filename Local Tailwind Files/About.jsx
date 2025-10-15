import React from "react";
export default function About() {
  return (
    <div className=" min-h-screen w-full bg-gradient-to-b from-white-400 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500  bg-clip-text text-transparent">
            Hi, I am Ajay Gangwar
          </h1>
          <p className="text-xl text-gray-600max-w-3xl mx-auto">
            I am a passionate web developer with a knack for creating
            interactive and user-friendly applications. I love to explore new
            technologies and continuously improve my skills.
          </p>
        </div>
        {/* Profile Image */}
        <div className="relative flex items-center flex justify-center mb-16">
          <div className="absolute insert-0 bg-gradient-to-r from-indigo-600 via-purple-600 to teal rounded-full   ">
            <img
              src="https://picsum.photos/150"
              alt="Profile Image"
              className="rounded-full transform hover:scale-110 transition duration-300 relative shadow-lg z-10 border-4 border-white w-48 h-48 object-cover"
            />
          </div>
          {/* Professional Background */}
          <div className="bg-white shadow-md">
            <h1 className="text-4xl font-semibold mb-10">
              Professional journey
            </h1>
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                I have a background in computer science and have worked on
                various projects ranging from web development to machine
                learning. I am proficient in HTML, CSS, JavaScript, React, and
                Node.js.
              </p>
            </div>
          </div>

          {/* Skill Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-200">
              <h1 className="text-3xl font-semibold mb-4">
                Frontend Developer
              </h1>
              <p className="text-lg text-indigo-600">
                I have a background in computer science and have worked on
                various projects. I am proficient in HTML, CSS, JavaScript,
                React, and Node.js.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-200">
              <h1 className="text-3xl font-semibold mb-10 text-teal-600">
                Backend Developer
              </h1>
              <p className="text-lg text-rose-600">
                I have a background in computer science and have worked on
                various projects. I am proficient in HTML, CSS, JavaScript,
                React, and Node.js.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-200">
              <h1 className="text-3xl font-semibold mb-10 text-purple-600">
                Database
              </h1>
              <p className="text-lg text-gray-600">
                I have a background in computer science and have worked on
                various projects. I am proficient in HTML, CSS, JavaScript,
                React, and Node.js.
              </p>
            </div>
            <div className="bh-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-200">
              <h1 className="text-3xl font-semibold mb-4">Microservices</h1>
              <p className="text-lg text-gray-600">
                I have a background in computer science and have worked on
                various projects. I am proficient in HTML, CSS, JavaScript,
                React, and Node.js.
              </p>
            </div>
          </div>
          {/* Professional Interest */}
          <div className="bg-white shadow-lg p-8 shadow-lg  mb-16">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              Professional Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="space-y-3">
                <h3 className="text-2xl text-indigo-700 font-semibold">
                  Open Source Contribution
                </h3>
                <p className="text-lg text-gray-800">
                  I am Acively contributing to open source Software and Projects
                  on Github.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl text-indigo-700 font-semibold">
                  Tech Community
                </h3>
                <p className="text-lg text-indigo-800">
                  I am acively contributing to open source Software and Projects
                  on Tech Community.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl text-rose-700 font-semibold">
                  Leet Code And Hacker Rank
                </h3>
                <p className="text-lg text-gray-800">
                  I am acively contributing to open source Software and Projects
                  on Leet Code And Hacker Rank.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient to-r from-indigo-700 via-purple-700 t0-teal-700 py-12 px-5 shadow-lg text-white rounded-xl text-center">
            <h3 className="text-4xl text-white-700 font-semibold mb-5">
              Leet Code And Hacker Rank
            </h3>
            <p className="text-xl text-white-800 mx-auto mb-5">
              I am acively contributing to open source Software and Projects on
              Leet Code And Hacker Rank.
            </p>
            <a href="#" className="inline-block bg-white text-indigo-800 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-color duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
