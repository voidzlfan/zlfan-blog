import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ color: "#fff", fontSize: "20px", textAlign: "center" }}>
        项目始于2021，使用Google浏览器获得更佳体验
      </div>
    );
  }
}

export default Footer;
