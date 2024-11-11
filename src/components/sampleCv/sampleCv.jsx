import Main from "./Main";
import SideBar from "./SideBar";
import Header from "./Header";

export function SampleCv({ profile, education, practice }) {
  return (
    <div className="cv-preview">
      <Header profile={profile} />
      <SideBar profile={profile} items={education} />
      <Main profile={profile} items={practice} />
    </div>
  );
}
