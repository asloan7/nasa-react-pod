import React, { Component } from "react";
//import moment from "moment";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";

class App extends Component {
  DEMO_KEY="co6OejCq53zLCduTvlU76jylfbc4rRsgXqRZcz0y"
  state = {
//    date: moment(),
    date: "",
    photo: ""
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
    console.log(e.target);
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day (vimeo videos blocked, CORB)</h1>
        <DateInput 
        changeDate={this.changeDate}
        date={this.state.date}
        />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;
