import { screen, render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  const setup = () => render(<CourseList />);

  describe("CourseList page", () => {
    test('should have title "Kurslista"', () => {
      // Arrange
      setup();
      const title = screen.getByRole("heading");

      // Act

      // Assert
      expect(title).toHaveTextContent(/kurslista/i);
    });
  });
});
