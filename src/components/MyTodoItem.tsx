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
    id: '0',
    title: "자전거 타기",
    time: "15:00",
    date: "2025-04-22",
    done: false,
    doneAt: "2025-04-22T21:30",
  },
  {
    id: '1',
    title: "자료구조 공부하기",
    time: "20:00",
    date: "2025-04-22",
    done: true,
    doneAt: null,
  },
  {
    id: '2',
    title: "알고리즘 공부하기",
    time: "09:00",
    date: "2025-04-22",
    done: false,
    doneAt: null,
  },
  {
    id: '3',
    title: "시동이 생일선물 준비하기",
    time: "09:00",
    date: "2025-04-22",
    done: false,
    doneAt: null,
  },
];

import TodoItems from "./TodoItems";
const name: string = "김명원";
export default function MyTodoItems() {
  const completeTodos = todos.filter((todo) => todo.done === true);
  return <TodoItems name={name} todos={todos} completeTodos={completeTodos} />;
}
