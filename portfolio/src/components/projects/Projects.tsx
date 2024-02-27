import { useState } from "react";
import style from "./projects.module.css";

const Projects: React.FC = () => {

    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
      setHovered(true);
    };
  
    const handleMouseOut = () => {
      setHovered(false);
    };
 
  return ( 
  <div className={style.projects} id="projects">
    <h3>Projects</h3>

        <div className={style.wrapper}>


            <div className={style.project}>
            <div
            className={`${style.image} ${hovered ? style.hovered : ""}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
                    <img src="/breathe.mk.svg" alt="breathe mk" />

                    {hovered && (
              <div className={style.hoverDiv}>
                <h1>BREATHE.MK</h1>
                <div>
                  <a
                    href="https://breathe.ddns.net/"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <circle cx="30" cy="30" r="30" fill="#354634" />
                      <path
                        d="M16.7272 13.2956C17.049 13.6178 17.2298 14.0547 17.2298 14.5102C17.2298 14.9656 17.049 15.4025 16.7272 15.7247C14.9183 17.5336 13.4834 19.681 12.5045 22.0443C11.5255 24.4077 11.0216 26.9407 11.0216 29.4988C11.0216 32.0569 11.5255 34.5899 12.5045 36.9533C13.4834 39.3167 14.9183 41.4641 16.7272 43.2729C17.0401 43.5972 17.2131 44.0314 17.209 44.4821C17.2049 44.9327 17.0239 45.3637 16.7051 45.6822C16.3863 46.0008 15.9551 46.1813 15.5044 46.185C15.0538 46.1887 14.6197 46.0153 14.2957 45.702C5.34674 36.7531 5.34674 22.2445 14.2957 13.2956C14.618 12.9737 15.0548 12.7929 15.5103 12.7929C15.9658 12.7929 16.4049 12.9737 16.7272 13.2956ZM46.7022 13.2956C55.6511 22.2445 55.6511 36.7554 46.7022 45.7043C46.3763 46.0079 45.9454 46.1732 45.5001 46.1654C45.0549 46.1575 44.63 45.9771 44.3151 45.6622C44.0002 45.3473 43.8198 44.9225 43.812 44.4772C43.8041 44.0319 43.9694 43.601 44.273 43.2752C46.0822 41.4663 47.5174 39.3188 48.4965 36.9552C49.4757 34.5916 49.9797 32.0583 49.9797 29.5C49.9797 26.9416 49.4757 24.4083 48.4965 22.0447C47.5174 19.6811 46.0822 17.5336 44.273 15.7247C44.1041 15.5674 43.9687 15.3776 43.8747 15.1668C43.7808 14.956 43.7303 14.7284 43.7262 14.4976C43.7222 14.2668 43.7646 14.0376 43.8511 13.8236C43.9375 13.6096 44.0662 13.4152 44.2294 13.2519C44.3926 13.0887 44.587 12.9601 44.801 12.8736C45.015 12.7872 45.2443 12.7447 45.475 12.7488C45.7058 12.7529 45.9334 12.8034 46.1442 12.8973C46.3551 12.9913 46.5448 13.1267 46.7022 13.2956ZM23.208 19.7764C23.5299 20.0987 23.7106 20.5355 23.7106 20.991C23.7106 21.4465 23.5299 21.8833 23.208 22.2056C22.25 23.1632 21.4901 24.3002 20.9717 25.5516C20.4532 26.803 20.1863 28.1443 20.1863 29.4988C20.1863 30.8533 20.4532 32.1946 20.9717 33.446C21.4901 34.6974 22.25 35.8344 23.208 36.792C23.5116 37.1179 23.6769 37.5488 23.669 37.9941C23.6612 38.4393 23.4808 38.8642 23.1659 39.1791C22.851 39.494 22.4261 39.6744 21.9809 39.6822C21.5356 39.6901 21.1046 39.5248 20.7788 39.2212C18.2004 36.6426 16.7519 33.1454 16.7519 29.4988C16.7519 25.8522 18.2004 22.355 20.7788 19.7764C21.1011 19.4545 21.5379 19.2738 21.9934 19.2738C22.4489 19.2738 22.8857 19.4545 23.208 19.7764ZM40.2236 19.7764C42.802 22.355 44.2506 25.8522 44.2506 29.4988C44.2506 33.1454 42.802 36.6426 40.2236 39.2212C40.0651 39.3854 39.8756 39.5165 39.6659 39.6066C39.4563 39.6968 39.2307 39.7443 39.0025 39.7464C38.7743 39.7485 38.548 39.7051 38.3367 39.6188C38.1254 39.5325 37.9335 39.405 37.772 39.2437C37.6106 39.0824 37.4829 38.8905 37.3963 38.6793C37.3098 38.4681 37.2662 38.2418 37.2681 38.0136C37.27 37.7854 37.3173 37.5599 37.4073 37.3501C37.4972 37.1404 37.6281 36.9507 37.7922 36.792C38.7498 35.8344 39.5094 34.6976 40.0277 33.4464C40.5459 32.1952 40.8127 30.8542 40.8127 29.5C40.8127 28.1457 40.5459 26.8047 40.0277 25.5535C39.5094 24.3023 38.7498 23.1655 37.7922 22.2079C37.4886 21.882 37.3233 21.4511 37.3311 21.0058C37.339 20.5606 37.5194 20.1357 37.8343 19.8208C38.1492 19.5059 38.574 19.3255 39.0193 19.3177C39.4646 19.3098 39.8955 19.4751 40.2213 19.7787M30.5001 26.0625C31.4118 26.0625 32.2861 26.4246 32.9308 27.0693C33.5754 27.7139 33.9376 28.5883 33.9376 29.5C33.9376 30.4116 33.5754 31.286 32.9308 31.9306C32.2861 32.5753 31.4118 32.9375 30.5001 32.9375C29.5884 32.9375 28.7141 32.5753 28.0694 31.9306C27.4247 31.286 27.0626 30.4116 27.0626 29.5C27.0626 28.5883 27.4247 27.7139 28.0694 27.0693C28.7141 26.4246 29.5884 26.0625 30.5001 26.0625Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            )}
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

                    <div className={style.hoverDivRight}>
                    <h1>KRIK</h1>
                    <div>

                    <a href="https://github.com/Kristijan2002/Krik" target="_blank" className={style.link} rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <g filter="url(#filter0_d_77_1093)">
                            <circle cx="34" cy="30" r="30" fill="#354634"/>
                            <path d="M34.5002 6.58337C31.4907 6.58337 28.5107 7.17613 25.7303 8.3278C22.95 9.47947 20.4236 11.1675 18.2956 13.2955C13.9979 17.5932 11.5835 23.4222 11.5835 29.5C11.5835 39.6292 18.1606 48.223 27.2585 51.2709C28.4043 51.4542 28.771 50.7438 28.771 50.125V46.2521C22.4231 47.6271 21.071 43.1813 21.071 43.1813C20.0168 40.523 18.5272 39.8125 18.5272 39.8125C16.4418 38.3917 18.6877 38.4375 18.6877 38.4375C20.9793 38.598 22.1939 40.798 22.1939 40.798C24.1877 44.2813 27.5564 43.25 28.8627 42.7C29.0689 41.2105 29.6647 40.2021 30.3064 39.6292C25.2189 39.0563 19.8793 37.0855 19.8793 28.3542C19.8793 25.8105 20.7502 23.7709 22.2397 22.1438C22.0106 21.5709 21.2085 19.1875 22.4689 16.0938C22.4689 16.0938 24.3939 15.475 28.771 18.4313C30.5814 17.9271 32.5522 17.675 34.5002 17.675C36.4481 17.675 38.4189 17.9271 40.2293 18.4313C44.6064 15.475 46.5314 16.0938 46.5314 16.0938C47.7918 19.1875 46.9897 21.5709 46.7606 22.1438C48.2502 23.7709 49.121 25.8105 49.121 28.3542C49.121 37.1084 43.7585 39.0334 38.6481 39.6063C39.4731 40.3167 40.2293 41.7146 40.2293 43.8459V50.125C40.2293 50.7438 40.596 51.4771 41.7647 51.2709C50.8627 48.2 57.4168 39.6292 57.4168 29.5C57.4168 26.4906 56.8241 23.5106 55.6724 20.7302C54.5207 17.9498 52.8327 15.4235 50.7047 13.2955C48.5767 11.1675 46.0504 9.47947 43.27 8.3278C40.4896 7.17613 37.5096 6.58337 34.5002 6.58337Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_77_1093" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_1093"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_1093" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://krik.vercel.app/" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="#354634"/>
                            <path d="M16.7272 13.2956C17.049 13.6178 17.2298 14.0547 17.2298 14.5102C17.2298 14.9656 17.049 15.4025 16.7272 15.7247C14.9183 17.5336 13.4834 19.681 12.5045 22.0443C11.5255 24.4077 11.0216 26.9407 11.0216 29.4988C11.0216 32.0569 11.5255 34.5899 12.5045 36.9533C13.4834 39.3167 14.9183 41.4641 16.7272 43.2729C17.0401 43.5972 17.2131 44.0314 17.209 44.4821C17.2049 44.9327 17.0239 45.3637 16.7051 45.6822C16.3863 46.0008 15.9551 46.1813 15.5044 46.185C15.0538 46.1887 14.6197 46.0153 14.2957 45.702C5.34674 36.7531 5.34674 22.2445 14.2957 13.2956C14.618 12.9737 15.0548 12.7929 15.5103 12.7929C15.9658 12.7929 16.4049 12.9737 16.7272 13.2956ZM46.7022 13.2956C55.6511 22.2445 55.6511 36.7554 46.7022 45.7043C46.3763 46.0079 45.9454 46.1732 45.5001 46.1654C45.0549 46.1575 44.63 45.9771 44.3151 45.6622C44.0002 45.3473 43.8198 44.9225 43.812 44.4772C43.8041 44.0319 43.9694 43.601 44.273 43.2752C46.0822 41.4663 47.5174 39.3188 48.4965 36.9552C49.4757 34.5916 49.9797 32.0583 49.9797 29.5C49.9797 26.9416 49.4757 24.4083 48.4965 22.0447C47.5174 19.6811 46.0822 17.5336 44.273 15.7247C44.1041 15.5674 43.9687 15.3776 43.8747 15.1668C43.7808 14.956 43.7303 14.7284 43.7262 14.4976C43.7222 14.2668 43.7646 14.0376 43.8511 13.8236C43.9375 13.6096 44.0662 13.4152 44.2294 13.2519C44.3926 13.0887 44.587 12.9601 44.801 12.8736C45.015 12.7872 45.2443 12.7447 45.475 12.7488C45.7058 12.7529 45.9334 12.8034 46.1442 12.8973C46.3551 12.9913 46.5448 13.1267 46.7022 13.2956ZM23.208 19.7764C23.5299 20.0987 23.7106 20.5355 23.7106 20.991C23.7106 21.4465 23.5299 21.8833 23.208 22.2056C22.25 23.1632 21.4901 24.3002 20.9717 25.5516C20.4532 26.803 20.1863 28.1443 20.1863 29.4988C20.1863 30.8533 20.4532 32.1946 20.9717 33.446C21.4901 34.6974 22.25 35.8344 23.208 36.792C23.5116 37.1179 23.6769 37.5488 23.669 37.9941C23.6612 38.4393 23.4808 38.8642 23.1659 39.1791C22.851 39.494 22.4261 39.6744 21.9809 39.6822C21.5356 39.6901 21.1046 39.5248 20.7788 39.2212C18.2004 36.6426 16.7519 33.1454 16.7519 29.4988C16.7519 25.8522 18.2004 22.355 20.7788 19.7764C21.1011 19.4545 21.5379 19.2738 21.9934 19.2738C22.4489 19.2738 22.8857 19.4545 23.208 19.7764ZM40.2236 19.7764C42.802 22.355 44.2506 25.8522 44.2506 29.4988C44.2506 33.1454 42.802 36.6426 40.2236 39.2212C40.0651 39.3854 39.8756 39.5165 39.6659 39.6066C39.4563 39.6968 39.2307 39.7443 39.0025 39.7464C38.7743 39.7485 38.548 39.7051 38.3367 39.6188C38.1254 39.5325 37.9335 39.405 37.772 39.2437C37.6106 39.0824 37.4829 38.8905 37.3963 38.6793C37.3098 38.4681 37.2662 38.2418 37.2681 38.0136C37.27 37.7854 37.3173 37.5599 37.4073 37.3501C37.4972 37.1404 37.6281 36.9507 37.7922 36.792C38.7498 35.8344 39.5094 34.6976 40.0277 33.4464C40.5459 32.1952 40.8127 30.8542 40.8127 29.5C40.8127 28.1457 40.5459 26.8047 40.0277 25.5535C39.5094 24.3023 38.7498 23.1655 37.7922 22.2079C37.4886 21.882 37.3233 21.4511 37.3311 21.0058C37.339 20.5606 37.5194 20.1357 37.8343 19.8208C38.1492 19.5059 38.574 19.3255 39.0193 19.3177C39.4646 19.3098 39.8955 19.4751 40.2213 19.7787M30.5001 26.0625C31.4118 26.0625 32.2861 26.4246 32.9308 27.0693C33.5754 27.7139 33.9376 28.5883 33.9376 29.5C33.9376 30.4116 33.5754 31.286 32.9308 31.9306C32.2861 32.5753 31.4118 32.9375 30.5001 32.9375C29.5884 32.9375 28.7141 32.5753 28.0694 31.9306C27.4247 31.286 27.0626 30.4116 27.0626 29.5C27.0626 28.5883 27.4247 27.7139 28.0694 27.0693C28.7141 26.4246 29.5884 26.0625 30.5001 26.0625Z" fill="white"/>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
        
            </div>

            <div className={style.project}>
                <div className={style.image}>
                    <img src="/Marinov Design.svg" alt="marinov design" />

                    <div className={style.hoverDiv}>
                    <h1>MARINOV DESIGN</h1>
                    <div>

                    <a href="https://github.com/Kristijan2002/marinov" target="_blank" className={style.link} rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <g filter="url(#filter0_d_77_1093)">
                            <circle cx="34" cy="30" r="30" fill="#354634"/>
                            <path d="M34.5002 6.58337C31.4907 6.58337 28.5107 7.17613 25.7303 8.3278C22.95 9.47947 20.4236 11.1675 18.2956 13.2955C13.9979 17.5932 11.5835 23.4222 11.5835 29.5C11.5835 39.6292 18.1606 48.223 27.2585 51.2709C28.4043 51.4542 28.771 50.7438 28.771 50.125V46.2521C22.4231 47.6271 21.071 43.1813 21.071 43.1813C20.0168 40.523 18.5272 39.8125 18.5272 39.8125C16.4418 38.3917 18.6877 38.4375 18.6877 38.4375C20.9793 38.598 22.1939 40.798 22.1939 40.798C24.1877 44.2813 27.5564 43.25 28.8627 42.7C29.0689 41.2105 29.6647 40.2021 30.3064 39.6292C25.2189 39.0563 19.8793 37.0855 19.8793 28.3542C19.8793 25.8105 20.7502 23.7709 22.2397 22.1438C22.0106 21.5709 21.2085 19.1875 22.4689 16.0938C22.4689 16.0938 24.3939 15.475 28.771 18.4313C30.5814 17.9271 32.5522 17.675 34.5002 17.675C36.4481 17.675 38.4189 17.9271 40.2293 18.4313C44.6064 15.475 46.5314 16.0938 46.5314 16.0938C47.7918 19.1875 46.9897 21.5709 46.7606 22.1438C48.2502 23.7709 49.121 25.8105 49.121 28.3542C49.121 37.1084 43.7585 39.0334 38.6481 39.6063C39.4731 40.3167 40.2293 41.7146 40.2293 43.8459V50.125C40.2293 50.7438 40.596 51.4771 41.7647 51.2709C50.8627 48.2 57.4168 39.6292 57.4168 29.5C57.4168 26.4906 56.8241 23.5106 55.6724 20.7302C54.5207 17.9498 52.8327 15.4235 50.7047 13.2955C48.5767 11.1675 46.0504 9.47947 43.27 8.3278C40.4896 7.17613 37.5096 6.58337 34.5002 6.58337Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_77_1093" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_1093"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_1093" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </a>
                    </div>
                </div>
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

                    <div className={style.hoverDivRight}>
                    <h1>STREETARTIST</h1>
                    <div>

                    <a href="https://github.com/Kristijan2002/BrainsterLabs/tree/Project-02-StreetARTists" target="_blank" rel="noopener" className={style.link}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <g filter="url(#filter0_d_77_1093)">
                            <circle cx="34" cy="30" r="30" fill="#354634"/>
                            <path d="M34.5002 6.58337C31.4907 6.58337 28.5107 7.17613 25.7303 8.3278C22.95 9.47947 20.4236 11.1675 18.2956 13.2955C13.9979 17.5932 11.5835 23.4222 11.5835 29.5C11.5835 39.6292 18.1606 48.223 27.2585 51.2709C28.4043 51.4542 28.771 50.7438 28.771 50.125V46.2521C22.4231 47.6271 21.071 43.1813 21.071 43.1813C20.0168 40.523 18.5272 39.8125 18.5272 39.8125C16.4418 38.3917 18.6877 38.4375 18.6877 38.4375C20.9793 38.598 22.1939 40.798 22.1939 40.798C24.1877 44.2813 27.5564 43.25 28.8627 42.7C29.0689 41.2105 29.6647 40.2021 30.3064 39.6292C25.2189 39.0563 19.8793 37.0855 19.8793 28.3542C19.8793 25.8105 20.7502 23.7709 22.2397 22.1438C22.0106 21.5709 21.2085 19.1875 22.4689 16.0938C22.4689 16.0938 24.3939 15.475 28.771 18.4313C30.5814 17.9271 32.5522 17.675 34.5002 17.675C36.4481 17.675 38.4189 17.9271 40.2293 18.4313C44.6064 15.475 46.5314 16.0938 46.5314 16.0938C47.7918 19.1875 46.9897 21.5709 46.7606 22.1438C48.2502 23.7709 49.121 25.8105 49.121 28.3542C49.121 37.1084 43.7585 39.0334 38.6481 39.6063C39.4731 40.3167 40.2293 41.7146 40.2293 43.8459V50.125C40.2293 50.7438 40.596 51.4771 41.7647 51.2709C50.8627 48.2 57.4168 39.6292 57.4168 29.5C57.4168 26.4906 56.8241 23.5106 55.6724 20.7302C54.5207 17.9498 52.8327 15.4235 50.7047 13.2955C48.5767 11.1675 46.0504 9.47947 43.27 8.3278C40.4896 7.17613 37.5096 6.58337 34.5002 6.58337Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_77_1093" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_1093"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_1093" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://streetartist.netlify.app/" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="#354634"/>
                            <path d="M16.7272 13.2956C17.049 13.6178 17.2298 14.0547 17.2298 14.5102C17.2298 14.9656 17.049 15.4025 16.7272 15.7247C14.9183 17.5336 13.4834 19.681 12.5045 22.0443C11.5255 24.4077 11.0216 26.9407 11.0216 29.4988C11.0216 32.0569 11.5255 34.5899 12.5045 36.9533C13.4834 39.3167 14.9183 41.4641 16.7272 43.2729C17.0401 43.5972 17.2131 44.0314 17.209 44.4821C17.2049 44.9327 17.0239 45.3637 16.7051 45.6822C16.3863 46.0008 15.9551 46.1813 15.5044 46.185C15.0538 46.1887 14.6197 46.0153 14.2957 45.702C5.34674 36.7531 5.34674 22.2445 14.2957 13.2956C14.618 12.9737 15.0548 12.7929 15.5103 12.7929C15.9658 12.7929 16.4049 12.9737 16.7272 13.2956ZM46.7022 13.2956C55.6511 22.2445 55.6511 36.7554 46.7022 45.7043C46.3763 46.0079 45.9454 46.1732 45.5001 46.1654C45.0549 46.1575 44.63 45.9771 44.3151 45.6622C44.0002 45.3473 43.8198 44.9225 43.812 44.4772C43.8041 44.0319 43.9694 43.601 44.273 43.2752C46.0822 41.4663 47.5174 39.3188 48.4965 36.9552C49.4757 34.5916 49.9797 32.0583 49.9797 29.5C49.9797 26.9416 49.4757 24.4083 48.4965 22.0447C47.5174 19.6811 46.0822 17.5336 44.273 15.7247C44.1041 15.5674 43.9687 15.3776 43.8747 15.1668C43.7808 14.956 43.7303 14.7284 43.7262 14.4976C43.7222 14.2668 43.7646 14.0376 43.8511 13.8236C43.9375 13.6096 44.0662 13.4152 44.2294 13.2519C44.3926 13.0887 44.587 12.9601 44.801 12.8736C45.015 12.7872 45.2443 12.7447 45.475 12.7488C45.7058 12.7529 45.9334 12.8034 46.1442 12.8973C46.3551 12.9913 46.5448 13.1267 46.7022 13.2956ZM23.208 19.7764C23.5299 20.0987 23.7106 20.5355 23.7106 20.991C23.7106 21.4465 23.5299 21.8833 23.208 22.2056C22.25 23.1632 21.4901 24.3002 20.9717 25.5516C20.4532 26.803 20.1863 28.1443 20.1863 29.4988C20.1863 30.8533 20.4532 32.1946 20.9717 33.446C21.4901 34.6974 22.25 35.8344 23.208 36.792C23.5116 37.1179 23.6769 37.5488 23.669 37.9941C23.6612 38.4393 23.4808 38.8642 23.1659 39.1791C22.851 39.494 22.4261 39.6744 21.9809 39.6822C21.5356 39.6901 21.1046 39.5248 20.7788 39.2212C18.2004 36.6426 16.7519 33.1454 16.7519 29.4988C16.7519 25.8522 18.2004 22.355 20.7788 19.7764C21.1011 19.4545 21.5379 19.2738 21.9934 19.2738C22.4489 19.2738 22.8857 19.4545 23.208 19.7764ZM40.2236 19.7764C42.802 22.355 44.2506 25.8522 44.2506 29.4988C44.2506 33.1454 42.802 36.6426 40.2236 39.2212C40.0651 39.3854 39.8756 39.5165 39.6659 39.6066C39.4563 39.6968 39.2307 39.7443 39.0025 39.7464C38.7743 39.7485 38.548 39.7051 38.3367 39.6188C38.1254 39.5325 37.9335 39.405 37.772 39.2437C37.6106 39.0824 37.4829 38.8905 37.3963 38.6793C37.3098 38.4681 37.2662 38.2418 37.2681 38.0136C37.27 37.7854 37.3173 37.5599 37.4073 37.3501C37.4972 37.1404 37.6281 36.9507 37.7922 36.792C38.7498 35.8344 39.5094 34.6976 40.0277 33.4464C40.5459 32.1952 40.8127 30.8542 40.8127 29.5C40.8127 28.1457 40.5459 26.8047 40.0277 25.5535C39.5094 24.3023 38.7498 23.1655 37.7922 22.2079C37.4886 21.882 37.3233 21.4511 37.3311 21.0058C37.339 20.5606 37.5194 20.1357 37.8343 19.8208C38.1492 19.5059 38.574 19.3255 39.0193 19.3177C39.4646 19.3098 39.8955 19.4751 40.2213 19.7787M30.5001 26.0625C31.4118 26.0625 32.2861 26.4246 32.9308 27.0693C33.5754 27.7139 33.9376 28.5883 33.9376 29.5C33.9376 30.4116 33.5754 31.286 32.9308 31.9306C32.2861 32.5753 31.4118 32.9375 30.5001 32.9375C29.5884 32.9375 28.7141 32.5753 28.0694 31.9306C27.4247 31.286 27.0626 30.4116 27.0626 29.5C27.0626 28.5883 27.4247 27.7139 28.0694 27.0693C28.7141 26.4246 29.5884 26.0625 30.5001 26.0625Z" fill="white"/>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
               
            </div>

            <div className={style.project}>
                <div className={style.image}>
                    <img src="/brainsterlabs.svg" alt="brainster labs" />

                    <div className={style.hoverDiv}>
                    <h1>BRAINSTERLABS</h1>
                    <div>

                    <a href="https://github.com/Kristijan2002/BrainsterLabs" target="_blank" className={style.link} rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <g filter="url(#filter0_d_77_1093)">
                            <circle cx="34" cy="30" r="30" fill="#354634"/>
                            <path d="M34.5002 6.58337C31.4907 6.58337 28.5107 7.17613 25.7303 8.3278C22.95 9.47947 20.4236 11.1675 18.2956 13.2955C13.9979 17.5932 11.5835 23.4222 11.5835 29.5C11.5835 39.6292 18.1606 48.223 27.2585 51.2709C28.4043 51.4542 28.771 50.7438 28.771 50.125V46.2521C22.4231 47.6271 21.071 43.1813 21.071 43.1813C20.0168 40.523 18.5272 39.8125 18.5272 39.8125C16.4418 38.3917 18.6877 38.4375 18.6877 38.4375C20.9793 38.598 22.1939 40.798 22.1939 40.798C24.1877 44.2813 27.5564 43.25 28.8627 42.7C29.0689 41.2105 29.6647 40.2021 30.3064 39.6292C25.2189 39.0563 19.8793 37.0855 19.8793 28.3542C19.8793 25.8105 20.7502 23.7709 22.2397 22.1438C22.0106 21.5709 21.2085 19.1875 22.4689 16.0938C22.4689 16.0938 24.3939 15.475 28.771 18.4313C30.5814 17.9271 32.5522 17.675 34.5002 17.675C36.4481 17.675 38.4189 17.9271 40.2293 18.4313C44.6064 15.475 46.5314 16.0938 46.5314 16.0938C47.7918 19.1875 46.9897 21.5709 46.7606 22.1438C48.2502 23.7709 49.121 25.8105 49.121 28.3542C49.121 37.1084 43.7585 39.0334 38.6481 39.6063C39.4731 40.3167 40.2293 41.7146 40.2293 43.8459V50.125C40.2293 50.7438 40.596 51.4771 41.7647 51.2709C50.8627 48.2 57.4168 39.6292 57.4168 29.5C57.4168 26.4906 56.8241 23.5106 55.6724 20.7302C54.5207 17.9498 52.8327 15.4235 50.7047 13.2955C48.5767 11.1675 46.0504 9.47947 43.27 8.3278C40.4896 7.17613 37.5096 6.58337 34.5002 6.58337Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_77_1093" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_1093"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_1093" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://brainsterlabsweb.netlify.app/" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="#354634"/>
                            <path d="M16.7272 13.2956C17.049 13.6178 17.2298 14.0547 17.2298 14.5102C17.2298 14.9656 17.049 15.4025 16.7272 15.7247C14.9183 17.5336 13.4834 19.681 12.5045 22.0443C11.5255 24.4077 11.0216 26.9407 11.0216 29.4988C11.0216 32.0569 11.5255 34.5899 12.5045 36.9533C13.4834 39.3167 14.9183 41.4641 16.7272 43.2729C17.0401 43.5972 17.2131 44.0314 17.209 44.4821C17.2049 44.9327 17.0239 45.3637 16.7051 45.6822C16.3863 46.0008 15.9551 46.1813 15.5044 46.185C15.0538 46.1887 14.6197 46.0153 14.2957 45.702C5.34674 36.7531 5.34674 22.2445 14.2957 13.2956C14.618 12.9737 15.0548 12.7929 15.5103 12.7929C15.9658 12.7929 16.4049 12.9737 16.7272 13.2956ZM46.7022 13.2956C55.6511 22.2445 55.6511 36.7554 46.7022 45.7043C46.3763 46.0079 45.9454 46.1732 45.5001 46.1654C45.0549 46.1575 44.63 45.9771 44.3151 45.6622C44.0002 45.3473 43.8198 44.9225 43.812 44.4772C43.8041 44.0319 43.9694 43.601 44.273 43.2752C46.0822 41.4663 47.5174 39.3188 48.4965 36.9552C49.4757 34.5916 49.9797 32.0583 49.9797 29.5C49.9797 26.9416 49.4757 24.4083 48.4965 22.0447C47.5174 19.6811 46.0822 17.5336 44.273 15.7247C44.1041 15.5674 43.9687 15.3776 43.8747 15.1668C43.7808 14.956 43.7303 14.7284 43.7262 14.4976C43.7222 14.2668 43.7646 14.0376 43.8511 13.8236C43.9375 13.6096 44.0662 13.4152 44.2294 13.2519C44.3926 13.0887 44.587 12.9601 44.801 12.8736C45.015 12.7872 45.2443 12.7447 45.475 12.7488C45.7058 12.7529 45.9334 12.8034 46.1442 12.8973C46.3551 12.9913 46.5448 13.1267 46.7022 13.2956ZM23.208 19.7764C23.5299 20.0987 23.7106 20.5355 23.7106 20.991C23.7106 21.4465 23.5299 21.8833 23.208 22.2056C22.25 23.1632 21.4901 24.3002 20.9717 25.5516C20.4532 26.803 20.1863 28.1443 20.1863 29.4988C20.1863 30.8533 20.4532 32.1946 20.9717 33.446C21.4901 34.6974 22.25 35.8344 23.208 36.792C23.5116 37.1179 23.6769 37.5488 23.669 37.9941C23.6612 38.4393 23.4808 38.8642 23.1659 39.1791C22.851 39.494 22.4261 39.6744 21.9809 39.6822C21.5356 39.6901 21.1046 39.5248 20.7788 39.2212C18.2004 36.6426 16.7519 33.1454 16.7519 29.4988C16.7519 25.8522 18.2004 22.355 20.7788 19.7764C21.1011 19.4545 21.5379 19.2738 21.9934 19.2738C22.4489 19.2738 22.8857 19.4545 23.208 19.7764ZM40.2236 19.7764C42.802 22.355 44.2506 25.8522 44.2506 29.4988C44.2506 33.1454 42.802 36.6426 40.2236 39.2212C40.0651 39.3854 39.8756 39.5165 39.6659 39.6066C39.4563 39.6968 39.2307 39.7443 39.0025 39.7464C38.7743 39.7485 38.548 39.7051 38.3367 39.6188C38.1254 39.5325 37.9335 39.405 37.772 39.2437C37.6106 39.0824 37.4829 38.8905 37.3963 38.6793C37.3098 38.4681 37.2662 38.2418 37.2681 38.0136C37.27 37.7854 37.3173 37.5599 37.4073 37.3501C37.4972 37.1404 37.6281 36.9507 37.7922 36.792C38.7498 35.8344 39.5094 34.6976 40.0277 33.4464C40.5459 32.1952 40.8127 30.8542 40.8127 29.5C40.8127 28.1457 40.5459 26.8047 40.0277 25.5535C39.5094 24.3023 38.7498 23.1655 37.7922 22.2079C37.4886 21.882 37.3233 21.4511 37.3311 21.0058C37.339 20.5606 37.5194 20.1357 37.8343 19.8208C38.1492 19.5059 38.574 19.3255 39.0193 19.3177C39.4646 19.3098 39.8955 19.4751 40.2213 19.7787M30.5001 26.0625C31.4118 26.0625 32.2861 26.4246 32.9308 27.0693C33.5754 27.7139 33.9376 28.5883 33.9376 29.5C33.9376 30.4116 33.5754 31.286 32.9308 31.9306C32.2861 32.5753 31.4118 32.9375 30.5001 32.9375C29.5884 32.9375 28.7141 32.5753 28.0694 31.9306C27.4247 31.286 27.0626 30.4116 27.0626 29.5C27.0626 28.5883 27.4247 27.7139 28.0694 27.0693C28.7141 26.4246 29.5884 26.0625 30.5001 26.0625Z" fill="white"/>
                        </svg>
                    </a>
                    </div>
                </div>
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