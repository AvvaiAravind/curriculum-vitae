import { MainContent } from "./mainContent";
import { CvPersoanlInfo } from "./cvPersonalInfo";
import { HeaderSection } from "./headerSection";

export function SampleCv({ personal, educational, professional }) {
  return (
    <div className="cv-preview">
      <HeaderSection personal={personal} />
      <CvPersoanlInfo personal={personal} items={educational} />
      <MainContent personal={personal} items={professional} />
    </div>
  );
}
