import Head from "next/head";
import Image from "next/image";
import Login from "../components/common/Login";
import { useAuth } from "../context/AuthContext";
import UserDashBoard from "../components/common/UserDashBoard";

export default function Home() {
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser);
  return (
    <>
      <Head>
        <title>Project Lister</title>
      </Head>

      {!currentUser && <Login />}
      {currentUser && <UserDashBoard />}
    </>
  );
}
