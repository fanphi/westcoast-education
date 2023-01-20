import { screen, render } from "@testing-library/react";
import AddTeacher from "./AddTeacher";

describe("AddTeacher component", () => {
  const setup = () => render(<AddTeacher />);

  describe("AddTeacher page", () => {
    test('has a "förnamn" input', () => {
      // Arrange
      setup();
      const firstNameInput = screen.getByLabelText("Förnamn");

      // Act

      // Assert
      expect(firstNameInput).toBeInTheDocument();
    });
  });

});
