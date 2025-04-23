import Image from "next/image";
import TodoStory from "./TodoStory";
import MyTodoItems from "./MyTodoItem";
import CoupleTodoItems from "./CoupleTodoItme";
import WriteTodoList from "./WriteTodoList";

export default function TodoSection() {
  return (
    <div>
      {/* 인스타 스토리 처럼 */}
      <section className="mb-6">
        <div className="flex flex-row gap-10">
          <TodoStory />
          <TodoStory />
          <TodoStory />
          <TodoStory />
          <TodoStory />
        </div>
      </section>

      {/* 나의 투드 리스트 */}
      <section className="mb-6">
        <MyTodoItems />
      </section>

      {/* 서로의 투드 리스트 */}
      <section className="mb-6">
        <CoupleTodoItems />
      </section>

      {/* 내일 투드 리스트 작성하기 */}
      <section>
        <WriteTodoList />
      </section>
    </div>
  );
}
