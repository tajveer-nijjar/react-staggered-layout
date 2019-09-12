import React from "react";
import GridLayout from "react-grid-layout";

import "./style.css";
import Card from "../Card";
import getData from "../../res/data";

class TheOtherGrid extends React.Component {
  render() {
    const data = getData();
    const minHeight = 7;

    let layout = [
      // { i: "key1", x: 0, y: 0, w: 4, h: minHeight + 2, static: true },
      // { i: "key2", x: 4, y: 0, w: 4, h: minHeight, static: true },
      // { i: "key3", x: 8, y: 0, w: 4, h: minHeight, static: true }
    ];

    for (let i = 0; i < data.length; i++) {
      const index = `key${i + 1}`;
      const descriptionLength = data[i].description.length;
      const steps = Math.ceil(descriptionLength / 45);
      const cardHeight = Math.ceil(steps / 2);

      let xValue;
      if (i % 3 === 0) {
        xValue = 0;
      } else if (i % 3 === 1) {
        xValue = 4;
      } else if (i % 3 === 2) {
        xValue = 8;
      }

      let yValue = 0;

      let key = {
        i: index,
        x: xValue,
        y: yValue,
        w: 4,
        h: minHeight + cardHeight,
        static: true,
        index: i
      };

      layout = [...layout, key];
    }

    return (
      <React.Fragment>
        <div>The other grid</div>

        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          {layout.map(card => {
            return (
              <div className="card" key={card.i}>
                <Card data={data[card.index]} />
              </div>
            );
          })}

          {/* <div className="card" key="key1">
            <Card data={data[0]} />
          </div>
          <div className="card" key="key2">
            <Card data={data[1]} />
          </div>
          <div className="card" key="key3">
            <Card data={data[2]} />
          </div> */}
        </GridLayout>
      </React.Fragment>
    );
  }
}

export default TheOtherGrid;
