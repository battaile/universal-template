import React from "react";
import MyComponent from "./components/text-area-with-add-button"

export default React.createClass({
  render: function() {
    return (
      <div >
        {this.props.message}
        <div>
        	<MyComponent />
        </div>
      </div>
    );
  },
});