import { act, renderHook } from "@testing-library/react";
import { useTodoStore } from "./useTodoStore";
import { TodoFilter } from "./types";
import { useFilteredTodos } from "@/shared/hooks/useFilteredTodos";

const resetStore = () => {
  useTodoStore.setState({
    todos: [],
    filter: "All",
  });
};

describe("useTodoStore and useFilteredTodos", () => {
  beforeEach(() => {
    resetStore();
  });

  it("addTodo", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("Test todo");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].name).toBe("Test todo");
  });

  it("changeFilter", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.changeFilter("Active" as TodoFilter);
    });

    expect(result.current.filter).toBe("Active");
  });

  it("removeCompletedTodos", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("Test todo 1");
      result.current.addTodo("Test todo 2");
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
    });

    act(() => {
      result.current.removeCompletedTodos();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].name).toBe("Test todo 2");
  });

  it("toggleTodo", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("Test todo");
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].isCompleted).toBe(true);

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].isCompleted).toBe(false);
  });

  it("useFilteredTodos", () => {
    const { result: storeResult } = renderHook(() => useTodoStore());
    const { result: filteredResult } = renderHook(() => useFilteredTodos());

    act(() => {
      storeResult.current.addTodo("Active todo");
      storeResult.current.addTodo("Completed todo");
    });

    act(() => {
      storeResult.current.toggleTodo(storeResult.current.todos[1].id);
    });

    act(() => {
      storeResult.current.changeFilter("Completed" as TodoFilter);
    });

    expect(filteredResult.current).toHaveLength(1);
    expect(filteredResult.current[0].name).toBe("Completed todo");
  });

  it("resetStore", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("Test todo 1");
    });

    act(() => {
      resetStore();
    });

    expect(result.current.todos).toHaveLength(0);
    expect(result.current.filter).toBe("All");
  });
});
