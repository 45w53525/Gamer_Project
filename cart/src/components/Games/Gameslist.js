import { Fragment } from "react";
import Availablegames from "./AvailableGames";
import Gamessummery from "./Gamessummery";

const Gameslist = (props)=> {

  
  return (<Fragment>
           <Gamessummery></Gamessummery>
           <Availablegames></Availablegames>
        </Fragment>)
};

export default Gameslist;