import { SampleCv } from "./sampleCv/sampleCv";
import { CreateCv } from "./createCv/createCv";
import { nanoid as uniqid } from "nanoid";
import { useState } from "react";

export function MainContent() {
  const [personal, setPersonal] = useState([
    {
      firstName: "Suresh",
      lastName: "Kumar R",
      title: "Frontend Developer",
      photo: null,
      description:
        "Aspiring Frontend developer with willingness to learn new things",
      phone: "+9197878-12345",
      email: "suresh@gmail.com",
      address: "Shire, Bagend",
    },
  ]);

  const [educational, setEducational] = useState([
    {
      id: uniqid(),
      universityName: "SaiRam Engineering College",
      degree: "M.Sc Computer Science",
      course: "Computer Science",
      fromEducational: "2020",
      toEducational: "2023",
      isOpen: true,
    },
  ]);

  const [professional, setProfessional] = useState([
    {
      id: uniqid(),
      title: "Frontend Developer",
      companyName: "XBI4",
      city: "Panpoli, Tenkasi",
      fromProfessional: "2023",
      toProfessional: "2025",
      description:
        "2 yrs experience at XBI4 with some knowledge of AWS, node.js",
      isOpen: true,
    },
  ]);

  const submitItem = (section, id, index) => {
    if (section === "educational") {
      console.log("edited", id, section, index);
      setEducational((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, isOpen: !item.isOpen } : item
        )
      );
    } else {
      console.log(id, section, index);
      setProfessional((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, isOpen: !item.isOpen } : item
        )
      );
    }
  };
  const editItem = (section, id, index) => {
    if (section === "educational") {
      console.log("edited", id, section, index);
      setEducational((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, isOpen: !item.isOpen } : item
        )
      );
    } else {
      console.log(id, section, index);
      setProfessional((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, isOpen: !item.isOpen } : item
        )
      );
    }
  };

  const addItem = (section) => {
    if (section === "educational") {
      const newItem = {
        id: uniqid(),
        UniversityName: "",
        degree: "",
        course: "",
        fromEducational: "",
        toEducational: "",
        isOpen: true,
      };

      setEducational([...educational, newItem]);
    } else {
      const newItem = {
        id: uniqid(),
        title: "",
        companyName: "",
        city: "",
        fromProfessional: "",
        toProfessional: "",
        description: "",
        isOpen: true,
      };

      setProfessional([...professional, newItem]);
    }
  };

  const deleteItem = (section, id) => {
    if (section === "educational") {
      const newArray = educational.filter((item) => item.id !== id);
      setEducational(newArray);
    } else {
      const newArray = professional.filter((item) => item.id !== id);
      setProfessional(newArray);
    }
  };

  const handleTextEdit = (e, section, index = 0, input) => {
    if (section === "personal") {
      const items = [...personal];
      items[index][input] = e.target.value;
      setPersonal(items);
    } else if (section === "educational") {
      const items = [...educational];
      items[index][input] = e.target.value;
      setEducational(items);
    } else {
      const items = [...professional];
      items[index][input] = e.target.value;
      setProfessional(items);
    }
  };

  /*  const handlePhotoEdit = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const items = [...personal];
    reader.onload = () => {
      items[0].photo = reader.result;
      setPersonal(items);
    };
    reader.readAsDataURL(file);
  }; */

  return (
    <div className="main">
      <CreateCv
        educational={educational}
        professional={professional}
        addItem={addItem}
        deleteItem={deleteItem}
        submitItem={submitItem}
        editItem={editItem}
        handleTextEdit={handleTextEdit}
        personal={personal}
        /*  handlePhotoEdit={handlePhotoEdit} */
      />
      <SampleCv
        personal={personal}
        educational={educational}
        professional={professional}
      />
    </div>
  );
}
