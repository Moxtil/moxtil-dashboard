import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaRegFile, FaRegComment } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import CandidatesGraph from "../components/LineGraph/CandidatesGraph";

const getUsers = async () => {
  const req = await fetch("https://randomuser.me/api/?results=10");
  return req.json();
};

export default async function page() {
  const users = await getUsers();
  return (
    <>
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
