import { useContext } from "react";
import ListContext from "../Store/list-context";
const Start = () => {
  const context = useContext(ListContext);
  let course = context.courses;
  return(
    <section>
      <h2>Välkommen till Westcoast Education</h2>
    </section>
  )

}

export default Start;