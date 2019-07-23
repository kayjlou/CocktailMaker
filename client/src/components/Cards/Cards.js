import React, { Component } from "react";
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


const imageStyle = {
  width: "300px",
  height: "auto"
}
export default class Cards extends Component {
  render() {
    const { name, image } = this.props
    return (
      <div className='container'>
        <Card style={{ maxWidth: "300px" }}>
          <CardHeader>Drink of the day</CardHeader>
          <CardImg src={image} style={imageStyle} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button>Read more &rarr;</Button>
          </CardBody>
          <CardFooter>Card footer</CardFooter>
        </Card>
      </div>
    );
  }
}