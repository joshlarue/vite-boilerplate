import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiTransferAlt } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";

export default function NormalLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={"bg-background w-screen h-screen text-text"}>
      <header
        className={
          "bg-secondary w-screen flex flex-row-reverse justify-between py-2 px-5 items-center"
        }
      >
        <p className={"text-xl"}>*username*</p>
        {/* If window location is "/", there is no need for a back button, but in all other cases the back arrow will display */}
        {location.pathname !== "/" && (
          <button onClick={() => navigate(-1)} className={"text-xl font-bold"}>
            ←
          </button>
        )}
      </header>

      <main className={"flex flex-col gap-10 items-center p-5 pt-10"}>
        {/* <Outlet /> is what lets react-router know where to put the inner layout content */}
        <Outlet />
      </main>

      <footer
        className={"bg-secondary fixed bottom-0 w-full flex justify-around p-2"}
      >
        <Link to={"/transfer"} className={"flex flex-col items-center gap-1"}>
          <BiTransferAlt size={"2em"} />
          <p className={"text-xs"}>Transfer</p>
        </Link>

        <Link to={"/"} className={"flex flex-col items-center gap-1"}>
          <IoHome size={"2em"} />
          <p className={"text-xs"}>Home</p>
        </Link>

        <Link to={"/notes"} className={"flex flex-col items-center gap-1"}>
          <GrNotes size={"2em"} />
          <p className={"text-xs"}>Notes</p>
        </Link>
      </footer>
    </div>
  );
}
