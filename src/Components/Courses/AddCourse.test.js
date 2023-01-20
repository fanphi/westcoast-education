import { screen, render } from "@testing-library/react";
import AddCourse from "./AddCourse";

describe("AddCourse component", () => {
  const setup = () => render(<AddCourse />);

  describe("AddCourse page", () => {
    test('has a "Kursnamn" input', () => {
      // Arrange
      setup();
      const courseNameInput = screen.getByLabelText("Kursnamn");

      // Act

      // Assert
      expect(courseNameInput).toBeInTheDocument();
    });
  });
});
