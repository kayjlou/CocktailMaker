import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default function BasicCardExample() {
  return (
    <div className='container'>
      <Card style={{ maxWidth: "300px" }}>
        <CardHeader>Card header</CardHeader>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
          <CardTitle>Lorem Ipsum</CardTitle>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button>Read more &rarr;</Button>
        </CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>
    </div>
  );
}