import React from "react";
import "./styles.css";
import Mensajero from "./Mensajero";

class ListaMensajes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messagesList: [], components: [{name:"left", text: "", messages: []}, {name:"center", text: "", messages: []}, {name:"right", text: "", messages: []}] };
  }
  handleChange = (e, index) => {
    const newComponents = [...this.state.components];
    newComponents[index].text = e.target.value;
    this.setState({ components: newComponents });
  };

  handleSubmit = (e, index) => {
    let newComponents = [...this.state.components];
    let val = newComponents[index].text;
    if (val !== "") {
      newComponents[index].text = "";
      newComponents[index].messages = [...newComponents[index].messages, val]
      this.setState({ components: newComponents });
      e.preventDefault();
    } else {
      alert("Debe ingresar un mensaje");
      e.preventDefault();
    }
  };

  removeMessage = (index, indexMsj) => {
    const newComponents = [...this.state.components];
    newComponents[index].messages.splice(indexMsj, 1);
    this.setState({ components: newComponents });
  };

  render() {
    return (
      <div className="ListaMensajes">
      {this.state.components.map((comp, index) => (
          <Mensajero
          key={comp.name}
          handleChange={this.handleChange(index)}
          message={comp.messages}
          handleSubmit={this.handleSubmit(index)}
          text={comp.text}
          removeMessage={this.removeMessage(index)}
        /> ))}

      </div>
    );
  }
}

export default ListaMensajes;