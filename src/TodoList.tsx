import React from "react";
import { Todo } from "./types";
import TodoItem from "./TodoItem";
// import dayjs from "dayjs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faPersonDigging } from "@fortawesome/free-solid-svg-icons";
// import { twMerge } from "tailwind-merge";

type Props = {
  todos: Todo[];
  updateIsDone: (id: string, value: boolean) => void;
  remove: (id: string) => void;
};

// const num2star = (n: number): string => "★".repeat(4 - n);

const TodoList = (props: Props) => {
  const todos = props.todos;

  // const formattedDate = (date: Date) => {
  //   if (date.getHours() === 0 && date.getMinutes() === 0) {
  //     return dayjs(date).format("YYYY/MM/DD");
  //   }
  //   return dayjs(date).format("YYYY/MM/DD HH:mm");
  // };

  if (todos.length === 0) {
    return (
      <div className="text-red-500">
        現在、登録されているタスクはありません。
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={props.remove}
          updateIsDone={props.updateIsDone}
        />
      ))}
    </div>
  );

  // return (
  //   <div className="space-y-2">
  //     {todos.map((todo) => (
  //       <div
  //         className="flex items-center justify-between rounded border bg-white px-4 py-2 drop-shadow"
  //         key={todo.id}
  //       >
  //         <div
  //           className={twMerge(
  //             "flex items-center",
  //             todo.isDone && " opacity-30"
  //           )}
  //         >
  //           <div>
  //             <input
  //               type="checkbox"
  //               checked={todo.isDone}
  //               onChange={(e) => props.updateIsDone(todo.id, e.target.checked)}
  //               className="mr-1.5 cursor-pointer"
  //             />
  //           </div>
  //           <div>
  //             <FontAwesomeIcon
  //               icon={faPersonDigging}
  //               className="mr-2 text-slate-500"
  //             />
  //           </div>
  //           <div className="mr-3 text-lg font-bold text-slate-700">
  //             {todo.name}
  //           </div>
  //           <div className="mr-3 text-orange-400">
  //             {num2star(todo.priority)}
  //           </div>
  //           {todo.deadline && (
  //             <div className="mr-3 flex items-center text-slate-500">
  //               <div>
  //                 <FontAwesomeIcon icon={faClock} className="mr-1.5 text-sm" />
  //               </div>
  //               <div>{formattedDate(todo.deadline)}</div>
  //             </div>
  //           )}
  //           {todo.isDone && (
  //             <div className="rounded-full bg-slate-700 px-2.5 text-xs font-bold text-white">
  //               完了済み
  //             </div>
  //           )}
  //         </div>
  //         <div>
  //           <button
  //             onClick={() => props.remove(todo.id)}
  //             className="rounded-md bg-slate-200 px-2 py-1 text-sm font-bold text-white hover:bg-red-500"
  //           >
  //             削除
  //           </button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default TodoList;
