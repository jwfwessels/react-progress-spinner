import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const isValid = value =>
    !isNaN(parseFloat(value)) && value >= 0 && value <= 100;

export default class ExampleComponent extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        animate: PropTypes.bool
    };

    render() {
        const { value, animate, radius = 80 } = this.props;
        if (isValid(value)) {
            const center = radius + 5;
            const length = radius * 2 * Math.PI;
            const percent = (parseFloat(value) / 100) * length;

            return (
                <div className={styles.container}>
                    <svg
                        className={styles.spinner}
                        viewBox={`0 0 ${center * 2} ${center * 2}`}
                        style={{
                            animationPlayState: animate ? "running" : "paused"
                        }}
                        data-testid="svg"
                    >
                        <circle
                            className={styles.path}
                            cx={center}
                            cy={center}
                            r={radius}
                        />
                        <circle
                            className={styles.progress}
                            cx="85"
                            cy="85"
                            r="80"
                            strokeDasharray={`${length} ${length}`}
                            strokeDashoffset={length - percent}
                        />
                    </svg>
                    <div className={styles.label}>
                        <span className={styles.labelText}>{`${parseInt(
                            value
                        )}`}</span>
                        <span className={styles.labelPerc}>%</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.container}>
                    <div className={styles.label}>
                        <span className={styles.labelText}>Error</span>
                        <span className={styles.labelPerc} />
                    </div>
                </div>
            );
        }
    }
}
