import { Input } from "../utility/utilityComponents";
import { TextArea } from "../utility/utilityComponents";
import { Button } from "../utility/utilityComponents";

export function Professional({
  items,
  addItem,
  deleteItem,
  submitItem,
  editItem,
  section,
  onChange,
}) {
  return items.length ? (
    <div className="section">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div className="item" key={item.id}>
            <h2 className="title">Work Experience #{index + 1}</h2>
            {item.isOpen ? (
              <>
                <Input
                  title="Job Title"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="title"
                  value={item.title}
                />
                <Input
                  title="Company Name"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="companyName"
                  value={item.companyName}
                />
                <Input
                  title="City"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="city"
                  value={item.city}
                />
                <Input
                  title="From"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="fromProfessional"
                  value={item.fromProfessional}
                />
                <Input
                  title="To"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="toProfessional"
                  value={item.toProfessional}
                />
                <TextArea
                  title="Description"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="description"
                  value={item.description}
                />
                <div className="buttons">
                  <Button
                    title="Submit"
                    onClick={submitItem}
                    section={section}
                    id={item.id}
                    index={index}
                  />
                  {isLast && (
                    <Button title="Add" onClick={addItem} section={section} />
                  )}
                  <Button
                    title="Delete"
                    onClick={deleteItem}
                    section={section}
                    id={item.id}
                  />
                </div>
              </>
            ) : (
              <Button
                title="Edit"
                onClick={editItem}
                section={section}
                id={item.id}
                index={index}
              />
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <div className="section">
      <h2 className="title">Work Experience</h2>
      <Button title="Add" onClick={addItem} section={section} />
    </div>
  );
}
