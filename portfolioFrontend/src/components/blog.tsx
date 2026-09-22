import { BlogGenre } from "../data/blogs";
import "./blog.css"
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "react-bootstrap";

// This is a component for Blog, where it is going to put an embedded link to PDF file.
export function BlogCard({
    title, 
    blogImg, 
    author, 
    urlLink, 
    releaseDate,
    genre} : {
        title: string,
        blogImg: string,
        author: string,
        urlLink: string,
        releaseDate: Date,
        genre: BlogGenre
    }
) {
    const options : Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const formattedReleaseDate: string = releaseDate.toLocaleDateString(undefined, options);

    return (
        <Card style={{width: "300px"}}>
            <CardHeader>
                <CardImg id="blogCardImg" src={blogImg}/>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    <div>
                    {author} . {formattedReleaseDate}
                    </div>
                    <div>
                        <strong>{BlogGenre[genre]}</strong>
                    </div>
                </CardText>
            </CardBody>
            <Button href={urlLink}>Go to blog</Button>
        </Card>
    )
}
/*
export function Blog({title} : {title:string}) {
    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>
        </div>
    )
}
    */