interface ItemsProps {
    title: string;
    level: number; 
  }
  
  const SkillsItem = ({ title, level }:ItemsProps) => { 
    return (
      <div>
        <div className="flex md:w-[70vh] justify-between items-center">
          <h3>{title}</h3>
          <h3>{level}%</h3>
        </div>
        <div className="flex md:w-[70vh] items-center rounded-md overflow-hidden">
          <div className={`py-1 bg-blue-500`} style={{ width: `${level}%` }}></div> 
          <div className={`py-1 bg-white`} style={{ width: `${100 - level}%` }}></div> 
        </div>
      </div>
    );
  };
  
  export default SkillsItem;
  