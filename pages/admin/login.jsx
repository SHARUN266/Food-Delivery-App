import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Login.module.css";
function Login() {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [error, setError] = React.useState(false);
  const router = useRouter();
  const handleClick = async (e) => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>

        <input
          type="text"
          className={styles.input}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong creadentials</span>}
      </div>
    </div>
  );
}

export default Login;
