import { EducationalContent } from "./educationalContent";
export function CvPersoanlInfo({ personal, items }) {
  return (
    <div className="cv-sidebar">
      <div className="section">
        <h2 className="title">Contacts</h2>
        <div className="items">
          <div className="item">
            <div className="icon-title">{personal[0].phone}</div>
            <div className="icon-title">{personal[0].email}</div>
            <div className="icon-title">{personal[0].address}</div>
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
              fromEducational={item.fromEducational}
              toEducational={item.toEducational}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
