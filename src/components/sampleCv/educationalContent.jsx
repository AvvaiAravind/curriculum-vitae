export function EducationalContent({ degree, name, course, fromEducational, toEducational }) {
  return (
    <div className="item">
      <h3 className="sub-title">{degree}</h3>
      <div className="description">
        <ul>
          <li>{name}</li>
          <li>{course}</li>
          <li>
            {fromEducational} - {toEducational}
          </li>
        </ul>
      </div>
    </div>
  );
}
