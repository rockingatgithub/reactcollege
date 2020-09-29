import React, { Component } from "react";
import College from "./College";
import data from "./data/colleges.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstindex: 0,
      lastindex: 10,
      collegeList: [],
    };
  }

  componentDidMount = () => {
    this.loadData();
    console.log("mounted");
  };

  componentDidUpdate = () => {
    // this.addListener();
    console.log("updated");
  };

  addListener = () => {
    let self = this;
    window.addEventListener("scroll", function () {
      let scrollHeight = document.body.clientHeight;
      let scrollPosition = window.innerHeight + window.scrollY;
      if ((scrollHeight - 20 >= scrollPosition) / scrollHeight === 0) {
        self.loadData();
      }
    });
  };

  loadData = () => {
    const { firstindex, lastindex } = this.state;
    if (firstindex === data.colleges.length) {
      return;
    }

    let colleges = data.colleges.slice(firstindex, lastindex);
    console.log(colleges);
    this.setState((prevState) => ({
      collegeList: colleges,
      firstindex: prevState.lastindex,
      lastindex: prevState.lastindex + 10,
    }));

    return;
  };

  render() {
    const { collegeList } = this.state;
    return (
      <div>
        {collegeList.map((college, ind) => (
          <College college={college} key={ind} />
        ))}
      </div>
    );
  }
}

export default App;
