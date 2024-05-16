import SkillsItem from "../../components/skillsItem";
import imageskills from "../../assets/images/codingskills.png"
const SkillsPage = () => {
  return (
    <>
      <div id="contact" className="py-10 bg-[#dbe4ff] md:flex md:justify-between px-10">
        <div>
          <h1 className="font-bold text-2xl text-slate-500">Skills</h1>
          <SkillsItem title="HTML" level={99}/>
          <SkillsItem title="CSS" level={99}/>
          <SkillsItem title="Javascript" level={95}/>
          <SkillsItem title="React" level={94}/>
          <SkillsItem title="React Native " level={93}/>
          <SkillsItem title="Node Js" level={90}/>
          <SkillsItem title="PHP" level={88}/>
          <SkillsItem title="Laravel" level={85}/>
          <SkillsItem title="Python" level={80}/>
          <SkillsItem title="Flask" level={75}/>
          <SkillsItem title="Flutter" level={50}/>
        </div>
        <div>
          {/* <h1 className="font-bold text-2xl text-slate-500">Contact</h1> */}
          <div>
            <img src={imageskills} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
