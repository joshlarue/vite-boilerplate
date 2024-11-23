import { Outlet } from "react-router-dom";

export default function NormalLayout() {
  return (
    <div className={"bg-background w-screen h-screen text-text"}>
      <header
        className={
          "bg-secondary w-screen flex flex-row-reverse justify-between py-2 px-5 items-center"
        }
      ></header>

      <main className={"flex flex-col gap-10 items-center p-5 pt-10"}>
        {/* <Outlet /> is what lets react-router know where to put the inner layout content */}
        <Outlet />
      </main>

      <footer
        className={"bg-secondary fixed bottom-0 w-full flex justify-around p-2"}
      ></footer>
    </div>
  );
}
