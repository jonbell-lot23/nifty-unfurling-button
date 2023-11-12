"use client";
import React from "react";

import dynamic from "next/dynamic";

// Dynamically import the List component with SSR disabled
const List = dynamic(() => import("./components/List"), { ssr: false });

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
