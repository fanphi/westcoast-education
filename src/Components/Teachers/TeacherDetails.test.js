import { screen, render } from "@testing-library/react";
import TeacherDetails from "./TeacherDetails";

describe("TeacherDetails component", () => {
  const setup = () => render(<TeacherDetails />);

  describe("TeacherDetails page", () => {
    test('should have title "Lärardetaljer"', () => {
      // Arrange
      setup();
      const title = screen.getByRole("heading", { name: /lärardetaljer/i });

      // Act

      // Assert
      expect(title).toBeInTheDocument();
    });
  });
});
