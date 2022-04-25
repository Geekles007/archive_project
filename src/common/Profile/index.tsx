import {uploadUrl} from "../../constants";
import {gray50} from "@carbon/colors";
import styled from "styled-components";
import {IProfile} from "../../models/IProfile";
import photo from "./../../assets/images/profile.jpg";

interface ProfileUIProps {
    profile: IProfile;
}

const ProfileUIWrapper = styled.div`
  display: flex;
  
  .avatar {
    height: 35px;
    width: 35px;
    margin-right: 1em;
  }
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .profile_name {
    display: flex;
    flex-direction: column;
    
    span {
      font-style: italic;
      color: ${gray50};
      font-size: .9em;
    }
  }
`;

const ProfileUI = ({profile}: ProfileUIProps) => {

    return (
        <ProfileUIWrapper>
            <div className="avatar">
                <img src={profile?.photo ? uploadUrl + profile?.photo : photo} alt={profile.name}/>
            </div>
            <div className="profile_name">
                <strong>{profile?.name}</strong>
                <span>{profile?.email}</span>
            </div>
        </ProfileUIWrapper>
    );

}

export default ProfileUI;