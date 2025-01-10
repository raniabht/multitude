import React from "react";
import Header from "./header";
import Nav from "./Nav";



function Error() {
  return (
    < >
    <Header />
    <Nav />
    <div className="h-ful bg-bg w-full flex justify-center">
        <h1 className="text-9xl font-edu">Error 404</h1>
    </div>
    </>
  );
}

export default Error;