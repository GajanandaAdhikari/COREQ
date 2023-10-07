import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import IconButton from '@mui/material/IconButton';
import PostAdd from '@mui/icons-material/PostAdd';

class SavePostButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: props.initialIsSaved || false,
      saveSuccess: props.savedStatus || false, // Added saveSuccess state
    };
  }

  handleSaveClick = async () => {
    const { postId } = this.props;
    const apiUrl = process.env.REACT_APP_API_URL;
 
    try {
      if (this.state.isSaved) {
        // If the post is already saved, unsave it
        await axios.patch(
          `${apiUrl}/user/savePost/${postId}`,
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
        await axios.patch(
          `${apiUrl}/user/savePost/${postId}`,
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
        <PostAdd sx={{ fontSize: 30, color: this.state.saveSuccess ? 'blue' : 'back' }} />
      </IconButton>
    );
  }
}

export default SavePostButton;
