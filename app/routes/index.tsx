import React, { useEffect } from "react";

export default function IndexRoute() {
  useEffect(() => {
    console.log("index.tsx");
  }, []);

  return (
    <div>
      Hello Index Route
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        log
      </button>
    </div>
  );
}
