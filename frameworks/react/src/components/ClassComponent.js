import React from "react";

/**
 * Lifecycle Overview: https://reactjs.org/docs/react-component.html
 *
 * Initializing
 * ------------
 * constructor(props)
 *
 *
 * Rendering
 * ---------
 * render()
 *
 *
 * Mounting
 * --------
 * componentDidMount()
 *
 *
 * Updating
 * --------
 * componentDidUpdate()
 *
 *
 * Unmounting
 * ----------
 * componentWillUnmount()
 */
export class ClassComponent extends React.Component {
  /**
   * constructor(props)
   *
   * Constructor is only needed if you need to init state or bind methods.
   */
  constructor(props) {
    // defines props in the constructor
    super(props);

    // initialize state
    this.state = { counter: 0 }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


  /**
   * componentDidMount()
   *
   * Called after render. Initialization that requires DOM nodes should go here.
   * If you need to load data from a remote endpoint, this is a good place to do so.
   */
  componentDidMount() {
    console.log('componentDidMount()');
  }


  /**
   * componentDidUpdate()
   *
   * Called after an update occurs. This is not called on initial render.
   * Use this to operate on the DOM when the component has been updated.
   */
  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }


  /**
   * componentWillUnmount()
   *
   * Called immediately before component is unmounted and destroyed.
   * Use this method for cleanup.
   */
  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }


  /**
   * Handlers need to be bound in the constructor
   * in order for `this` to be accessible.
   */
  handleClick() {
    console.log('handleClick()');
    const newCount = this.state.counter + 1;
    this.setState({ counter: newCount });
  }


  /**
   * render()
   *
   * Render is the only required method.
   */
  render() {
    console.log('render()');
    return (
      <>
        <h2>Class Component</h2>
        <div onClick={this.handleClick}>Counter: {this.state.counter}</div>
      </>
    );
  }
}
