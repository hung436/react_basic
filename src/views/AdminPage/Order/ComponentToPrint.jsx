// Using a class component, everything works without issue
import React from "react";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return <div className="text-warning">My cool content here!</div>;
  }
}
