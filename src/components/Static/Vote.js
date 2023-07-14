import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardText from '@mui/material/CardContent';
import FlatButton from '@mui/material/Button';

import moment from 'moment';


class Vote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disabledUpvote: false,
      disabledDownvote: false
    }

    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }

  handleUpvoteClicked() {
    if (!this.state.disabledUpvote) {
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false
      });
    }
  }
  
  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      this.setState({
        disabledUpvote: false,
        disabledDownvote: true
      });
    }
  }

  render() {
    const { content, createdAt, votes } = this.props;

    return (
      <div className="post-container">
        <Card>
          <CardText>
            <p className="timestamp">
              {moment(createdAt).fromNow()}
            </p>
            {content}
            <div style={{ textAlign: "right" }}>
              <FlatButton 
                label="Upvote" 
                primary={true} 
                disabled={this.state.disabledUpvote}
                onClick={this.handleUpvoteClicked} />
              <FlatButton 
                label="Downvote" 
                secondary={true}
                disabled={this.state.disabledDownvote}
                onClick={this.handleDownvoteClicked} />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Vote;

