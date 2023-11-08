// Home component
import React from "react";
import List from "./components/List";

export default function Home() {
  const numberOfLists = 8;

  return (
    <main>
      <div className="text-xl font-bold">Nifty Unfurling Button</div>
      <div className="text-gray-500">
        Sometimes your button has to get a bit funky
      </div>
      <div className="mt-8">
        {[...Array(numberOfLists)].map((_, index) => (
          <List key={index} listNumber={index} />
        ))}
      </div>
    </main>
  );
}
