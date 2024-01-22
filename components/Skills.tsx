import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "@/utils/dataSkills"
import SkillsData from "./SkillsData"

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: 'scale(0.9)' }}
      className="relative h-full flex flex-col items-center justify-center py-20 gap-3 overflow-hidden"
    >
      <div className="flex flex-row flex-wrap justify-around items-center gap-5">
        {
          Frontend_skill.map((item, index) =>
            <SkillsData
              key={index}
              index={index}
              src={item.Image}
              name={item.skill_name}
              width={item.width}
              height={item.height}
            />
          )
        }
      </div>

      <div className="flex flex-row flex-wrap justify-around items-center gap-5">
        {
          Backend_skill.map((item, index) =>
            <SkillsData
              key={index}
              index={index}
              src={item.Image}
              name={item.skill_name}
              width={item.width}
              height={item.height}
            />
          )
        }
      </div>

      <div className="flex flex-row flex-wrap justify-around items-center gap-5">
        {
          Full_stack.map((item, index) =>
            <SkillsData
              key={index}
              index={index}
              src={item.Image}
              name={item.skill_name}
              width={item.width}
              height={item.height}
            />
          )
        }
      </div>
      
      <div className="flex flex-row flex-wrap justify-around items-center gap-5">
        {
          Other_skill.map((item, index) =>
            <SkillsData
              key={index}
              index={index}
              src={item.Image}
              name={item.skill_name}
              width={item.width}
              height={item.height}
            />
          )
        }
      </div>
    </section>
  )
}

export default Skills