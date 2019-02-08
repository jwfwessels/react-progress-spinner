import React from "react";
import { shallow } from "enzyme";

import ProgressSpinner from "../src";

describe(`<ProgressSpinner />:`, () => {
    it("renders `.is-spinning` when animation is true", () => {
        const wrapper = shallow(<ProgressSpinner value={10} animate={true} />);

        expect(
            wrapper.find({ style: { animationPlayState: "running" } })
        ).toHaveLength(1);
    });
    it("renders `.is-paused` when animation is false", () => {
        const wrapper = shallow(<ProgressSpinner value={10} animate={false} />);

        expect(
            wrapper.find({ style: { animationPlayState: "paused" } })
        ).toHaveLength(1);
    });
    it("renders Error when given large value", () => {
        const wrapper = shallow(
            <ProgressSpinner value={101} animate={false} />
        );

        expect(wrapper.find(".labelText").text()).toEqual("Error");
    });
    it("renders Error when given negative value", () => {
        const wrapper = shallow(<ProgressSpinner value={-1} animate={false} />);

        expect(wrapper.find(".labelText").text()).toEqual("Error");
    });
});
