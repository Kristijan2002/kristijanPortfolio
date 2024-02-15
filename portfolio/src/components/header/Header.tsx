import style from "./header.module.css";

const Header: React.FC = () => {
 

  return (
  <header className={style.header}>
    <a href="">Logo</a>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="/Kristijan Maksimovski CV.pdf" download="Kristijan Maksimovski CV" className={style.cv}>
        CV 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 19.4712L10.5775 15.0475L11.4612 14.1488L14.375 17.0625V6.25H15.625V17.0625L18.5375 14.15L19.4225 15.0475L15 19.4712ZM8.26875 23.75C7.69375 23.75 7.21375 23.5575 6.82875 23.1725C6.44292 22.7867 6.25 22.3062 6.25 21.7313V18.7025H7.5V21.7313C7.5 21.9229 7.58 22.0992 7.74 22.26C7.90083 22.42 8.07708 22.5 8.26875 22.5H21.7313C21.9229 22.5 22.0992 22.42 22.26 22.26C22.42 22.0992 22.5 21.9229 22.5 21.7313V18.7025H23.75V21.7313C23.75 22.3062 23.5575 22.7863 23.1725 23.1713C22.7867 23.5571 22.3062 23.75 21.7313 23.75H8.26875Z" fill="white"/>
            </svg>
        </a>
        </li>
    </ul>
  </header>
    )
};

export default Header;