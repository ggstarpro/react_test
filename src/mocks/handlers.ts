import { rest } from "msw";
export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
      {
        name: "GOD",
      },
      {
        name: "Setu",
      },
    ]))
  }),

];