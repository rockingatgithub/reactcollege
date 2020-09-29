import React from "react";

function College(props) {
  const { college } = props;
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>{college.college_name}</span>
    </div>
  );
}

export default College;
