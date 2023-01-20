import { useRef } from "react";
const AddCourse = (props) => {
  const courseNumber = useRef();
  const courseTitle = useRef();
  const courseLength = useRef();
  const courseDescription = useRef();
  const courseStartDate = useRef();

  const onSaveHandler = (e) => {
    e.preventDefault();

    const course = {
      id: Number((Math.random() * 1000).toFixed(0)),
      courseNumber: Number(courseNumber.current.value),
      courseTitle: courseTitle.current.value,
      courseLength: courseLength.current.value,
      courseDescription: courseDescription.current.value,
      courseStartDate: courseStartDate.current.value,
    };
    props.onSave(course);
  };

  return (
    <form onSubmit={onSaveHandler} className="form">
      <label htmlFor="courseNumber" className="add-label">
        Kursnummer
      </label>
      <input
        id="courseNumber"
        placeholder=" Kursnummer"
        ref={courseNumber}
        type="number"
        className="add-input"
        required
      />

      <label htmlFor="courseTitle" className="add-label">
        Kursnamn
      </label>
      <input
        id="courseTitle"
        placeholder=" Kursnamn"
        ref={courseTitle}
        className="add-input"
        required
      />

      <label htmlFor="courseLength" className="add-label">
        Kurslängd
      </label>
      <input
        id="courseLength"
        placeholder=" Kurslängd"
        ref={courseLength}
        className="add-input"
        required
      />

      <label htmlFor="courseStartDate" className="add-label">
        Kursstart
      </label>
      <input
        id="courseStartDate"
        placeholder=" Kursstart"
        ref={courseStartDate}
        className="add-input"
        type="date"
        required
      />

      <label htmlFor="courseDescription" className="add-label">
        Kursbeskrivning
      </label>
      <input
        id="courseDescription"
        placeholder=" Kursbeskrivning"
        ref={courseDescription}
        className="add-input"
        required
      />

      <div className="btn-div">
        <button className="save-btn">Spara kurs</button>
      </div>
    </form>
  );
};

export default AddCourse;
