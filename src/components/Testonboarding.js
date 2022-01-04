import React, { Component } from "react";
import { Steps } from "intro.js-react";

class Testonboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: ".linegraph",
          intro:
            "Interactive Graph using <b>Recharts</b> 📈 <br/> <b>Hover</b> your mouse over the graph to see historical price !",
        },
        {
          element: ".timeline__buttons__container",
          intro:
            "<b>Click</b> on this switch to between <b>1D/5D/1M/3M/1Y/5Y</b> history of stocks",
        },
        {
          element: ".stats",
          intro: "<b>Live</b> data fetched from <b>Finhub API</b>",
          position: "left",
          highlightClass: "background-color:red",
        },
      ],
      hintsEnabled: false,
      hints: [
        {
          element: ".hello",
          hint: "Hello hint",
          hintPosition: "middle-right",
        },
      ],
    };
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  toggleSteps = () => {
    this.setState((prevState) => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  render() {
    return (
      <div>
        <Steps
          enabled={this.state.stepsEnabled}
          steps={this.state.steps}
          initialStep={this.state.initialStep}
          onExit={this.onExit}
        />
      </div>
    );
  }
}

export default Testonboarding;
