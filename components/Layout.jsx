import { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div
        id="main"
        data-testid="layout"
        className={"text-center " + this.props.className}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}