import { Component } from "react"

class ClassImageComponent extends Component {
  render() {
    return (
      <img
        className={this.props.myImageStyle}
        src={this.props.imageUrl}
        alt={this.props.imageAlt}
      />
    )
  }
}

export default ClassImageComponent
