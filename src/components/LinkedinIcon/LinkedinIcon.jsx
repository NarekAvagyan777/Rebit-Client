import { useState } from "react";

export default function LinkedinIcon() {
  const [hover, setHover] = useState(false);

  const fillColor = hover ? "#00DA49" : "#004538";

  return (
    <a
      href="https://www.linkedin.com/company/rebitai/mycompany/verification/"
      target="_blank"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41932 21.3166V9.70773H3.56069V21.3166H7.41972H7.41932ZM5.49081 8.123C6.83611 8.123 7.67365 7.23157 7.67365 6.11754C7.64847 4.97812 6.83611 4.11157 5.51639 4.11157C4.19577 4.11157 3.33325 4.97812 3.33325 6.11744C3.33325 7.23147 4.17049 8.1229 5.46553 8.1229H5.49051L5.49081 8.123ZM9.55512 21.3166H13.4134V14.8344C13.4134 14.4879 13.4386 14.1405 13.5406 13.893C13.8194 13.1995 14.4542 12.4816 15.5204 12.4816C16.9163 12.4816 17.475 13.5461 17.475 15.1069V21.3166H21.3333V14.6604C21.3333 11.0948 19.4299 9.43556 16.8913 9.43556C14.81 9.43556 13.8959 10.5989 13.3881 11.3912H13.4137V9.70813H9.55532C9.60568 10.7972 9.55502 21.317 9.55502 21.317L9.55512 21.3166Z"
          fill={fillColor}
        />
      </svg>
    </a>
  );
}
