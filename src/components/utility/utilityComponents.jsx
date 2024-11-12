// import placeholderImage from "../../assets/add.svg";

export function Button({ title, section, id, onClick, index }) {
  return (
    <button
      className="button"
      type="button"
      onClick={() => onClick(section, id, index)}
    >
      {title}
    </button>
  );
}

export function Input({ onChange, title, section, index, id, value }) {
  return (
    <div className="input-box">
      <label htmlFor={id} className="visually-hidden">
        {title}
      </label>
      <input
        type="text"
        placeholder={title}
        onChange={(e) => onChange(e, section, index, id)}
        value={value || ""}
      ></input>
    </div>
  );
}

export function TextArea({ onChange, title, section, index, id, value }) {
  return (
    <div className="textarea-box">
      <label htmlFor={id} className="visually-hidden">
        {title}
      </label>
      <textarea
        id={id}
        placeholder={title}
        onChange={(e) => onChange(e, section, index, id)}
        value={value || ""}
      ></textarea>
    </div>
  );
}

/* export function PhotInput({ onChange }) {
  return (
    <label htmlFor="photo" style={{ cursor: "pointer" }}>
      Choose Photo
      <img src={placeholderImage} alt="Placeholder" width="24" height="24" />
      <input
        type="file"
        accept="image/*"
        id="photo"
        onChange={(e) => onChange(e)}
        style={{ display: "none" }} 
      />
    </label>
  );
} */
