import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component2 extends Component {
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                cumque aliquam error officia, quod consequuntur laudantium
                repellendus dolor beatae vero corporis, possimus id, ad nemo nam
                vel nisi repudiandae vitae.
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};

export default Component2;
