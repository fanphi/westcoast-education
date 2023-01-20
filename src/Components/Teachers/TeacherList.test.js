import { screen, render } from "@testing-library/react";
import TeacherList from "./TeacherList";

describe("TeacherList component", () => {
  const setup = () => render(<TeacherList />);

  describe("TeacherList page", () => {
    test('should have button with text "Lägg till en lärare"', () => {
      // Arrange
      setup();
      const button = screen.getByRole("button", {
        name: /lägg till en lärare/i,
      });

      // Act

      // Assert
      expect(button).toBeInTheDocument();
    });
  });
});
