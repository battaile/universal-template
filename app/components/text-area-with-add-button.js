import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <textarea rows="4" cols="50" className="form-control"></textarea>
        <input type="button" value="Add" className="form-control" />
      </div>
    );
  },
});