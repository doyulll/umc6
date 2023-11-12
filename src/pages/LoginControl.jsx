import React, { useState } from "react";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ color: "white" }}>
      <button
        onClick={handleLoginClick}
        style={{
          margin: "0 10px",
          borderRadius: "15px",
          width: "70px",
          height: "30px",
        }}
      >
        {isLoggedIn ? "로그인" : "로그아웃"}
      </button>
      {isLoggedIn ? "로그아웃 상태입니다." : "환영합니다."}
    </div>
  );
}