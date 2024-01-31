import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h3 className="section--title">My Skills</h3>
        <h2 className="skills--section--heading">Expertises</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section-card">
            <div className="skills--section--img">
              <img src={item.src} alt="Skills" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
            </div>
            <div className="skills--section--description">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
