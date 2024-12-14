"use client";

import { useState } from "react";

export default function Kiffer() {
  const [kiffes, setKiffes] = useState(0);

  function clickAction() {
    setKiffes(kiffes + 1);
  }

  return (
    <button onClick={clickAction}>
      Je kiffe ta mère et ton Websaillte! <br />({kiffes})
    </button>
  );
}
