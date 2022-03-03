import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <div>
      <div className={styles.menu_bar}>
        <div>
          <ul>
            <li><Link className={styles.text_style} href="#"><a>Home</a></Link></li>
            <li><Link className={styles.text_style} href="#"><a>Drop Down</a></Link>

              <div className={styles.dropdown_menu}>
                <ul>
                  <li>
                    <a href="#">Main Drop Down</a>

                    <div className={styles.dropdown_menu_1}>
                      <ul>
                        <li><Link className={styles.text_style} href="#"><a>Sub Dropdown 1</a></Link></li>
                        <li><Link className={styles.text_style} href="#"><a >Sub Dropdown 2</a></Link></li>
                        <li><Link className={styles.text_style} href="#"><a>Sub Dropdown 3</a></Link></li>
                        <li><Link className={styles.text_style} href="#"><a>Sub Dropdown 4</a></Link></li>
                        <li><Link className={styles.text_style} href="#"><a>Sub Dropdown 5</a></Link></li>
                      </ul>
                    </div>
                  </li>

                </ul>
              </div>
            </li>
            <li><a className={styles.text_style} href="#">Blog</a>
            </li>
            <li><a className={styles.text_style} href="#">About</a></li>
            <li><a className={styles.text_style} href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Navbar;