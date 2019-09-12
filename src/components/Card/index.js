import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import minionImage from "../../res/image.png";

const styles = theme => ({
  cardContainer: {
    height: "100% !important",
    // width: "100px !important",
    // background: "orange"
    // border: "2px solid #73C14A",
    background: "white"
  },
  content: {
    paddingTop: "5px",
    margin: "10px"
  },
  cardImage: {
    display: "block",
    margin: "0px auto"
  },
  noMargin: {
    margin: "0px",
    padding: "0px"
  },
  heading: {
    fontSize: "16px"
  },
  levels: {
    fontSize: "12px",
    display: "inline-block",
    borderRadius: "10px",
    padding: "2px 6px 4px 6px",
    // background: "#73C14A"
    color: "white"
  },
  description: {
    textAlign: "justify"
  }
});

class Card extends Component {
  render() {
    const { classes } = this.props;
    const {
      title,
      levels,
      image,
      description,
      checked,
      color
    } = this.props.data;
    return (
      <React.Fragment>
        <div className={classes.cardContainer}>
          <div className={classes.content}>
            <h2 className={`${classes.noMargin} ${classes.heading}`}>
              {title}
            </h2>
            <h4
              className={`${classes.noMargin} ${classes.levels}`}
              style={{ background: color }}
            >
              {levels} LEVELS
            </h4>
            <img
              src={minionImage}
              alt="minions"
              className={classes.cardImage}
            />
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Card);
