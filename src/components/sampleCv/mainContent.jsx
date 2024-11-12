import { ProfessionalContent } from "./professionalContent.jsx";

export function MainContent({ personal, items }) {
  return (
    <div className="cv-main">
      <div className="section">
        <h2 className="title">Personal</h2>
        <div className="description">{personal[0].description}</div>
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
                fromProfessional={item.fromProfessional}
                toProfessional={item.toProfessional}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
