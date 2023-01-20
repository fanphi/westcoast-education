import { useRef } from "react";
const AddTeacher = (props) => {
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let socialSecurityNumberRef = useRef();
  let emailRef = useRef();
  let phoneNumberRef = useRef();
  let competenceListRef = useRef();

  const onSaveHandler = (e) => {
    e.preventDefault();

    const teacher = {
      id: Number((Math.random() * 1000).toFixed(0)),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      socialSecurityNumber: socialSecurityNumberRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      competenceList: competenceListRef.current.value.split(" "),
    };
    props.onSave(teacher);
  };
  return (
    <form onSubmit={onSaveHandler} className="form">
      <label htmlFor="firstName" className="add-label">
        Förnamn
      </label>
      <input
        id="firstName"
        placeholder=" Förnamn"
        ref={firstNameRef}
        className="add-input"
        required
      />

      <label htmlFor="lastName" className="add-label">
        Efternamn
      </label>
      <input
        id="lastName"
        placeholder=" Efternamn"
        ref={lastNameRef}
        className="add-input"
        required
      />

      <label htmlFor="socialSecurityNumber" className="add-label">
        Personnummer
      </label>
      <input
        id="socialSecurityNumber"
        placeholder=" Personnummer"
        ref={socialSecurityNumberRef}
        className="add-input"
        required
      />

      <label htmlFor="email" className="add-label">
        Email
      </label>
      <input
        id="email"
        placeholder=" Email"
        ref={emailRef}
        className="add-input"
        required
      />

      <label htmlFor="phoneNumber" className="add-label">
        Mobilnummer
      </label>
      <input
        id="phoneNumber"
        placeholder=" Mobilnummer"
        ref={phoneNumberRef}
        className="add-input"
        required
      />
      <label htmlFor="competenceList" className="add-label">
        Kompetenser:
      </label>
      <input
        id="competenceList"
        placeholder=" Kompetenser"
        ref={competenceListRef}
        className="add-input"
        required
      />

      <div className="btn-div">
        <button className="save-btn">Spara lärare</button>
      </div>
    </form>
  );
};

export default AddTeacher;
