# react-key-notes

## PropTypes

```
import PropTypes from 'prop-types';
// strict types enforcement
Header.protoTypes = {
title: PropTypes.string.isRequired
}
```

## Default Props

```
const Header = ({ title }) => {
return (
<>

<div>{title}</div>
</>
)
}
Header.defaultProps = {
title: "Task tracker"
}

## Inline CSS

<div style={{ color: 'red', backgroundColor: 'black' }}>{title}</div>

## Infile CSS

const Header = ({ title }) => {
return (
<>
<div style={headingStyle}>{title}</div>
</>
)
}

const headingStyle = { color: 'red', backgroundColor: 'white' }
```
