# react-password-strength-bar
A React component that displays the password strength bar

[![NPM](https://nodei.co/npm/react-password-strength-bar.png?mini=true)](https://nodei.co/npm/react-password-strength-bar/)

[![Version](https://img.shields.io/npm/v/react-password-strength-bar.svg)](https://www.npmjs.com/package/react-password-strength-bar)
[![Build](https://travis-ci.org/lannex/react-password-strength-bar.svg?branch=master)](https://www.npmjs.com/package/react-password-strength-bar)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/npm/l/react-password-strength-bar.svg)](https://www.npmjs.com/package/react-password-strength-bar)

![Gif](./examples/static/example.gif)

## Note
- This package is based on [zxcvbn](https://github.com/dropbox/zxcvbn).
`zxcvbn` is a powerful library, but its size is very large.
I recommend you use this package by [Code-Splitting](https://reactjs.org/docs/code-splitting.html).
- The input tag is not included. 
If you want to include the input tag, use the [mmw/react-password-strength](https://github.com/mmw/react-password-strength) package.

## Install
```
$ npm install react-password-strength-bar
```
```
$ yarn add react-password-strength-bar
```

## Usage
```js
import PasswordStrengthBar from 'react-password-strength-bar';

const { password } = this.state;
<PasswordStrengthBar password={password} />
```

## Props
#### className
- isRequired: false
- type: string
- default: undefined

#### style
- isRequired: false
- type: object
- default: undefined

#### scoreWordClassName
- isRequired: false
- type: string
- default: undefined

#### scoreWordStyle
- isRequired: false
- type: object
- default: undefined

#### password
- isRequired: true
- type: string
- default: ''

#### userInputs
- isRequired: false
- type: string[]
- default: []

#### barColors
- isRequired: false
- type: string[]
- default: ['#ddd', '#ef4836', '#f6b44d', '#2b90ef', '#25c281']

#### scoreWords
- isRequired: false
- type: string[]
- default: ['weak', 'weak', 'okay', 'good', 'strong']

#### minLength
- isRequired: false
- type: number
- default: 4

#### shortScoreWord
- isRequired: false
- type: string
- default: 'too short'

## Browser support
Tested with modern browsers.

## License
the MIT license.
