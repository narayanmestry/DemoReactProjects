// import render,screen from RTL
// import describe, it, test from vitest
import { render, screen } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";

import TodoList from "./TodoList";

import * as userService  from "../service/userservice";

vi.mock("../service/userservice", () => ({
  getAllTodos:vi.fn(()=>
    Promise.resolve([{
        "id":1,
        "title":"Learn React",
        "completed":false 
    }])
),
}));
describe("Todolist component test suite", () => {
  it("should Renders Pending task text", () => {
    render(<TodoList />);
    const pendingTextElement = screen.getByText("Pending Task ..");
    expect(pendingTextElement).toBeInTheDocument();
  });
  it()
});
