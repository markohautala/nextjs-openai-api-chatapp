"use client";

import Image from "next/image";
import Chat from "../components/Chat";
import "../styles/styles.css"; // Import the CSS file

export default function Page() {
  return (
    <main className="App">
      <div className="Container">
        <div className="Header">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <p></p>
        </div>
        <Chat />
      </div>
    </main>
  );
}
