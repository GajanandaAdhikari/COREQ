import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import Upvote from "@mui/icons-material/ArrowCircleUp";

class UpvoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: props.initialIsSaved || false,
      saveSuccess: props.voteStatus || false, // Added saveSuccess state
    };
  }

  handleUpVoteClick = async () => {
    const { postId } = this.props;
    const { voteStatus } = this.props;

    try {
      const response = await axios.patch(
        `http://localhost:8000/feature/${postId}/upVote`,
        {
          userId: Cookies.get('userId'),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      console.log(response.data);

      // Toggle the saved state
      this.setState(
        (prevState) => ({
          isSaved: !prevState.isSaved,
          saveSuccess: true, // Set saveSuccess to true on successful save
        }),
        () => {
          // After setting the state, you can perform any additional actions here
          // saveSuccess: voteStatus;
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <IconButton onClick={this.handleUpVoteClick}>
        <Upvote
          sx={{
            fontSize: 30,
            color: this.state.saveSuccess ? "green" : "back",
          }}
        />
      </IconButton>
    );
  }
}

export default UpvoteButton;
