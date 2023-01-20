import { useRef } from "react";
const AddCourse = (props) => {
  const courseNumberRef = useRef();
  const courseTitleRef = useRef();
  const courseLengthRef = useRef();
  const courseDescriptionRef = useRef();
  const courseStartDateRef = useRef();

  const onSaveHandler = (e) => {
    e.preventDefault();

    const course = {
      id: Number((Math.random() * 1000).toFixed(0)),
      courseNumber: Number(courseNumberRef.current.value),
      courseTitle: courseTitleRef.current.value,
      courseLength: courseLengthRef.current.value,
      courseDescription: courseDescriptionRef.current.value,
      courseStartDate: courseStartDateRef.current.value,
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
        ref={courseNumberRef}
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
        ref={courseTitleRef}
        className="add-input"
        required
      />

      <label htmlFor="courseLength" className="add-label">
        Kurslängd
      </label>
      <input
        id="courseLength"
        placeholder=" Kurslängd"
        ref={courseLengthRef}
        className="add-input"
        required
      />

      <label htmlFor="courseStartDate" className="add-label">
        Kursstart
      </label>
      <input
        id="courseStartDate"
        placeholder=" Kursstart"
        ref={courseStartDateRef}
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
        ref={courseDescriptionRef}
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
