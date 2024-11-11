import Input from "../utility/utilityComponents";
import TextArea from "../utility/utilityComponents";
import Button from "../utility/utilityComponents";

export function Professional({
  items,
  addItem,
  deleteItem,
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
            <Input
              title="Job Title"
              onChange={onChange}
              section={section}
              index={index}
              id="title"
            />
            <Input
              title="Company Name"
              onChange={onChange}
              section={section}
              index={index}
              id="companyName"
            />
            <Input
              title="City"
              onChange={onChange}
              section={section}
              index={index}
              id="city"
            />
            <Input
              title="From"
              onChange={onChange}
              section={section}
              index={index}
              id="from"
            />
            <Input
              title="To"
              onChange={onChange}
              section={section}
              index={index}
              id="to"
            />
            <TextArea
              title="Description"
              onChange={onChange}
              section={section}
              index={index}
              id="description"
            />
            <div className="buttons">
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
