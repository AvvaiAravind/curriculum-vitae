import { Input, TextArea } from "../utility/utilityComponents";

export function Personal({ onChange /* onPhotoChange */, personal }) {
  const section = "personal";
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
            value={personal[0].firstName}
          />
          <Input
            title="Last Name"
            onChange={onChange}
            section={section}
            id="lastName"
            value={personal[0].lastName}
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
          value={personal[0].title}
        />
        <TextArea
          title="Desctiption"
          onChange={onChange}
          section={section}
          id="description"
          value={personal[0].description}
        />

        <Input
          title="Phone Number"
          onChange={onChange}
          section={section}
          id="phone"
          value={personal[0].phone}
        />
        <Input
          title="Email"
          onChange={onChange}
          section={section}
          id="email"
          value={personal[0].email}
        />
        <Input
          title="Address"
          onChange={onChange}
          section={section}
          id="address"
          value={personal[0].address}
        />
      </div>
    </div>
  );
}
