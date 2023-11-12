import React, { useState } from "react";

export function Ad(props) {
  if (!props.clicktf) {
    return null;
  }
  return (
    <div>
      <img
        style={{ width: "100vw" }}
        src="https://i.postimg.cc/4dpjFwkD/Untitled.jpg"
        alt="로고"
      />
    </div>
  );
}

export default function Page() {
  const [click, setClick] = useState(true);

  const handleToggleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <Ad clicktf={click} />
      <button onClick={handleToggleClick}>
        {click ? "광고 안보기" : "광고 보기"}
      </button>
    </div>
  );
}



