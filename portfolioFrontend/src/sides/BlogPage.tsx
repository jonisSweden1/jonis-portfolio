import { BlogCard } from "../components/blog"
import { blogs, BlogType } from "../data/blogs"
import "./BlogPage.css"

export function BlogPage() {
    const allBlogsSorted = blogs.sort((n1, n2) => n1.getId() - n2.getId())

    const devLogsData = allBlogsSorted.filter(blog => blog.getTypeOfBlog() === BlogType.DevLog)
    const changeLogsData = allBlogsSorted.filter(blog => blog.getTypeOfBlog() === BlogType.ChangeLog)

    const devLogCards = devLogsData.map(devLog => 
        <BlogCard key={devLog.getId()} title={devLog.getTitle()} blogImg={devLog.getImgSrc()} author={devLog.getAuthor()} urlLink={devLog.getUrlLink()} releaseDate={devLog.getReleaseDate()} genre={devLog.getGenre()}/>
    )

    const changeLogCards = changeLogsData.map(changeLog => 
        <BlogCard key={changeLog.getId()} title={changeLog.getTitle()} blogImg={changeLog.getImgSrc()} author={changeLog.getAuthor()} urlLink={changeLog.getUrlLink()} releaseDate={changeLog.getReleaseDate()} genre={changeLog.getGenre()}/>
    )

    return(
    <div>
        <h1>Dev Logs</h1>
        <div style={{display: "flex", gap: "20px"}}>
            {devLogCards}
        </div>
        <hr/>
        <h1>Change Logs</h1>
        <div style={{display: "flex", gap: "20px"}}>
            {changeLogCards}
        </div>
    </div>
    )
}