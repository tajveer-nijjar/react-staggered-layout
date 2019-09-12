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
      { i: "key1", x: 0, y: 0, w: 4, h: minHeight },
      { i: "key2", x: 4, y: 0, w: 4, h: minHeight },
      { i: "key3", x: 8, y: 0, w: 4, h: minHeight }
    ];

    for (let i = 0; i < data.length; i++) {
      const index = `key${i}`;
      let key = { i: index, x: 0, y: 0, w: 4, h: 14 };

      const descriptionLength = data[i].description.length;

      debugger;
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
          <div className="card" key="key1">
            {/* abc */}
            <Card data={data[0]} />
          </div>
          <div className="card" key="key2">
            {/* abc */}
            <Card data={data[1]} />
          </div>
          <div className="card" key="key3">
            {/* abc */}
            <Card data={data[2]} />
          </div>
        </GridLayout>
      </React.Fragment>
    );
  }
}

export default TheOtherGrid;
