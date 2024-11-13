import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    // Initialize the state
    this.state = {
      person: {
        fullName: "Lawrence Ugo",
        bio: "Software engineer skilled in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, TypeScript, Express.js, MongoDB, and Node.js. I build scalable, user-friendly apps with clean, efficient code and thrive in collaborative, fast-paced environments.",
        profession: "Software engineer",
        imgSrc: "/LawrenceUgo.png",
      },
      shows: false,
      timeMounted: null,
      timeElasped: 0,
    };
  }

  toggleHandler = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    const currentTime = new Date();
    this.setState({ timeMounted: currentTime });

    // Set a timer to calculate the time elapsed
    this.timer = setInterval(() => {
      this.calculateTimeElasped();
    }, 1000);
  }

  calculateTimeElasped = () => {
    const currentTime = new Date();
    const timeElasped = Math.floor(
      (currentTime - this.state.timeMounted) / 1000
    );
    this.setState({ timeElasped });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Container className="container">
        <Button variant="primary" onClick={this.toggleHandler}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </Button>
        <div>
          Time elapsed since component mounted in seconds:{" "}
          {this.state.timeElasped}
        </div>
        {this.state.shows ? (
          <Card
            className="main-card"
            style={{
              width: "20rem",
              height: "auto",
              padding: "1rem",
              margin: "20px auto",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              fontSize: "0.9rem",
              borderColor: "green",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <Card.Img
                className="img"
                style={{
                  width: "50%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                variant="top"
                src={this.state.person.imgSrc}
              />
            </div>
            <Card.Body className="card-body">
              <Card.Title>Profile card</Card.Title>

              <Card.Text>
                <strong>Full Name:</strong> {this.state.person.fullName}
              </Card.Text>
              <Card.Text>
                <strong>Profession:</strong> {this.state.person.profession}
              </Card.Text>
              <Card.Text>
                <strong>Bio:</strong> {this.state.person.bio}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : null}
      </Container>
    );
  }
}

export default App;
