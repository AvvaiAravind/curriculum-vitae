export function ProfessionalContent({
  title,
  name,
  fromProfessional,
  toProfessional,
  city,
  description,
}) {
  return (
    <div className="item">
      <h3 className="sub-title">{title}</h3>
      <div className="job">
        {name} | {fromProfessional} - {toProfessional} | {city}
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
