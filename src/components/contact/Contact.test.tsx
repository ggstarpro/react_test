import {render, screen} from '@testing-library/react';
import Contact from "./Contact"

describe("Contact", () => {
  test("renders correctly", () => {
    render(<Contact />)
    const h1Text = screen.getByRole("heading", {
      name: "お問い合わせフォーム"
    });
    expect(h1Text).toBeInTheDocument();

    const h2Text = screen.getByRole("heading", {
      name: "h2お問い合わせフォーム"
    });
    expect(h2Text).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const paragraphText = screen.getByText("全てにフィールドは必須項目です");
    expect(paragraphText).toBeInTheDocument();

    const imgElement = screen.getByAltText("sample alt");
    expect(imgElement).toBeInTheDocument();

    const imgElement2 = screen.getByRole("img");
    expect(imgElement2).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();;
    // inputとlabel
    const nameElement = screen.getByRole("textbox", {
      name: "お名前"
    });
    expect(nameElement).toBeInTheDocument();

    // labelのみ
    const nameElement2 = screen.getByLabelText("お名前")
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("フルネーム")
    expect(nameElement3).toBeInTheDocument();

    // getByDisplayValue: 使うことは少ない
    const nameElement4 = screen.getByDisplayValue("GOD")
    expect(nameElement4).toBeInTheDocument();

    const emailElement = screen.getByRole("textbox", {
      name: "メールアドレス"
    });
    expect(nameElement).toBeInTheDocument();

    const questionElement = screen.getByRole("combobox");
    expect(questionElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  })
})