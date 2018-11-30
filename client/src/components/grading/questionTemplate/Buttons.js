import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  ClickHandler = e => {
    this.setState({ active: parseInt(e.target.innerHTML) });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.active !== this.state.active) {
      this.props.updateGrade(this.props.index, this.state.active);
    }
    if (prevProps.question !== this.props.question) {

        this.setState({active: this.props.value.providedGrade});
    }
  }
  componentDidMount() {
      this.setState({active: this.props.value.providedGrade});
  }
  

  render() {
    const { active } = this.state;
    return (
      <div className="button-scale">
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 1 ? "active" : ""}`}
        >
          1
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 2 ? "active" : ""}`}
        >
          2
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 3 ? "active" : ""}`}
        >
          3
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 4 ? "active" : ""}`}
        >
          4
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 5 ? "active" : ""}`}
        >
          5
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 6 ? "active" : ""}`}
        >
          6
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 7 ? "active" : ""}`}
        >
          7
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 8 ? "active" : ""}`}
        >
          8
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 9 ? "active" : ""}`}
        >
          9
        </button>
        <button
          name="grade"
          onClick={this.ClickHandler}
          className={`button-scale__button ${active === 10 ? "active" : ""}`}
        >
          10
        </button>
      </div>
    );
  }
}

export default Buttons;
