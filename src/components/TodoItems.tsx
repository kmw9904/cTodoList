"use client";

type TodoItem = {
  id: string;
  title: string;
  time: string;
  date: string;
  done: boolean;
  doneAt: string | null;
};

type TodoItemsProps = {
  name: string;
  todos: TodoItem[];
  completeTodos: TodoItem[];
  reverse?: boolean;
};

import { Nanum_Pen_Script } from "next/font/google";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const nanumPenScript = Nanum_Pen_Script({ weight: "400", preload: false });

export default function TodoItems({
  todos,
  completeTodos,
  name,
  reverse,
}: TodoItemsProps) {
  // 시간 얻기
  const nowTime = new Date().toTimeString().slice(0, 5);

  const [todosList, setTodosList] = useState(todos);

  // 체크표시
  const handleToggle = (id: string) => {
    setTodosList((todosArr) =>
      todosArr.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done, doneAt: nowTime } : todo
      )
    );
  };

  const handlePlusTodo = () => {
    setTodosList([
      ...todosList,
      {
        id: uuidv4(),
        title: "",
        time: "",
        date: nowTime,
        done: false,
        doneAt: null,
      },
    ]);
  };

  return (
    <div className={nanumPenScript.className}>
      <div className="bg-gray-50 rounded-2xl p-5 shadow-inner border border-gray-100">
        <div
          className={`flex justify-between ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="text-4xl font-semibold mb-3 mt-3">
            {name}의 Today Todos
          </div>
          {todosList.filter((todo) => todo.done).length === todosList.length ? (
            "오늘 하루 끝 "
          ) : (
            <div>
              완료까지.. {todosList.filter((todo) => todo.done).length} /{" "}
              {todosList.length}
            </div>
          )}
        </div>
        <ul className="divide-y divide-gray-200 flex flex-col gap-2 m-6">
          {todosList.map((todo) => (
            <li
              key={todo.id}
              className={`flex gap-4 ${reverse ? "flex-row-reverse" : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onClick={() => handleToggle(todo.id)}
                className="text-2xl accent-green-500"
                readOnly
              />
              <span
                className={`text-lg ${
                  todo.done
                    ? "line-through decoration-red-500 decoration-2"
                    : ""
                }`}
              >
                {todo.title}

                {/* 오른쪽: 시간 */}
                <span className=" text-gray-500">🕒 {todo.time}</span>
              </span>
              {todo.done && (
                <span className=" text-gray-500">🕒 {todo.doneAt}</span>
              )}
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
        {todosList.filter((todo) => todo.done).length === todosList.length ? (
          reverse ? (
            <div>{name}님이 하루를 마쳤어요 축하해주러 갈까요🎉✨</div>
          ) : (
            <div>오늘은 다 완료 했어요🎉✨</div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
