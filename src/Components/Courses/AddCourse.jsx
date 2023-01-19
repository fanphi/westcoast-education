import { useRef } from "react";
const AddCourse = (props) => {
  const courseNumber = useRef();
  const courseTitle = useRef();
  const courseLength = useRef();
  const courseDescription = useRef();
  const courseStartDate = useRef();
  console.log((Math.random() * 1000).toFixed(0));
  const onSaveHandler = (e) => {
    e.preventDefault();

    // We should do validation here before we save the vehicle...

    const course = {
      id: (Math.random() * 1000).toFixed(0),
      courseNumber: courseNumber.current.value,
      courseTitle: courseTitle.current.value,
      courseLength: courseLength.current.value,
      courseDescription: courseDescription.current.value,
      courseStartDate: courseStartDate.current.value,
    };
    props.onSave(course);
  };

  return (
    <form onSubmit={onSaveHandler}>
      <div>
        <label htmlFor="courseNumber">Kursnummer</label>
        <input
          id="courseNumber"
          placeholder="Kursnummer"
          ref={courseNumber}
          type="number"
        />
      </div>
      <div>
        <label htmlFor="courseTitle">Kursnamn</label>
        <input id="courseTitle" placeholder="Kursnamn" ref={courseTitle} />
      </div>
      <div>
        <label htmlFor="courseLength">Kurslängd</label>
        <input id="courseLength" placeholder="Kurslängd" ref={courseLength} />
      </div>
      <div>
        <label htmlFor="courseStartDate">Kursstart</label>
        <input
          id="courseStartDate"
          placeholder="Kursstart"
          ref={courseStartDate}
        />
      </div>
      <div>
        <label htmlFor="courseDescription">Kursbeskrivning</label>
        <input
          id="courseDescription"
          placeholder="Kursbeskrivning"
          ref={courseDescription}
        />
      </div>
      <div>
        <button>Spara kurs</button>
      </div>
    </form>
  );
};

export default AddCourse;
