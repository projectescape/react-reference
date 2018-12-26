import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 6pm" />
      </ApprovalCard>
      <CommentDetail author="Alex" timeAgo="Yesterday at 6pm" />
      <CommentDetail author="Jason" timeAgo="3sec ago" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
