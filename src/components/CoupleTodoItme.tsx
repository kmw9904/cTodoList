"use client";

type TodoItem = {
  id: string;
  title: string;
  time: string; // "15:00"
  date: string; // "2025-04-22"
  done: boolean;
  doneAt: string | null;
};

const todos: TodoItem[] = [
  {
    id: "0",
    title: "학교 가기",
    time: "15:00",
    date: "2025-04-22",
    done: false,
    doneAt: "2025-04-22T21:30",
  },
  {
    id: "1",
    title: "수업 듣기",
    time: "20:00",
    date: "2025-04-22",
    done: true,
    doneAt: null,
  },
  {
    id: "2",
    title: "블로그 글쓰기",
    time: "09:00",
    date: "2025-04-22",
    done: false,
    doneAt: null,
  },
  {
    id: "3",
    title: "응가 하기",
    time: "09:00",
    date: "2025-04-22",
    done: false,
    doneAt: null,
  },
];
const name: string = "최시원";
import TodoItems from "./TodoItems";

export default function CoupleTodoItems() {
  const completeTodos = todos.filter((todo) => todo.done === true);
  return (
    <TodoItems
      todos={todos}
      completeTodos={completeTodos}
      name={name}
      reverse={true}
    />
  );
}
