import { logRoles, render, screen } from "@testing-library/react";
import {act} from 'react';
import Skills from "./Skills";
describe("skills", () => {
  const skills = ["HTML", "CSS", "TYPESCRIPT"]

  test("renders correctly", () => {
    render(<Skills skills={skills}/>);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders correctly", () => {
    render(<Skills skills={skills}/>);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });


  test("renders Login button", () => {
    render(<Skills skills={skills}/>);
    const loginButton = screen.getByRole("button", {
      name: "ログイン"
    });
    expect(loginButton).toBeInTheDocument();
  })

  test("logout button is not rendered", () => {
    render(<Skills skills={skills}/>);
    // 存在しない要素
    const logoutButton = screen.queryByRole("button", {
      name: "ログアウト"
    });
    expect(logoutButton).not.toBeInTheDocument();
  })

  test("logout button is eventually rendered", async () => {
    const view = render(<Skills skills={skills}/>);
    // 役割が出るようになる(Roleとかがわかる)
    //logRoles(view.container);
    // DOMが出るようになる
    // screen.debug();


    // 存在しない要素
    const logoutButton = await screen.findByRole("button",
      {
        name: "ログアウト"
      },
      {
        timeout: 2000
      }
    );

    // screen.debug();
    expect(logoutButton).toBeInTheDocument();
  })
})