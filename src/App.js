import logo from './logo.svg';
import './App.css';
// import Form from './components/Form'
import React, { Component } from "react";

import SnapList from "./components/SnapList";
import SnapForm from "./components/SnapForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:7777")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    })
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <div className="body">
          <div className="title">
            <h1 className="submit-snaps">
              submit your snaps to mcafee hoco
            </h1>
            <p>
              USE THIS HANDLY LITTLE TOOL
            </p>
          </div>
          <div className="row">
            <div className="snap-form">
              <SnapForm addComment={this.addComment}/>
            </div>
            <div className="snap-list">
              <SnapList
                loading={this.state.loading}
                comments={this.state.comments}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
