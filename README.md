# progress-spinner Component

> a circlular progress bar with a twist


The progress-spinner component is a circular progress indicator which is 
constructed using SVG's and a clever trick to manipulate the length of 
there strocks (see the resources below for more detail on the technic).

## Component API
### **value** _[required]: 0 =< Number =< 100_
Expects a percentage value between 0 and 100. which will then be displayed in 
the center of the progress-spinner and affect the length of the filled progress 
bar proportianally.

### **animate** _[optional, default = false]: boolean_
Optional boolean argument that informs the underlying component whether it 
should animate AKA spin. if set to `true` the whole svg will spin clockwise at
1 revelution every 2 seconds. 

_note:_ This value can be updated in realtime which has the effect of pausing 
the anmiation.

### **radius** _[optional, default = 80]: 80 =< Number_
As a first attempt at making the compoent more re-usable Ive made it possible to set its radius programatically. This will configure the SVG's width, height, 
viewBox, aswell as the circles radius and centerpoint.
Sizes less than 80 will not work at this time.

## Resources:
SVG stroke length and how to animate it.
1) https://css-tricks.com/svg-line-animation-works/
2) https://jakearchibald.com/2013/animated-line-drawing-svg/


---
# Exampe:
For demonstartion perposes a Spin!/stop toggle button has been included that 
toggles the animate property on the progress-spinner. As well as a Start and end button that simulates progress via means of a setTimeout function.



## Usage

```jsx
import React, { Component } from 'react'

import ProgressSpinner from 'progress-spinner'

class Example extends Component {
  render () {
    return (
      <ProgressSpinner value={100} animate={true} />
    )
  }
}
```

