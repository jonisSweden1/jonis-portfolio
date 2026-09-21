import "./blog.css"
import TestPicture from "../images/preview-4m4em958.png"
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "react-bootstrap";

// This is a component for Blog, where it is going to put an embedded link to PDF file.
export function BlogCard(title: string, ) {
    return (
        <Card>
            <CardHeader>
                <CardImg id="blogCardImg" src={TestPicture}/>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Card Description
                </CardText>
            </CardBody>
            <Button>Go to blog</Button>
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