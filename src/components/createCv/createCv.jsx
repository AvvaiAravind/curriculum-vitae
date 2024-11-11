import Personal from "./personal.jsx";
import Education from "./education";
import Professional from "./professional";

export function CreateCv({
  education,
  professional,
  addItem,
  deleteItem,
  handleTextEdit,
  /* handlePhotoEdit, */
}) {
  return (
    <div className="create-cv">
      <Personal
        onChange={handleTextEdit} /* onPhotoChange={handlePhotoEdit} */
      />
      <Education
        items={education}
        addItem={addItem}
        deleteItem={deleteItem}
        section="education"
        onChange={handleTextEdit}
      />
      <Professional
        items={professional}
        addItem={addItem}
        deleteItem={deleteItem}
        section="professional"
        onChange={handleTextEdit}
      />
    </div>
  );
}
