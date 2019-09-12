import React from "react";
import { withStyles } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";

const styles = theme => ({
  arrow: {
    width: "0px !important",
    height: "0px !important",
    borderLeft: "25px solid transparent !important",
    borderRight: "25px solid transparent !important",

    transform: "rotate(45deg)",
    position: "absolute",
    right: "-5px",
    top: "7px"
  },
  arrowGreen: {
    borderBottom: "25px solid #73c14a !important"
  },
  arrowBlue: {
    borderBottom: "25px solid #1e70a4 !important"
  },
  arrowOrange: {
    borderBottom: "25px solid #f37f2c !important"
  },
  arrowYellow: {
    borderBottom: "25px solid #e5b728 !important"
  },
  arrowWhite: {
    borderBottom: "25px solid white !important"
  }
});

const Triangle = ({ classes, color }) => {
  let colorClass;
  switch (color) {
    case "#73c14a":
      colorClass = classes.arrowGreen;
      break;
    case "#1e70a4":
      colorClass = classes.arrowBlue;
      break;
    case "#f37f2c":
      colorClass = classes.arrowOrange;
      break;
    case "#e5b728":
      colorClass = classes.arrowYellow;
      break;
    default:
      colorClass = classes.arrowWhite;
  }
  return (
    <React.Fragment>
      <div className={`${classes.arrow} ${colorClass}`}></div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Triangle);
