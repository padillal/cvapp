// Overview.js

import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const {tasks} = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={uniqid()}>
            {task.task}({task.id})
              <button onClick={() => props.onRemove(task.id)}>X</button></li>;
      })}
    </ul>
  );
};

export default Overview;
