"use client";

import Image from "next/image";
import Chat from "components/Chat";

export default function Page() {
  return (
    <main className="App">
      <div className="Container">
        <div className="Header">
          <Image src="/logo.png" alt=""></Image>
          <p></p>
        </div>
        <Chat />
      </div>
    </main>
  )
}
