import { useState } from "react";

export default function FacebookIcon() {
  const [hover, setHover] = useState(false);

  const fillColor = hover ? "#00DA49" : "#004538";

  return (
    <a
      href="https://www.facebook.com/ReBitAI"
      target="_blank"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="16"
        height="25"
        viewBox="0 0 16 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.4007 21.7143V13.5036H12.1567L12.5693 10.3038H9.4007V8.26077C9.4007 7.33436 9.65799 6.70297 10.9866 6.70297L12.681 6.70219V3.8403C12.3878 3.80145 11.3821 3.71436 10.2119 3.71436C7.76893 3.71436 6.09639 5.20549 6.09639 7.94403V10.3039H3.33325V13.5037H6.0963V21.7144L9.4007 21.7143Z"
          fill={fillColor}
        />
      </svg>
    </a>
  );
}
