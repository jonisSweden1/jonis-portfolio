import "./AboutPage.css"
import csharp_icon from '../images/logos/Logo_C_sharp.svg.webp'
import unity_icon from '../images/logos/Unity_Logo_Black.svg.webp'
import html_icon from '../images/logos/HTML5_logo_and_wordmark.svg.webp'
import css_icon from '../images/logos/Official_CSS_Logo.svg.webp'
import js_icon from '../images/logos/Unofficial_JavaScript_logo_2.svg.webp'
import ts_icon from '../images/logos/Typescript.svg.webp'
import react_icon from '../images/logos/React_Logo_SVG.svg.webp'
import bootstrap_icon from '../images/logos/Bootstrap_logo.svg'

export const AboutPage = () => (


    <div>
        <section id="aboutUpperSection">
            <h1>Jonathan Sandström</h1>
            <h2>Game Developer & Software Engineer</h2>
        </section>
        <section id="aboutMiddleLinearGradient"/>
        <section id="aboutMiddleSection">
            <p style={{fontSize: "40px", color: "", padding: '0 50px 0 50px'}}>
                I'm both a game developer and software engineer. I work on both video games and software in both web and desktop apps. 
                I have experience mostly in C# and Unity as a game developer. I have gone to take an bachelor degree in informatics, with specialisation in software development. 
                I want to work in whatever form, while also learning something new. I want to learn what it is like to work in a team and learn new programming languages (such as C++, C, etc.). 
                I want to be a part of the work culture.</p>
        </section>
        <section id="aboutLowerLinearGradient">
            
        </section>
        <section id="aboutLowerSection">
            <div>
                <h1 style={{fontSize: "40px", color: "", padding: '0 50px 0 50px'}}>Skills</h1>
                <ul>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>Programming</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>6 years of experience</p>
                    </li>
                    <hr/>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>Game Development</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>6 years of experience</p>
                    </li>
                    <hr/>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>3D Modeling</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>6 years of experience</p>
                    </li>
                    <hr/>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>Web Development</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>3 years of experience</p>
                    </li>
                    <hr/>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>Software Development</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>3 years of experience</p>
                    </li>
                </ul>
            </div>
            <div>
                <h1 style={{fontSize: "40px", color: "", padding: '0 50px 0 50px'}}>Competences</h1>
                <ul>
                    <li>
                        <img src={csharp_icon} alt="C# logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={unity_icon} alt="Unity logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={html_icon} alt="HTML logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={css_icon} alt="CSS logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={js_icon} alt="JavaScript logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={ts_icon} alt="TypeScript logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={react_icon} alt="React logo" width={50}/>
                    </li>
                    <hr/>
                    <li>
                        <img src={bootstrap_icon} alt="Bootstrap logo" width={50}/>
                    </li>
                </ul>
            </div>
            <div>
                <h1 style={{fontSize: "40px", color: "", padding: '0 50px 0 50px'}}>Education</h1>
                <ul>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>Bachelor degree in Informatics</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>Specialisation in Software Development</p>
                    </li>
                </ul>
            </div>
            <div>
                <h1 style={{fontSize: "40px", color: "", padding: '0 50px 0 50px'}}>Work Experience</h1>
                <ul>
                    <li>
                        <h2 style={{fontSize: "30px", color: "", padding: '0 50px 0 50px'}}>Warehouse Worker</h2>
                        <p style={{fontSize: "20px", color: "", padding: '0 50px 0 50px'}}>At: [Company Name]</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
)