"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  TbReportAnalytics,
  TbUsers,
  TbCalendarMonth,
  TbLogout2,
  TbLayoutDashboard,
} from "react-icons/tb";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//
export default function Navbar() {
  const { data: session, status } = useSession();

  const path = usePathname();
  const [modeOn, setModeOn] = useState(false);

  if (session) {
    return (
      <nav
        className={session ? "navbar" : "navbarOffline"}
        style={modeOn ? { height: "360px" } : { height: "70px" }}
      >
        <section className="userInfo">
          <Image
            src={session?.user?.image}
            alt="profileImg"
            width={60}
            height={60}
          />
          <div>
            <h4>
              <FaHashtag />
              {session?.user?.name}
            </h4>
            <p>{session?.user?.email}</p>
          </div>
        </section>
        <section
          className="links"
          style={modeOn ? { maxHeight: "350px" } : { maxHeight: "0px" }}
        >
          <p>Main Menu</p>

          <Link href={"/"} className={path === "/" ? "active" : ""}>
            <TbLayoutDashboard />
            Dashboard
          </Link>
          <Link
            href={"/analytics"}
            className={path === "/analytics" ? "active" : ""}
          >
            <TbReportAnalytics /> Projects Analytics
          </Link>
          <Link
            href={"/recruitment"}
            className={path === "/recruitment" ? "active" : ""}
          >
            <TbUsers /> Recruitment
          </Link>
          <Link
            href={"/calendar"}
            className={path === "/calendar" ? "active" : ""}
          >
            <TbCalendarMonth /> Calendar
          </Link>
          <button
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logout!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Logging Out!",
                    icon: "success",
                    showConfirmButton: false,
                  });
                  setTimeout(() => {
                    signOut(authOptions);
                  }, 300);
                }
              });
            }}
          >
            <TbLogout2 />
            Logout
          </button>
        </section>
        <div className="menuSide" onClick={() => setModeOn(!modeOn)}>
          {modeOn ? (
            <FaCompressArrowsAlt size={29} />
          ) : (
            <FaExpandArrowsAlt size={29} />
          )}
        </div>
      </nav>
    );
  }
}
