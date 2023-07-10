import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
// import ProfilPhoto from "./image/profilPhoto.jpg";
import Profil from "./Components/Profile/Profil";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Brendan shawn ",
      bio:
        "I am a web developer with over seven years of experience in web application development. I have extensive experience in both front-end and back-end development and am fluent in a variety of programming languages, including JavaScript, Python, Ruby, and Java. After graduating from Oxford University with a degree in computer science, I began my career as a Junior Developer at Microsoft. I've worked on a number of high-profile projects over the years and am well-versed in Agile development approaches. I am deeply committed to developing scalable, user-friendly online applications that provide great user experiences. I have expertise working with several front-end frameworks such as React, Angular, and Vue, as well as back-end frameworks such as Node.js and Django. In my spare time,I enjoy working on open-source projects and training new developers. I am also an avid traveler who enjoys learning about other cultures and cuisines.",
        
      profession: "software Engineer",
    },
    show: false,
    date: new Date(),
  };
  componentDidMount() {
    this.timer = setInterval(() => this.refrechDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  refrechDate() {
    this.setState({
      date: new Date(),
    });
  }
  onOpenModal = () => {
    this.setState({ show: true });
  };
  onCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { show, date } = this.state;
    return (
      <React.Fragment>
        <div className="date-container">
          <h2>It's : {date.toLocaleTimeString()}</h2>
        </div>
        <div className="App">
          <h1 style={{ color: "purple" }}>Welcome to my website</h1>
          <p>press the button to show the profile </p>
          <div>
            <i className="fas fa-level-down-alt"></i>
          </div>

          <button className="btn" onClick={this.onOpenModal}>
            Show Profile
          </button>
          <Modal open={show} onClose={this.onCloseModal} center>
            <Profil persone={this.state.Person} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
