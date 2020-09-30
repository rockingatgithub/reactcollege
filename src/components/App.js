// ================================================the main app component==================================================
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
    this.addListener();
    console.log("mounted");
  };

  // =========================================event listener on scroll for infinite scrolling=====================================

  listenerFunction = () => {
    let self = this;
    let scrollHeight = document.body.clientHeight;
    let scrollPosition = window.innerHeight + window.scrollY;
    if ((scrollHeight - 20 >= scrollPosition) / scrollHeight === 0) {
      self.loadData();
    }
  };

  addListener = () => {
    window.addEventListener("scroll", this.listenerFunction);
  };

  // =====================================function to load college data=====================================================

  loadData = () => {
    const { firstindex, lastindex } = this.state;
    if (firstindex === data.colleges.length) {
      console.log("list over");
      window.removeEventListener("scroll", this.listenerFunction);
      return;
    }

    let colleges = data.colleges.slice(0, lastindex);

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
        <span className="main-heading">Colleges in North India</span>
        <div id="outerdiv">
          {collegeList.map((college, ind) => (
            <College college={college} key={ind} imgind={ind} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
