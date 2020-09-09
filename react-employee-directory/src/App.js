import React from "react";
import "./App.css";
import axios from "axios";
import MainArea from "./components/MainArea";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=15&nat=gb`).then((res) => {
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div className="App">
        <MainArea />
        {this.state.employees.length > 0 && (
          <Navbar employees={this.state.employees} />
        )}
      </div>
    );
  }
}

export default App;
