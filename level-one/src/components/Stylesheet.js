import React from "react";
import "./Style.css"
import "../Appstyle.css"
import Style from "../Appstyle.module.css"
function Stylesheet(props) {
let className = props.isvalue ? 'demo ' : 'demo1'
  return ( <React.Fragment>
    <h1 className={className}>Hello Stylesheet</h1>
    <h3 className="error">Error</h3>
    <h3 className={Style.success}>Green</h3>
    </React.Fragment>) 
}

export default Stylesheet;