import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a href="" className={styles.active}>
              Home
            </a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a href="" className={styles.active}>
              Posts
            </a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
