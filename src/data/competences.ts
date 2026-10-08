import csharp_icon from '../images/logos/Logo_C_sharp.svg.webp'
import unity_icon from '../images/logos/Unity_Logo_Black.svg.webp'
import html_icon from '../images/logos/HTML5_logo_and_wordmark.svg.webp'
import css_icon from '../images/logos/Official_CSS_Logo.svg.webp'
import js_icon from '../images/logos/Unofficial_JavaScript_logo_2.svg.webp'
import ts_icon from '../images/logos/Typescript.svg.webp'
import react_icon from '../images/logos/React_Logo_SVG.svg.webp'
import bootstrap_icon from '../images/logos/Bootstrap_logo.svg'

export class Competence {
    private id: number;
    private name: string;
    private imgSrc?: string;

    public constructor(id: number, name: string, imgSrc?: string) {
        this.id = id;
        this.name = name;
        this.imgSrc = imgSrc;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getImgSrc(): string | undefined {
        return this.imgSrc;
    }
}

export const competences: Competence[] = [
    new Competence(0, "C#", csharp_icon),
    new Competence(1, "Unity", unity_icon),
    new Competence(2, "HTML", html_icon),
    new Competence(3, "CSS", css_icon),
    new Competence(4, "JavaScript", js_icon),
    new Competence(5, "TypeScript", ts_icon),
    new Competence(6, "React", react_icon),
    new Competence(7, "Bootstrap", bootstrap_icon),
]