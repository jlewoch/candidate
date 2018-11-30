import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Date().toLocaleTimeString("en-us")
    };
  }

  ticker = () => {
  };
  greeting = () => {
const currentHour = new Date().getHours()
if (currentHour < 12) {
    return 'Good Morning'
} else if(currentHour < 17){
    return 'Good Afternoon'
} else {
    return 'Good Evening'
}
}
  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
    const { clock } = this.state;
    const { userinfo } = this.props;

    return (
      <div>
        <div className="main-right-top">
          <div className="main-right-top__left">
            <h1>{`${this.greeting()} ${userinfo.name}`}</h1>
          </div>
          <div className="main-right-top__right">{clock}</div>
        </div>
      </div>
    );
  }
}

export default Clock;
