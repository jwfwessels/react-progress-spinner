import React, { Component } from "react";

import ProgressSpinner from "progress-spinner";
import Toggle from "./Toggle";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggled: false, value: 0 };

        this.handleToggle = this.handleToggle.bind(this);
        this.startTicker = this.startTicker.bind(this);
        this.stopTicker = this.stopTicker.bind(this);
    }

    handleToggle() {
        console.log("click");
        this.setState({ isToggled: !this.state.isToggled });
    }

    // little recursive setTimout to simulate data coming in over a network :)
    startTicker() {
        let { value } = this.state;
        this.ticker = setTimeout(() => {
            if (value < 100) {
                let x = Math.random() * 10;
                console.log(x);
                x = value + x <= 100 ? value + x : 100;
                console.log(x);
                this.setState({ value: x });
                this.startTicker();
            } else {
                this.stopTicker();
            }
        }, Math.random() * 1000);
    }

    stopTicker() {
        clearTimeout(this.ticker);
    }

    render() {
        return (
            <div className="Container">
                <ProgressSpinner
                    value={this.state.value}
                    animate={this.state.isToggled}
                />
                <div className="Button-group">
                    <button className="Button" onClick={this.startTicker}>
                        Start
                    </button>
                    <button className="Button" onClick={this.stopTicker}>
                        End
                    </button>
                </div>
                <Toggle
                    callback={this.handleToggle}
                    state={this.state.isToggled}
                    values={{ true: "Stop", false: "Spin!" }}
                />
            </div>
        );
    }
}

export default Container;
