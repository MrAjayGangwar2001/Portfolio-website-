import { useState } from "react";
export default function Skills() {
  const [skill, setSkill] = useState("technical");
  const skills = {
    technical: [
      { name: "HTML", prof: 85 },
      { name: "CSS", prof: 85 },
      { name: "JavaScript", prof: 85 },
      { name: "BootStrap", prof: 85 },
      { name: "React", prof: 70 },
      { name: "Node.js", prof: 70 },
    ],
    soft: [
      { name: "Communication", prof: 50 },
      { name: "Teamwork", prof: 85 },
      { name: "Problem Solving", prof: 70 },
    ],
  };
  const getproflabel = (prof) => {
    if (prof >= 85) return "Expert";
    if (prof >= 70) return "Proficient";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-white-400 to-purple-50 py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-4xl font-bold text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600  bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-xl mt-4 text-gray-600 mx-auto">
            A Comprehensiv overview of my Technical Expertise and Professional
            Skills and Capabilities.
          </p>
        </div>
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg text-semibold transition-all duration-200 ${
              skill === "technical"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600"
                : "hover:indigo-800 text-gray-600"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg text-semibold transition-all duration-200 ${
              skill === "soft"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600"
                : "hover:indigo-800 text-gray-600"
            }`}
          >
            Soft Skills
          </button>
        </div>
        {/* map to show output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[skill].map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                   <span className="text-sm text-gray-700">
                    {getproflabel(skill.prof)}
                    </span> 
                    <span className="text-sm text-gray-700">
                        {skill.prof}%
                    </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full transition-all duration-300"
                        role="progressbar"
                        style={{ width: `${skill.prof}%` }}
                    ></div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-white-400 to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold text-center mb-10">My Skills</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-200">
//             <h1 className="text-3xl font-semibold mb-4">Frontend Developer</h1>
//             <p className="text-lg text-indigo-600">
//               I have a background in computer science and have worked on various
//               projects. I am proficient in HTML, CSS, JavaScript, React, and
//               Node.js.
//             </p>
//           </div>
//           <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow duration-200">
//             <h1 className="text-3xl font-semibold mb-10 text-teal-600">
//               Backend Developer
//             </h1>
//             <p className="text-lg text-rose-600">
//               I have a background in computer science and have worked on various
//               projects. I am proficient in HTML, CSS, JavaScript, React, and
//               Node.js.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
