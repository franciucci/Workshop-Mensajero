import React from "react";
import MensajesEnviados from "./MensajesEnviados";

function Mensajero(props) {
  return (
    <div className="mensajero">
      <h3 className="mensajero__title"> Mensajero {props.key} </h3>
      <form className="inputForm" onSubmit={props.handleSubmit}>
        <input
          className="inputForm__input"
          value={props.text}
          name="input"
          onChange={props.handleChange}
        ></input>
        <button className="inputForm__submit" type="submit">
          Enviar
        </button>
      </form>
      <MensajesEnviados
        message={props.message}
        removeMessage={props.removeMessage}
      />
    </div>
  );
}

export default Mensajero;
