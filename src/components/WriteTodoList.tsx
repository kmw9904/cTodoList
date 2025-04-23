"use client";

type TodosItem = {
  id: string;
  title: string;
  time: string;
  date: string;
  done?: boolean;
  doneAt?: string | null;
};

const today = new Date().toISOString().slice(0, 10);

export const mockTodayTodos: TodosItem[] = [
  {
    id: "1",
    title: "알고리즘 공부하기",
    time: "09:00",
    date: today,
    done: false,
    doneAt: null,
  },
  {
    id: "2",
    title: "시동이 생일선물 준비하기",
    time: "09:00",
    date: today,
    done: false,
    doneAt: null,
  },
  {
    id: "3",
    title: "자전거 타기",
    time: "15:00",
    date: today,
    done: false,
    doneAt: null,
  },
  {
    id: "4",
    title: "자료구조 공부하기",
    time: "20:00",
    date: today,
    done: false,
    doneAt: null,
  },
];

import { Nanum_Pen_Script } from "next/font/google";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const nanumPenScript = Nanum_Pen_Script({ weight: "400", preload: false });

export default function WriteTodoList() {
  // 내일날짜얻기
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);

  const [tomorrowTodos, setTomorrowTodoList] = useState(mockTodayTodos);

  const handleChangeTomorrowTodos = (
    id: string,
    value: string,
    key: keyof TodosItem
  ) => {
    setTomorrowTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, [key]: value } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTomorrowTodoList((todos) => {
      const update = todos.filter((todo) => todo.id !== id);

      if (update.length === 0) {
        alert("그래도 하나는 해봐요 우리!😆");
      }

      return update;
    });
  };

  const handlePlusTodo = () => {
    setTomorrowTodoList([
      ...tomorrowTodos,
      {
        id: uuidv4(),
        title: "",
        time: "",
        date: tomorrowStr,
        done: false,
        doneAt: null,
      },
    ]);
  };

  return (
    <div className={nanumPenScript.className}>
      <div className="bg-gray-50 rounded-2xl p-5 shadow-inner border border-gray-200">
        <div className="text-4xl font-semibold bm-3 mt-3">
          {tomorrowStr} Todos
        </div>
        <ul className="divide-y divide-gray-200 flex flex-col gap-2 m-6">
          {tomorrowTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex flex-grow">
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) =>
                    handleChangeTomorrowTodos(todo.id, e.target.value, "title")
                  }
                />
                <input
                  type="time"
                  value={todo.time}
                  onChange={(e) =>
                    handleChangeTomorrowTodos(todo.id, e.target.value, "time")
                  }
                />
              </div>
              <button
                className="text-2xl text-red-500"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mx-6">
          <button
            className="text-2xl text-green-500"
            onClick={() => handlePlusTodo()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
