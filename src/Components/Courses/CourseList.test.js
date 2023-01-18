import { screen, render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  const setup = () => render(<CourseList />);

  describe("CourseList page", () => {
    test('should have a title "Kurslista"', () => {
      // Arrange
      setup();
      const title = screen.getByRole("heading");

      // Act

      // Assert
      expect(title).toHaveTextContent(/kurslista/i);
    });
  });

  describe("CourseList request", () => {
    test("should return a list of courses", async () => {
      // Arrange
      setup();

      const courses = await screen.findAllByRole("listitem");
      // Act

      // Assert
      expect(courses).not.toHaveLength(0);
    });
  });
});
