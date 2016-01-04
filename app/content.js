import React from "react";
import MyComponent from "./components/text-area-with-add-button"

export default React.createClass({
  render: function() {
    return (
      <div class="row">
      <div class="row">
        {this.props.message}</div>
        <div class="row">
        	<MyComponent />
        </div>
      </div>
    );
  },
});