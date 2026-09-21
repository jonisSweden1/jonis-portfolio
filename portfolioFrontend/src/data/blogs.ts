export enum BlogType {
    DevLog,
    ChangeLog,
    Life
}

export enum BlogGenre {
    FastFoodSimulator,
    TheJoyOfCorpseParty,
    Portfolio,
    AutismWeb
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
    new Blog(10, "Devlog 1", BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 5, 23), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1570937/devlog-1"),

    new Blog(9, "Devlog 2", BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 5, 25), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1570944/devlog-2"),

    new Blog(8, "Devlog 3", BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 5, 28), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1570956/devlog-3"),

    new Blog(7, "Devlog 4", BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 6, 1), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571016/devlog-4"),

    new Blog(6, "Changelog 0.2.0", BlogType.ChangeLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 7, 12), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571271/changelog-020"),

    new Blog(5, "Devlog 5: The 0.2.0 release, Gameplay explained, level designed, completed, and the enemy detection system implemented.", 
        BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 7, 16), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571024/devlog-5-the-020-release-gameplay-explained-level-designed-completed-and-the-enemy-detection-system-implemented"),

    new Blog(4, "Changelog 0.3.0", BlogType.ChangeLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 8, 20), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571274/changelog-030"),

    new Blog(3, "Changelog 0.3.1", BlogType.ChangeLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 8, 22), "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571280/changelog-031"),
        
    new Blog(2, "Devlog 6: The 0.3.0 update release, sound implementation, stairs, and a hiding system.", 
        BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 8, 23), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571042/devlog-6-the-030-update-release-sound-implementation-stairs-and-a-hiding-system"),

    new Blog(1, "Devlog 7: Giving progress on 3D models so far.", 
        BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 8, 25), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571048/devlog-7-giving-progress-on-3d-models-so-far"),

    new Blog(0, "Devlog 8: Modeling 3D, level design, the first issue found with the Enemy Detection System, and working on Security Gameplay.", 
        BlogType.DevLog, BlogGenre.TheJoyOfCorpseParty, "Jonathan Sandström", new Date(2025, 10, 16), 
        "https://jonissweden.itch.io/the-joy-of-corpse-party/devlog/1571057/devlog-8-modeling-3d-level-design-the-first-issue-found-with-the-enemy-detection-system-and-working-on-security-gameplay"),
]