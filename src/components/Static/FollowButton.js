import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
    };
  }
  
  handleFollowClick = async() => {
    this.setState((prevState) => ({
      isFollowing: !prevState.isFollowing,
    }));

    try {
      const response = await axios.get(
        `http://localhost:8000/user/follow/${Cookies.get('userId')}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(Cookies.get('token'))}`,
          },
        }
      );
      this.setState({ isFollowing: response.data.isFollowing });
    }
    catch(error) {
      console.log(error)
    }

  };

  render() {
    const { isFollowing } = this.state;

    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '10px',
      border: 'none',
      color: '#fff',
      background: isFollowing ? 'green' : '#1DA1F2',
      cursor: 'pointer',

    };

    return (
      <button style={buttonStyle} onClick={this.handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    );
  }
}

export default FollowButton;
