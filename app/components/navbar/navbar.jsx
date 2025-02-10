"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import { useState } from "react";
import logoImg from "../../assets/undraw_coding_joxb.svg";

import {
  TbReportAnalytics,
  TbUsers,
  TbCalendarMonth,
  TbLogout2,
  TbLayoutDashboard,
} from "react-icons/tb";

//
export default function Navbar() {
  const path = usePathname();
  const [modeOn, setModeOn] = useState(false);

  return (
    <nav className="navbar">
      <section className="userInfo">
        <Image src={logoImg} alt="profileImg" width={60} height={60} />
        <div>
          <h4>
            <FaHashtag />
            Username
          </h4>
          <p>user.email@gmail.com</p>
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
                  timer: 500,
                });
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
