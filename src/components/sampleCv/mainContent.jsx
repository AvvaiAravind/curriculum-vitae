import ProfessionalContent from "./professionalContent";

export function MainContent({ profile, items }) {
  return (
    <div className="cv-main">
      <div className="section">
        <h2 className="title">Profile</h2>
        <div className="description">{profile[0].description}</div>
      </div>
      <div className="section">
        <h2 className="title">Work Experience</h2>
        <div className="items">
          {items.map((item) => {
            return (
              <ProfessionalContent
                key={item.id}
                title={item.title}
                name={item.companyName}
                city={item.city}
                from={item.from}
                to={item.to}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}