import React from 'react'

const Skills = () => {
    const skills = [
  { name: "PHOTOSHOP", percent: 100 },
  { name: "FIGMA", percent: 95 },
  { name: "ADOBE XD", percent: 60 },
  { name: "ADOBE ILLUSTRATOR", percent: 70 },
];

  return (
   <div className="container mx-auto text-white w-[622.5px]">
      
      {/* Title */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold">Design Skill</h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-16 h-[2px] bg-white"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>
            
            <div className="flex justify-between mb-2 text-sm text-black">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-red-500 h-3 rounded-full transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills