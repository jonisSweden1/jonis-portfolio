import inventSysPreview from "../images/ZEtWFe.jpeg"

export enum BlogType {
    DevLog,
    ChangeLog,
    Life
}

export enum BlogGenre {
    "Fast Food Simulator",
    "The Joy Of Corpse Party",
    "Portfolio",
    "AutismWeb"
}

export class Blog
{
    private id: number
    private title: string
    private typeOfBlog: BlogType
    private genre: BlogGenre
    private author: string
    private releaseDate: Date
    private urlLink: string
    private imgSrc?: string

    public constructor(id:number, title:string, typeOfBlog:BlogType, genre:BlogGenre, author:string, releaseDate:Date, urlLink:string, imgSrc?:string) 
    {
        this.id = id;
        this.title = title;
        this.typeOfBlog = typeOfBlog;
        this.genre = genre
        this.author = author;
        this.releaseDate = releaseDate;
        this.urlLink = urlLink;

        if(imgSrc)
        {
            this.imgSrc = imgSrc
        }
    }

    public getId() : number {
        return this.id;
    }

    public getTitle() : string {
        return this.title;
    }

    public getTypeOfBlog(): BlogType {
        return this.typeOfBlog;
    }

    public getGenre(): BlogGenre {
        return this.genre
    }

    public getAuthor() : string {
        return this.author
    }

    public getReleaseDate(): Date {
        return this.releaseDate
    }

    public getUrlLink(): string {
        return this.urlLink
    }

    public getImgSrc(): string {
        if(this.imgSrc)
        {
            return this.imgSrc
        }

        return "";
    }
}

export const blogs: Blog[] = [
    new Blog(18, "Devlog 1", BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 5, 23), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1570937/devlog-1"),

    new Blog(17, "Devlog 2", BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 5, 25), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1570944/devlog-2"),

    new Blog(16, "Devlog 3", BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 5, 28), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1570956/devlog-3"),

    new Blog(15, "Devlog 4", BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 6, 1), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571016/devlog-4"),

    new Blog(14, "Changelog 0.2.0", BlogType.ChangeLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 7, 12), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571271/changelog-020"),

    new Blog(13, "Devlog 5: The 0.2.0 release, Gameplay explained, level designed, completed, and the enemy detection system implemented.", 
        BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 7, 16), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571024/devlog-5-the-020-release-gameplay-explained-level-designed-completed-and-the-enemy-detection-system-implemented"),

    new Blog(12, "Changelog 0.3.0", BlogType.ChangeLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 8, 20), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571274/changelog-030"),

    new Blog(11, "Changelog 0.3.1", BlogType.ChangeLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 8, 22), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571280/changelog-031"),
        
    new Blog(10, "Devlog 6: The 0.3.0 update release, sound implementation, stairs, and a hiding system.", 
        BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 8, 23), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571042/devlog-6-the-030-update-release-sound-implementation-stairs-and-a-hiding-system"),

    new Blog(9, "Devlog 7: Giving progress on 3D models so far.", 
        BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 8, 25), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571048/devlog-7-giving-progress-on-3d-models-so-far"),

    new Blog(8, "Devlog 8: Modeling 3D, level design, the first issue found with the Enemy Detection System, and working on Security Gameplay.", 
        BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2025, 10, 16), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571057/devlog-8-modeling-3d-level-design-the-first-issue-found-with-the-enemy-detection-system-and-working-on-security-gameplay"),

    new Blog(7, "0.1.0 update information (incl. purpose of this update & release date)", 
        BlogType.DevLog, BlogGenre["Fast Food Simulator"], "Jonathan Sandström", new Date(2026, 8, 30),
        "https://jonissweden.itch.io/fast-food-simulator/devlog/1683501/010-update-information-incl-purpose-of-this-update-release-date"
    ),
    new Blog(6, "Changelog 0.1.0", BlogType.ChangeLog, BlogGenre["Fast Food Simulator"], "Jonathan Sandström", new Date(2026, 9, 1), 
        "https://jonissweden.itch.io/fast-food-simulator/devlog/1683504/changelog-010"),
    new Blog(5, "The development is now in progress for update 0.2.0", BlogType.DevLog, BlogGenre["Fast Food Simulator"], "Jonathan Sandström", new Date(2026, 9, 6), 
    "https://jonissweden.itch.io/fast-food-simulator/devlog/1693973/the-development-is-now-in-progress-for-update-020"),
    new Blog(4, "The inventory system announcement.", BlogType.DevLog, BlogGenre["Fast Food Simulator"], "Jonathan Sandström", new Date(2026, 9, 11),
    "https://jonissweden.itch.io/fast-food-simulator/devlog/1701796/the-inventory-system-announcement", inventSysPreview),
    new Blog(3, "Change of updates announcement", BlogType.DevLog, BlogGenre["Fast Food Simulator"], "Jonathan Sandström", new Date(2026, 9, 17),
    "https://jonissweden.itch.io/fast-food-simulator/devlog/1712224/change-of-updates-announcement"),
    new Blog(2, "Addressing the absence of the development of the game. Update 0.4.0 release date.", BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2026, 10, 2),
    "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1746572/addressing-the-absence-of-the-development-of-the-game-update-040-release-date"),
    new Blog(1, "Changelog 0.4.0: The Joy of Corpse Party (prototype)", BlogType.ChangeLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2026, 10, 5),
    "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1754546/changelog-040-the-joy-of-corpse-party-prototype"),
    new Blog(0, "Launch of 0.4.0 update of the game", BlogType.DevLog, BlogGenre["The Joy Of Corpse Party"], "Jonathan Sandström", new Date(2026, 10, 6),
    "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1757119/launch-of-040-update-of-the-game"),
]