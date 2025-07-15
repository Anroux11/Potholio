'use client';

import "@ant-design/v5-patch-for-react-19";
import Button from "antd/es/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStyles } from "./style/styles";

const Home: React.FC = () => {
  const router = useRouter();
  const { styles } = useStyles();

  return (
    <>
      <div className={styles.page}>
        <div className={styles.logo}>
          <Image src="/AppLogo-Small.png" alt="Potholio Logo" width={150} height={150} />
          <div className={styles.sinceText}>Since 2025</div>
        </div>
        <h1 className={styles.heading}>Welcome to Potholio</h1>
        <p className={styles.subHeading}>
          A simple platform to report potholes wherever you are...
        </p>
        <Button
          type="primary"
          className={styles.orangeButton}
          size="large"
          onClick={() => router.push("/register")}
        >
          Get Started →
        </Button>
        <div className={styles.smallText}>Already a Member?</div>
        <Button
          type="primary"
          className={styles.button}
          size="large"
          onClick={() => router.push("/login")}
        >
          Login →
        </Button>
      </div>
    </>
  )
}

export default Home;