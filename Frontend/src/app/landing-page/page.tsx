"use Client";

import "@ant-design/v5-patch-for-react-19";
import Button from "antd/es/button";
// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // const { styles } = useStyles();

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      Welcome to the Landing Page of Potholio
      <Button
        type="primary"
        block
        htmlType="button"
        style={{ width: "145px", fontWeight: "bold" }}
        size="large"
        onClick={handleRegister}
      >
        Register
      </Button>
      <Button
        type="primary"
        block
        htmlType="button"
        style={{ width: "145px", fontWeight: "bold" }}
        size="large"
        onClick={handleLogin}
      >
        Login
      </Button>
      {/* add button to login */}
      {/* add button to register */}
    </div>
  );
}
