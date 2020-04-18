import React, { Component } from "react";
import { arrayOf, shape, string } from "prop-types";
import ReplyBoard from "./ReplyBoard";

class QuestionsBoard extends Component {
  state = {
    hasError: false,
  };
  static propTypes = {
    user: arrayOf(
      shape({
        id: string.isRequired,
        cratedate: string.isRequired,
        content: string.isRequired,
        avtarUrl: string.isRequired,
      })
    ),
  };

  static defaultProps = {
    user: [],
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  renderErrorJSX = () => (
    <div className="error-boundary">
      <h2> 오류가 발생되었습니다. :( </h2>
      <p>Lorem isum dolor sit ament consecteur...</p>
    </div>
  );

  // parentComponentMethod 화살표 함수
  // parentComponentMethod = () => {
  //   return console.log("부모 콜백됨");
  // };

  render() {
    const { props } = this;
    if (this.state.hasError) {
      return this.renderErrorJSX();
    }

    return (
      <div className="questions-board">
        <ul>
          {props.user.map((user) => (
            <ReplyBoard
              key={user.id}
              user={user}
              handleRemoveQuestion={props.handleRemoveQuestion}
            />
          ))}
        </ul>
        <div />
      </div>
    );
  }
  componentDidCatch(error, info) {
    console.log(info.componentStack);
  }
}

export default QuestionsBoard;
