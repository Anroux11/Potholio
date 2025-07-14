"use client";

import React from "react";
import "@ant-design/v5-patch-for-react-19";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useStyles } from "./style/style";

const RegistrationForm = () => {
  // const router = useRouter();
  const { styles } = useStyles();
  return (
    <>
      <div className={styles.splitLeft}>
        <div className={styles.centered}>
          {/* <Image src="img_avatar2.png" alt="Avatar woman"></Image> */}
          <h2>Jane Flex</h2>
          <p>Some text.</p>
        </div>
      </div>

      <div className={styles.splitRight}>
        <div className="centered">
          {/* <Image src="img_avatar.png" alt="Avatar man"></Image> */}
          <h2>John Doe</h2>
          <p>Some text here too.</p>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
