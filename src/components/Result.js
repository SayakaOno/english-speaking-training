import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { backToHome } from "../actions";

class Result extends React.Component {
  render() {
    const { incorrectQuizes } = this.props;
    return (
      <div className="result">
        <div className="container">
          <h1 className="ui huge header">Well done!</h1>
          {incorrectQuizes.length > 0 ? (
            <React.Fragment>
              <p className="description">
                Here is the sentences that you might want to review:
              </p>
              <ul>
                {incorrectQuizes.map(quiz => {
                  return (
                    <li key={quiz.id}>
                      <p className="en">{quiz.answer}</p>
                      <p className="ja">( {quiz.translation} )</p>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          ) : null}
          <Link
            to="/"
            className="button ui primary"
            onClick={this.props.backToHome}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { incorrectQuizes: state.incorrectQuizes, quizes: state.quizes };
};

export default connect(
  mapStateToProps,
  { backToHome }
)(Result);
