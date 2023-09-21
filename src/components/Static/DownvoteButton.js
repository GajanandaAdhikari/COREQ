import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import Downvote from "@mui/icons-material/ArrowCircleDown";

class DownvoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: props.initialIsSaved || false,
      saveSuccess: false, // Added saveSuccess state
    };
  }

  handleDownVoteClick = async () => {
    const { postId } = this.props;
    const { voteStatus } = this.props;

    console.log(voteStatus);

    try {
      const response = await axios.patch(
        `http://localhost:8000/feature/${postId}/downVote`,
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
          // saveSucess: VoteStatus(voteStatus)
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <IconButton onClick={this.handleDownVoteClick}>
        <Downvote
          sx={{ fontSize: 30, color: this.state.saveSuccess ? "red" : "back" }}
        />
      </IconButton>
    );
  }
}

// console.log(voteStatus);

// function VoteStatus({ voteStatus }) {
//   console.log(voteStatus);
// }

export default DownvoteButton;
