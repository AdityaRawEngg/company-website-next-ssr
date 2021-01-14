import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation({ styles, navigationLinks }) {
  const router = useRouter();
  const contactUs = () => {
    router.replace(navigationLinks.contactUs.href);
  };
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["nav-logo"]}>
        <img src={navigationLinks.logo.src} alt={navigationLinks.logo.alt} />
      </div>
      <div className={styles["nav-links"]}>
        {navigationLinks.links.map((link) => (
          <Link href={link.href}>
            <a>{link.display}</a>
          </Link>
        ))}
        <button onClick={contactUs}>Contact us</button>
      </div>
    </nav>
  );
}
