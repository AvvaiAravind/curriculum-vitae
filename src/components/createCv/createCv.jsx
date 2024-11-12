import { Personal } from "./personal";
import { Educational } from "./educational";
import { Professional } from "./professional";

export function CreateCv({
  educational,
  professional,
  addItem,
  deleteItem,
  submitItem,
  editItem,
  handleTextEdit,
  personal,
  /* handlePhotoEdit, */
}) {
  return (
    <div className="create-cv">
      <Personal
        onChange={handleTextEdit}
        personal={personal} /* onPhotoChange={handlePhotoEdit} */
      />
      <Educational
        items={educational}
        addItem={addItem}
        deleteItem={deleteItem}
        submitItem={submitItem}
        editItem={editItem}
        section="educational"
        onChange={handleTextEdit}
      />
      <Professional
        items={professional}
        addItem={addItem}
        deleteItem={deleteItem}
        submitItem={submitItem}
        editItem={editItem}
        section="professional"
        onChange={handleTextEdit}
      />
    </div>
  );
}
