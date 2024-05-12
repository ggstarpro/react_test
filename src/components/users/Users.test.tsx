import { render, screen } from "@testing-library/react"
import Users from "./Users"
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", {
      name: "Users"
    });
    expect(textElement).toBeInTheDocument();
  })

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem")
    expect(users).toHaveLength(2);
  })


  test("renders error", async () => {
    // src/mocks/handlers.tsに記述すると200とコンフリクトするので動的に変更
    server.use(
      rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )

    render(<Users />);
    const error = await screen.findByText("Error")
    expect(error).toBeInTheDocument();
  })
})