import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
    };
  }

  handleFollowClick = () => {
    this.setState((prevState) => ({
      isFollowing: !prevState.isFollowing,
    }));
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
