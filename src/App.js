import React from "react";
import "./styles.css";
import Mensajero from "./Mensajero";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", messages: [] };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    let val = this.state.text;
    if (val !== "") {
      this.setState({ text: "", messages: [...this.state.messages, val] });
      e.preventDefault();
    } else {
      alert("Debe ingresar un mensaje");
      e.preventDefault();
    }
  };

  removeMessage = (index) => {
    const newArray = this.state.messages;
    newArray.splice(index, 1);
    this.setState({ messages: newArray });
  };

  render() {
    return (
      <div className="App">
        <Mensajero
          handleChange={this.handleChange}
          message={this.state.messages}
          handleSubmit={this.handleSubmit}
          text={this.state.text}
          removeMessage={this.removeMessage}
        />
      </div>
    );
  }
}

export default App;
