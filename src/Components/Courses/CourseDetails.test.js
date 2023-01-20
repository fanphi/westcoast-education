import { screen, render } from "@testing-library/react";
import CourseDetails from "./CourseDetails";

describe("CourseDetails component", () => {
  const setup = () => render(<CourseDetails />);

  describe("CourseDetails page", () => {
    test('should have title "Kursdetaljer"', () => {
      // Arrange
      setup();
      const title = screen.getByRole("heading", {name: /kursdetaljer/i});

      // Act

      // Assert
      expect(title).toBeInTheDocument();
    });
  });

});