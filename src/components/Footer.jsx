import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <p>© FermerApp</p>
      <ul>
        <Link>
          <li>
            <img
              src="/facebookIcon.svg"
              alt="facebook"
              onClick={() => {
                window.location.href = "https://www.facebook.com/fermerapp";
              }}
            ></img>
          </li>
        </Link>
        <Link>
          <li>
            <img
              src="/instagramIcon.webp"
              onClick={() => {
                window.location.href = "https://www.instagram.com/fermerapp";
              }}
              alt="instagram"
            ></img>
          </li>
        </Link>
        <Link>
          <li>
            <img
              src="/tiktokIcon.webp"
              onClick={() => {
                window.location.href = "https://www.tiktok.com/@fermerapp";
              }}
              alt="tiktok"
            ></img>
          </li>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
