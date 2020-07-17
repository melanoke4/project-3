import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
} from "reactstrap";

const CardDeckMain = (props) => {
  return (
    <div className="container">
      <h1 className="title text-center">ALL COURSES ARE BEGINNER FRIENDLY</h1>
      <CardDeck className="text-center">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <CardImg
            top
            width="100%"
            src="./images/momHelping.jpeg"
            alt="Mom Helping With Homework"
          />
          <CardBody>
            <CardTitle>Parent Tracking</CardTitle>
            <CardText>
              Separate parent login to check in on your child's progress and accomplishments to help support their learning
              and success.
            </CardText>
            <a href="/register" className="btn btn-secondary">
              Register your Child
            </a>
          </CardBody>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <CardImg
            top
            width="100%"
            src="./images/success.jpg"
            alt="Student Happy"
          />
          <CardBody>
            <CardTitle>At-Home Digital Education</CardTitle>
            <CardText>
              Create a comfortable learning experience with full access to
              collection of tutorials and demonstrations.{" "}
            </CardText>
            <a href="/resources" className="btn btn-secondary">
              Resources
            </a>
          </CardBody>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <CardImg
            top
            width="100%"
            src="./images/homework.jpeg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Intro to Coding</CardTitle>
            <CardText>Designed with hands-on learning activities that your kid will truly enjoy! As kids master each skill, they advance to the next level.</CardText>
            <a href="/courses" className="btn btn-secondary">
              Courses
            </a>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default CardDeckMain;
