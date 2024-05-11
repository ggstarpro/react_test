import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// TDD: 1度Failed(RedTest)になるようにしてからpassed(Green)になるようにする
describe("Greet", () => {
  test("renders correctly", () => {
    // 挨拶が正常にレンダリングされる
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  })

  describe("Nested", () => {
    // 挨拶と名前を一緒にレンダリンする
    test("renders with a name", () => {
      render(<Greet name="God" />);
      const textElement = screen.getByText("God");
      expect(textElement).toBeInTheDocument();
    })
  })
})