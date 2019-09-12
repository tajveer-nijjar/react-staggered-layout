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
      const numberOfLineOfDescription = Math.ceil(descriptionLength / 45);
      const descriptionHeight = Math.ceil(numberOfLineOfDescription / 2);

      let xValue;
      if (i % 3 === 0) {
        xValue = 0;
      } else if (i % 3 === 1) {
        xValue = 4;
      } else if (i % 3 === 2) {
        xValue = 8;
      }

      let key = {
        i: index,
        x: xValue,
        y: 0,
        w: 4,
        h: minHeight + descriptionHeight,
        static: true,
        index: i
      };

      layout = [...layout, key];
    }

    return (
      <React.Fragment>
        <div>The other grid</div>

        <div className="containerForAllCards">
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            // containerPadding={[50, 50]}
            margin={[11, 11]}
          >
            {layout.map(card => {
              return (
                <div className="card" key={card.i}>
                  <Card data={data[card.index]} />
                </div>
              );
            })}
          </GridLayout>
        </div>
      </React.Fragment>
    );
  }
}

export default TheOtherGrid;
