import { Input, TextArea } from "../utility/utilityComponents";

export function Personal({ onChange /* onPhotoChange */ }) {
  const section = "profile";
  return (
    <div className="section">
      <div className="item">
        <h2 className="title">Personal Information</h2>
        <div className="name item">
          <Input
            title="First Name"
            onChange={onChange}
            section={section}
            id="firstName"
          />
          <Input
            title="Last Name"
            onChange={onChange}
            section={section}
            id="lastName"
          />
        </div>
        {/* <PhotoInput
            title='Photo'
            onChange={onPhotoChange}
            section={section}
            id='photo'
          /> */}
        <Input
          title="Professional Title"
          onChange={onChange}
          section={section}
          id="title"
        />
        <TextArea
          title="Desctiption"
          onChange={onChange}
          section={section}
          id="description"
        />

        <Input
          title="Phone Number"
          onChange={onChange}
          section={section}
          id="phone"
        />
        <Input title="Email" onChange={onChange} section={section} id="email" />
        <Input
          title="Address"
          onChange={onChange}
          section={section}
          id="address"
        />
      </div>
    </div>
  );
}
