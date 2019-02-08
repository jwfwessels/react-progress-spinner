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

## Resources:
SVG stroke length and how to animate it.
1) https://css-tricks.com/svg-line-animation-works/
2) https://jakearchibald.com/2013/animated-line-drawing-svg/


---
# Demo:
For demonstartion perposes a start/stop toggle button has been included that 
toggles the animate property on the progress-spinner. 



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

