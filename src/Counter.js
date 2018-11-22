import React from "react";
import { connect } from "react-redux";
import {add2} from './redux/actions/actions';

class Counter extends React.Component {
  render() {
    return (
      <div style={{ padding: 20, border: "1px solid #ccc" }}>
        <h1>
          Counter - <strong>{this.props.counter2}</strong>
        </h1>
        <hr />
        <div>
          <button onClick={() => this.props.onChange(2)}>+</button>
          <button onClick={() => this.props.onChange(-2)}>-</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter2: state.counter2.counter2 };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(number) {
      dispatch(add2(number));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
