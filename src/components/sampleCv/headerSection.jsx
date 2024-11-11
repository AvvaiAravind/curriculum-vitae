export function HeaderSection({ profile }) {
  return (
    <div className="cv-header">
      <div className="names">
        <div className="name">
          {profile[0].firstName} {profile[0].lastName}
        </div>
        <div className="prof-title">{profile[0].title}</div>
      </div>
    </div>
  );
}
