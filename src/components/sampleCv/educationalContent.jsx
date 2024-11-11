export function EducationalContent({ degree, name, course, from, to }) {
  return (
    <div className="item">
      <h3 className="sub-title">{degree}</h3>
      <div className="description">
        <ul>
          <li>{name}</li>
          <li>{course}</li>
          <li>
            {from} - {to}
          </li>
        </ul>
      </div>
    </div>
  );
}
