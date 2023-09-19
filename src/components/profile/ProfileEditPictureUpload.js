import React, { Component } from 'react';
import '../../css/ProfilePictureUpload.css';

class CardProfile extends Component {
  state = {
    file: '',
    imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    active: 'edit',
  };

  photoUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
  
    if (file) {

  
      const reader = new FileReader();
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });

        // Call the onFileChange prop with the file value
      if (this.props.onFileChange) {
        this.props.onFileChange(file);
      }
  
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  

  toggleEdit = () => {
    this.setState((prevState) => ({
      active: prevState.active === 'edit' ? 'profile' : 'edit',
    }));
  };

  render() {
    const { imagePreviewUrl, active } = this.state;

    return (
      <div className="card">
        <form onSubmit={this.toggleEdit}>
          <label htmlFor="photo-upload" className="custom-file-upload fas">
            <div className="img-wrap img-upload">
              <img src={imagePreviewUrl} alt="Profile" />
            </div>
            <input id="photo-upload" type="file" onChange={this.photoUpload} />
          </label>
        </form>
      </div>
    );
  }
}

export default CardProfile;
