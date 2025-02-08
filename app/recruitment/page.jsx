"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaRegFile, FaRegComment } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import CandidatesGraph from "../components/LineGraph/CandidatesGraph";
import Page from "../page";
import { useAuth } from "../Firebase/AuthContext";
import { useState, useEffect } from "react";
import Home from "../page";

const randomNum = Math.floor(Math.random * 1294835);
export default function page() {
  const [users, setUser] = useState({});
  const { user } = useAuth();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .then(() => setLoader(false));
  }, []);

  if (!user) {
    return <Home />;
  } else
    return (
      <>
        {loader && <div className="loader"></div>}
        <div className={styles.header}>
          <h1>
            <IoIosPeople size={45} />
            Candidates
          </h1>
        </div>
        <div className={styles.mainContainer}>
          {users?.results?.map((us) => {
            return (
              <div className={styles.userCard} key={us?.postcode}>
                <div className={styles.topCard}>
                  <Image
                    src={us?.picture?.thumbnail}
                    alt={us?.name?.first}
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4>
                      {us?.name?.first} {us?.name?.last}
                    </h4>
                    <p>{us?.email}</p>
                  </div>
                </div>
                <hr />
                <div className={styles.userSocial}>
                  <p>
                    <CiLinkedin size={22} />
                    LinkedIn
                  </p>
                  <div>
                    <p>
                      <FaRegFile /> 3
                    </p>
                    <p>
                      <FaRegComment /> 1
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <CandidatesGraph />
        </div>
      </>
    );
}
