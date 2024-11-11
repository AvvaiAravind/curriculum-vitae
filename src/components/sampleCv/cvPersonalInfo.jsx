import { EducationalContent } from "./educationalContent";
export function CvPersoanlInfo({ profile, items }) {
  return (
    <div className="cv-sidebar">
      <div className="section">
        <h2 className="title">Contacts</h2>
        <div className="items">
          <div className="item">
            <div className="icon-title">{profile[0].phone}</div>
            <div className="icon-title">{profile[0].email}</div>
            <div className="icon-title">{profile[0].address}</div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="title">Education</h2>
        <div className="items">
          {items.map((item) => (
            <EducationalContent
              key={item.id}
              degree={item.degree}
              name={item.universityName}
              course={item.course}
              from={item.from}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
