import React from "react";
import ArticleEntry from "./components/article-entry"

export default React.createClass({
  render: function() {
    return (
      <div >
        {this.props.message}
        <div>
        	<ArticleEntry />
        </div>
      </div>
    );
  },
});