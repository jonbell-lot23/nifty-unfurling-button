import React from "react";
import List1 from "./components/List-1";
import List2 from "./components/List-2";
import List3 from "./components/List-3";
import List4 from "./components/List-4";
import List5 from "./components/List-5";
import List6 from "./components/List-6";
import List7 from "./components/List-7";
import List8 from "./components/List-8";

export default function Home() {
  return (
    <main>
      <div className="text-xl font-bold">Nifty Unfurling Button</div>
      <div className="text-gray-500">
        Sometimes your button has to get a bit funky
      </div>
      <div className="mt-8">
        <List1 listNumber={1} />
        <List2 listNumber={2} />
        <List3 listNumber={3} />
        <List4 listNumber={4} />
      </div>
    </main>
  );
}
