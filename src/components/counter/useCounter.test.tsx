import { act, renderHook, waitFor } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter"

describe("useCounter", () => {
  test("should render the intial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0)
  })

  test("intial count test", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10},
    });
    expect(result.current.count).toBe(10)
  })

  test("increment the count", () => {
    const { result } = renderHook(useCounter);
    // 再レンダリングに関するものはactでラップ
    act(() => result.current.increment());
    expect(result.current.count).toBe(1)
  })

  test("increment the count2", async () => {
    const { result } = renderHook(useCounter);
    result.current.increment();
    // waitForというのもある
    await waitFor(() =>  expect(result.current.count).toBe(1))
  })

  test("decrement the count", () => {
    const { result } = renderHook(useCounter);
    // 再レンダリングに関するものはactでラップ
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1)
  })
})