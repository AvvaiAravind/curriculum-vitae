import { Input, Button } from "../utility/utilityComponents";

export function Educational({
  items,
  addItem,
  section,
  deleteItem,
  submitItem,
  editItem,
  onChange,
}) {
  return items.length ? (
    <div className="section">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div className="item" key={item.id}>
            <h2 className="title">Education #{index + 1}</h2>
            {item.isOpen ? (
              <>
                <Input
                  title="Degree"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="degree"
                  value={item.degree}
                />
                <Input
                  title="University or School Name"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="universityName"
                  value={item.universityName}
                />
                <Input
                  title="Course"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="course"
                  value={item.course}
                />
                <Input
                  title="From"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="fromEducational"
                  value={item.fromEducational}
                />
                <Input
                  title="To"
                  onChange={onChange}
                  section={section}
                  index={index}
                  id="toEducational"
                  value={item.toEducational}
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
      <h2 className="title">Education</h2>
      <Button title="Add" onClick={addItem} section={section} />
    </div>
  );
}
