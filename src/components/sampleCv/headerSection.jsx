export function HeaderSection({ personal }) {
  return (
    <div className="cv-header">
      {/*    {personal[0].photo ? (
        <img src={personal[0].photo} alt="Avatar" className="photo"></img>
      ) : (
        <div className="photo"></div>
      )} */}
      <div className="names">
        <div className="name">
          {personal[0].firstName} {personal[0].lastName}
        </div>
        <div className="prof-title">{personal[0].title}</div>
      </div>
    </div>
  );
}
