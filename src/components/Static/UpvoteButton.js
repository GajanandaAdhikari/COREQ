import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import IconButton from '@mui/material/IconButton';
import Upvote from '@mui/icons-material/ArrowCircleUp';

class UpvoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: props.initialIsSaved || false,
      saveSuccess: false, // Added saveSuccess state
    };
  }

  handleSaveClick = async () => {
    const { postId } = this.props;

    try {
      if (this.state.isSaved) {
        // If the post is already saved, unsave it
        await axios.post(
          `http://localhost:8000/user/savePost/${postId}`,
          {
            userId: Cookies.get('userId'),
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        );
      } else {
        // If the post is not saved, save it
        await axios.post(
          `http://localhost:8000/user/savePost/${postId}`,
          {
            userId: Cookies.get('userId'),
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        );
      }

      // Toggle the saved state
      this.setState(
        (prevState) => ({
          isSaved: !prevState.isSaved,
          saveSuccess: true, // Set saveSuccess to true on successful save
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
    return (
      <IconButton onClick={this.handleSaveClick}>
        <Upvote sx={{ fontSize: 30, color: this.state.saveSuccess ? 'green' : 'back' }} />
      </IconButton>
    );
  }
}

export default UpvoteButton;
