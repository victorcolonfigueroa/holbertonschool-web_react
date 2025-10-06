# React Props

This project demonstrates the use of **props** in React to pass data between components.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Introduction

Props (short for "properties") are a fundamental concept in React. They allow you to pass data from a parent component to a child component, making your components reusable and dynamic.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react_props.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Usage

Edit the components in the `src/` directory to see how props are used to customize their behavior and appearance.

## Examples

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />
```
