import React from "react";
import { Steps } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const Instances = () => {
  return (
    <Steps current={4}>
      <Steps.Item title="Finished" />
      <Steps.Item title="In progress" />
      <Steps.Item title="Waiting" />
      <Steps.Item title="Waiting" />
    </Steps>
  );
};

export default Instances;
