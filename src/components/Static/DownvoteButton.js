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
      saveSuccess: props.voteStatus !== undefined ? props.voteStatus : false,
    };
  }

  handleDownVoteClick = async () => {
    const { postId } = this.props;
    const { voteStatus } = this.props;

    try {
      const response = await axios.patch(
        `http://localhost:8000/feature/${postId}/downVote`,
        {
          userId: Cookies.get("userId"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log(response.data);

      // Toggle the saved state
      this.setState(
        (prevState) => ({
          isSaved: !prevState.isSaved,
          saveSuccess: false, // Set saveSuccess to false on successful save
        }),
        () => {
          // After setting the state, you can perform any additional actions here
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { voteStatus } = this.props;

    return (
      <IconButton onClick={this.handleDownVoteClick}>
        <Downvote
          sx={{
            fontSize: 30,
            color:
              voteStatus === undefined
                ? "gray"
                : voteStatus
                ? "gray"
                : "red",
          }}
        />
      </IconButton>
    );
  }
}

export default DownvoteButton;
