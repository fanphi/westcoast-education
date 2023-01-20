import { screen, render } from "@testing-library/react";
import Start from "./Start";

describe("Start component", () => {
  const setup = () => render(<Start />);

  describe("Start page", () => {
    test('should have title "Välkommen till westcoast education"', () => {
      // Arrange
      setup();
      const title = screen.getByRole("heading", {
        name: /Välkommen till Westcoast Education/i,
      });

      // Act

      // Assert
      expect(title).toBeInTheDocument();
    });
  });
});
