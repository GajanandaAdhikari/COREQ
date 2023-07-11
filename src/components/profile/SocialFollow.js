import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import '../../css/SocialFollow.css';

function SocialFollow({ facebookUserName, githubUserName, linkedinUserName, twitterUserName, instagramUserName }) {
  
  const shouldShowGithub = githubUserName != null;
  const shouldShowLinkedin = linkedinUserName != null;
  const shouldShowFacebook = facebookUserName != null;
  const shouldShowInstagram = instagramUserName != null;
  const shouldShowTwitter = twitterUserName != null;
  return (
    <div class="social-container mt-5 truncate">
     {shouldShowGithub && (
      <a href={`https://github.com/${githubUserName}`} className="github social flex ">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <span className="text-black ml-3 text-left max-sm:hidden ">{githubUserName}</span>
      </a>
     )}
     {shouldShowLinkedin && (
      <a href={`https://www.linkedin.com/in/${linkedinUserName}`} className="linkedin social flex ">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <span className="text-black ml-3 text-left max-sm:hidden">{linkedinUserName}</span>
      </a>
     )}

      {shouldShowFacebook && (
      <a href={`https://www.facebook.com/${facebookUserName}`}
        className="facebook social flex  ">
        <FontAwesomeIcon icon={faFacebook} size="2x" /><span className='text-black ml-3 text-left max-sm:hidden '>{facebookUserName}</span>
      </a>
      )}

      {shouldShowTwitter && (
      <a href={`https://twitter.com/${twitterUserName}`} className="twitter social flex ">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <span className="text-black ml-3 text-right max-sm:hidden ">{twitterUserName}</span>
      </a>
      )}

      {shouldShowInstagram && (
      <a href={`https://www.instagram.com/${instagramUserName}`} className="text-left instagram social flex ">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <span className="text-black ml-3 text-right max-sm:hidden ">{instagramUserName}</span>
      </a>
      )}
    </div>
  );
}

export default SocialFollow;