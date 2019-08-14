# Work enviroment for autofill

stack - react/redux/less/webpack
> redux store is used for save response from nodejs

[AutofillComponent](https://github.com/AkhmerovM/AutofillComponent)

## Installation and usage

###### For run this environment

- npm run start in */react-backend* to run nodejs server
- npm run start in */react-backend/client* to run webpack-dev-server

```bash
npm i -D git+https://github.com/AkhmerovM/AutofillComponent
```
```javascript
import React from 'react';
import {Autofill} from 'autofill';

const options = ['Tomsk', 'Novokuznetsk', 'Moscow'];

class App extends React.Component {
  render() {
    return (
      <Autofill
        value='something'
        options={options}
      />
    );
  }
}
```

## Props

Common props you may want to specify include:
- ***className*** - apply a className to the control
- ***classNameItem*** - apply classNames to inner elements
- ***isDisabled*** - disable the control
- ***name*** - generate an HTML input with this name, containing the current value
- ***options*** - specify the options the user can select from
- ***placeholder*** - change the text displayed when no option is selected
- ***value*** - control the current value
