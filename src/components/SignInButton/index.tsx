import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button type="button" 
      className={styles.button}>
      <FaGithub color="#04d361" /> {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.button}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" /> Signin with github
    </button>
  );
}
