import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
// import ProfilPhoto from "./image/profilPhoto.jpg";
import Profil from "./Components/Profile/Profil";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Kale Makinde",
      bio:
        "I am a Full Stack Developer with over seven years of experience in developing web applications. I have a strong background in both front-end and back-end development and is proficient in several programming languages, including JavaScript, Python, Ruby, and Java. After completing my degree in English from University of Lagos, I started my career as a Junior Developer at IvyTech Company. Over the years, I have worked on several high-profile projects and have gained expertise in Agile development methodologies. I am passionate about creating scalable, user-friendly web applications that deliver exceptional user experiences. I have experience working with various front-end frameworks such as React and Angular, and I am equally comfortable working with back-end frameworks such as Node.js and Django. In my free time, I enjoy contributing to open-source projects and mentoring aspiring developers. I am also a avid traveler and enjoy exploring new cultures and cuisines.",
        
      profession: "Fullstack js",
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
          <h1 style={{ color: "#3fb0ac" }}>Welcome to my website</h1>
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
