"use client";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="main-section flex justify-between">
          <div className="h-screen w-1/2 bg-red-800 flex justify-center items-center">
            <div className=" ">
              <h1>Our Story Want To Get To Know Us?</h1>
              <p>
                Euismod et duis phasellus varius. Accumsan nunc non congue
                tristique elementum lobortis condimentum?
              </p>
              <p>
                Ut vel vulputate amet nunc. Venenatis vestibulum turpis quam sed
                etiam lorem at. Nisi a tortor vulputate eros posuere ipsum
                eleifend vitae. Dignissim duis vivamus aenean blandit odio
                ullamcorper lacus. Ante habitasse sed elementim volutpat libero
                aliquet.
              </p>
            </div>
          </div>
          <div className="h-screen w-1/2 flex justify-center items-center">
            <div className="main-image  rounded-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
