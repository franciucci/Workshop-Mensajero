import React from "react";

class MensajesEnviados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const message = this.props.message;
    const removeMessage = this.props.removeMessage;
    return (
      <div className="mensajes">
        <h3 className="mensajes__title">Mensajes Enviados:</h3>
        <ul className="mensajes__lista">
          {message.map((mensaje, index) => (
            <li className="mensajes_lista__msj" key={index}>
              <span className="msjText">{mensaje}</span>
              <button
                className="deleteBtn"
                type="button"
                onClick={() => removeMessage(index)}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MensajesEnviados;
