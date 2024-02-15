import style from "./projects.module.css";

const Projects: React.FC = () => {
 
  return ( 
  <div className={style.projects} id="projects">
    <h3>Projects</h3>

        <div className={style.wrapper}>

            <div className={style.project}>
                <div className={style.image}>
                    <img src="/breathe.mk.svg" alt="breathe mk" />
                </div>
                <div className={style.desc}>
                    <p><b>BREATHE MK</b> - Welcome to our upcoming platform designed to empower the residents of Skopje to report instances of pollution in their city. Our website is currently under construction, but we’re working diligently to create a seamless experience for you. Your feedback and inquiries are highly valued as we strive to make this platform as effective as possible. For any questions or to provide feedback, please feel free to reach out to Marija Salatic, our PO, at marija@revelapps.com.</p>
                    <p className={style.tehnologies}>
                        Tehnologies: 
                        <img src="/Laravel.svg" alt="laravel icon" /> Laravel
                        <img src="/vscode-icons_file-type-css (1).svg" alt="styles icon" /> SASS
                        <img src="/logos_javascript (1).svg" alt="styles icon" /> JavaScript
                    </p>
                </div>
            </div>

            <div className={style.project}>
                <div className={style.desc}>
                <p className={style.alignRight}><b>KRIK WEBSITE</b> - Engineered a cutting-edge web application utilizing Next.js for the renowned non-governmental organization, Crik. This platform optimizes the presentation of the organizations initiatives, fostering international support. While the application is still under development, stay tuned for its public release!</p>
                    <p className={style.tehnologies}>
                        Tehnologies: 
                        <img src="/devicon_nextjs (1).svg" alt="nextjs icon" /> NextJs
                        <img src="/vscode-icons_file-type-typescript-official (1).svg" alt="typescript icon" /> TypeScript
                        <img src="/vscode-icons_file-type-css (1).svg" alt="styles icon" /> SASS
                        </p>
                </div>
                <div className={style.image}>
                    <img src="/krik.svg" alt="krik" />
                </div>
            </div>

            <div className={style.project}>
                <div className={style.image}>
                    <img src="/Marinov Design.svg" alt="marinov design" />
                </div>
                <div className={style.desc}>
                <p className={style.alignRight}><b>MARINOV DESIGN</b> - Engineered an E-Commerce web application tailored for Marinov Design, a thriving business in Ohrid. Leveraging Next.js, the platform amplifies online visibility, ensures secure transactions, and fuels revenue growth.</p>
                    <p className={style.tehnologies}>
                        Tehnologies: 
                        <img src="/devicon_nextjs (1).svg" alt="nextjs icon" /> NextJs
                        <img src="/vscode-icons_file-type-typescript-official (1).svg" alt="typescript icon" /> TypeScript
                        <img src="/vscode-icons_file-type-css (1).svg" alt="styles icon" /> CSS
                        </p>
                </div>
            </div>

            <div className={style.project}>
                <div className={style.desc}>
                    <p className={style.alignRight}><b>STREETARTIST</b> - Welcome to our innovative online platform tailored specifically for street artists. Our platform offers a comprehensive solution for managing earnings and provides a dedicated digital canvas to showcase your exceptional artworks to the world. Experience the convenience and power of this unique platform, meticulously designed for seamless use on mobile devices.</p>
                    <p className={style.tehnologies}>
                        Tehnologies: 
                        <img src="/devicon_html5 (1).svg" alt="nextjs icon" /> HTML5
                        <img src="/vscode-icons_file-type-css (1).svg" alt="styles icon" /> CSS
                        <img src="/logos_javascript (1).svg" alt="javascript icon" /> JavaScript
                        </p>
                </div>
                <div className={style.image}>
                    <img src="/artiststreet.svg" alt="street artist" />
                </div>
            </div>

            <div className={style.project}>
                <div className={style.image}>
                    <img src="/brainsterlabs.svg" alt="brainster labs" />
                </div>
                <div className={style.desc}>
                    <p><b>BRAINSTERLABS</b> - Discover the Brainster Labs website - an online platform where students from all Brainster academies can proudly showcase their projects. Experience this responsive website, meticulously crafted for seamless viewing on mobile devices, tablets, laptops, and desktop computers.</p>
                    <p className={style.tehnologies}>
                        Tehnologies: 
                        <img src="/devicon_html5 (1).svg" alt="nextjs icon" /> HTML5
                        <img src="/vscode-icons_file-type-css (1).svg" alt="styles icon" /> CSS
                        <img src="/logos_javascript (1).svg" alt="javascript icon" /> JavaScript
                        </p>
                </div>
            </div>
        </div>
  </div>
    )
};

export default Projects;