import placeholderImage from "../../assets/add.svg";

export function Button({ title, section, id, onClick }) {
  return (
    <button
      className="button"
      type="button"
      onClick={(e) => onClick(e, section, id)}
    >
      {title}
    </button>
  );
}

export function Input({ onChange, title, section, index, id }) {
  return (
    <div className="input-box">
      <label htmlFor={id} className="visually-hidden">
        {title}
      </label>
      <input
        type="text"
        placeholder={title}
        onChange={(e) => onChange(e, section, index, id)}
      ></input>
    </div>
  );
}

export function TextArea({ onChange, title, section, index, id }) {
  return (
    <div className="textarea-box">
      <label htmlFor={id} className="visually-hidden">
        {title}
      </label>
      <textarea
        id={id}
        placeholder={title}
        onChange={(e) => onChange(e, section, index, id)}
      ></textarea>
    </div>
  );
}

export function PhotInput({ onChange }) {
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
}
