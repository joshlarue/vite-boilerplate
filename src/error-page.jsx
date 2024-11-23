import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className={"flex flex-col gap-10 p-5 text-text items-center text-center"}
    >
      <h1>Oh no!</h1>
      <p>
        An unexpected error has occured. Please contact someone who can help, or
      </p>
      <Link
        to={"/"}
        className={
          "bg-accent w-[10rem] text-background font-bold rounded-md p-2"
        }
      >
        go home
      </Link>
      <div className={"flex flex-col"}>
        <p>Error message:</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
