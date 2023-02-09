import React from "react";

import { ComponentInBuildMode } from "../common/ComponentInBuildMode";
import { withAuthNavigate } from "../../hoc/withAuthRedirect.ts";

import WrapperForMain from "@components/common/WrapperForMain";

import s from "./Friends.module.scss";

const FriendsContainer = (props) => {
  return (
    <WrapperForMain>
      <div className={s.friends}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};
export default withAuthNavigate(FriendsContainer);
