import styles from "./Header.module.css"
import { Link } from "react-router-dom"


function Header() {
  return (
    <header className={styles.header}>
        <div>
            <Link to="/">
                <img src="divar.svg" className={styles.logo} alt="logo" />
            </Link>
            <span>
                <img src="location.svg" alt="" />
                <p>تهران</p>
            </span>
        </div>
        <div>
            <Link>
                <span>
                    <img src="profile.svg" alt="" />
                    <p>دیوار من</p>
                </span>
            </Link>
            <Link to="/dashboard" className={styles.button}>
                ثبت آگهی
            </Link>
        </div>
    </header>
  )
}

export default Header