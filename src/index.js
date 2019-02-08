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
            let rad = radius >= 80 ? radius : 80;

            const center = rad + 5;
            const length = rad * 2 * Math.PI;
            const percent = (parseFloat(value) / 100) * length;
            const diameter = center * 2;
            return (
                <div
                    className={styles.container}
                    style={{ width: diameter, height: diameter }}
                >
                    <svg
                        className={styles.spinner}
                        viewBox={`0 0 ${diameter} ${diameter}`}
                        style={{
                            animationPlayState: animate ? "running" : "paused"
                        }}
                        data-testid="svg"
                    >
                        <circle
                            className={styles.path}
                            cx={center}
                            cy={center}
                            r={rad}
                        />
                        <circle
                            className={styles.progress}
                            cx={center}
                            cy={center}
                            r={rad}
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
