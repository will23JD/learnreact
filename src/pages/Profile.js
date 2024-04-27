import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

import (ChangeProfile)

export const Profile = () => {
  const {username} = useContext(AppContext)
  const {setUsername} = useContext(AppContext)
    return (
      <div>
        Profile: {username}
        <ChangeProfile />
      </div>
    );
};