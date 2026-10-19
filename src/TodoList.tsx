// import type { Todo } from "./types";

// type Props = {
//   todos: Todo[];
// };

// const TodoList = (props: Props) => {
//   const todos = props.todos;

//   if (todos.length === 0) {
//     return (
//       <div className="text-red-500">
//         現在、登録されているタスクはありません。
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-1">
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           {todo.name} 優先度: {todo.priority}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;

import React from "react";
import type { Todo } from "./types";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  todos: Todo[];
  updateIsDone: (id: string, value: boolean) => void;
  remove: (id: string) => void;
};

const num2star = (n: number): string => "★".repeat(4 - n);

const formattedDate = (date: Date) => {
  if (date.getHours() === 0 && date.getMinutes() === 0) {
    return dayjs(date).format("YYYY/MM/DD");
  }
  return dayjs(date).format("YYYY/MM/DD HH:mm");
};

const TodoList = (props: Props) => {
  const todos = props.todos;

  if (todos.length === 0) {
    return (
      <div className="text-red-500">
        現在、登録されているタスクはありません。
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <div
          className="flex rounded-md border border-slate-300 bg-white px-4 py-2 drop-shadow"
          key={todo.id}
        >
          <div className="flex w-full items-center justify-between">
            <div
              className={twMerge(
                "flex items-center",
                todo.isDone && "opacity-30",
              )}
            >
              <div>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(e) =>
                    props.updateIsDone(todo.id, e.target.checked)
                  }
                  className="mr-3 cursor-pointer"
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPersonDigging}
                  className="mr-2 text-slate-500"
                />
              </div>
              <div className="mr-3 text-lg font-medium text-slate-700">
                {todo.name}
              </div>
              <div className="mr-3 tracking-tighter text-orange-400">
                {num2star(todo.priority)}
              </div>
              {todo.deadline && (
                <div className="mr-3 flex items-center text-slate-500">
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-0.5 text-sm"
                    />
                  </div>
                  <div className="text-sm">{formattedDate(todo.deadline)}</div>
                </div>
              )}
              {todo.isDone && (
                <div className="rounded-full bg-slate-800 px-3 py-0.5 text-xs font-medium text-white">
                  完了済み
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => props.remove(todo.id)}
                className={twMerge(
                  "rounded-md px-2 py-1 text-sm font-bold",
                  "bg-rose-300 text-white hover:bg-rose-500",
                  "cursor-pointer",
                )}
              >
                削除
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
