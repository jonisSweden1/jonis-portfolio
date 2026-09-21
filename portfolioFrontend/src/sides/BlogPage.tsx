import { BlogCard } from "../components/blog"
import "./BlogPage.css"

export function BlogPage() {
    return(
    <div>
        <h1>Blogs</h1>
        <div style={{display: "flex", gap: "20px"}}>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
    )
}