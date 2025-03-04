"use client";
import Info from "@/components/Info";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Main/>
        <Info/>
      </div>
    </>
  );
}
