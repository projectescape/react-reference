import React from "react";

const ApprovalCard = props => {
  console.log(props.children)
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra contents">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Deny</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
