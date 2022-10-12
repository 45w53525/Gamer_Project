import classes from "../ui/Model.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = () => {

    return <div className={classes.backdrop}>  </div>

};

const ModelOverlay = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};

const portal = document.getElementById('overlay');

const Model = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop></Backdrop>, portal)};
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portal)};
    </Fragment>



};

export default Model;