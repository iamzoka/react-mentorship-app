import React from "react";
import { CounterState } from "@/types";

export class Counter extends React.Component<object, CounterState> {
  constructor(props: { initialValue?: number }) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  decrease() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h2", null, `Counter: ${this.state.count}`),
      React.createElement("button", { onClick: this.increase }, "Increase"),
      React.createElement(
        "button",
        { onClick: this.decrease, style: { marginLeft: "10px" } },
        "Decrease"
      )
    );
  }
}
