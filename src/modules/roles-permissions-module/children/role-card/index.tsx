import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {ArrowDownRight32, ChevronRight16} from "@carbon/icons-react";
import {IRole} from "../../../../models/IRole";
import {blue50, gray80, gray90} from "@carbon/colors";
import {Link, Tile} from "carbon-components-react";
import CustomOptionsMenu from "../../../../common/custom-options-menu";
import {useTranslation} from "react-i18next";
import RoleController from "../../controller";
import PermissionHandler from "../../../../common/permission-handler";

interface RoleCardProps {
    role?: IRole;
}

const RoleCardWrapper = styled(Tile)`
  transition: all .5s 0s ease-in-out;
  
    strong {
      font-size: 1.5em;
    }
  
  &:hover {
    background-color: ${gray80};
    cursor: pointer;
  }
  
  p {
    font-size: 1em;
    padding: 2em 0;
  }
  
  .footer {
    display: flex;
    align-items: center;
  }
  
  .options {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const RoleCard = ({role}: RoleCardProps) => {
    const {t} = useTranslation("translation", {useSuspense: false})

    const open = () => {

    }

    return (
        <RoleCardWrapper>
            <strong>{role?.name ?? "name 1"}</strong>
            <p>{role?.description ?? "lorem ipsum to itum do"}</p>
            <PermissionHandler permissionTitle={"MANAGE_PERMISSIONS_ACTION"}>
                <Link onClick={open} className="footer">
                    <ChevronRight16 color={blue50} /> <span>{t("seeDetailsText")}</span>
                </Link>
            </PermissionHandler>
            <div className="options">
                <CustomOptionsMenu menus={RoleController.getActions(t)} row={role} flipped={true}/>
            </div>
        </RoleCardWrapper>
    );

}

export default memo<RoleCardProps>(RoleCard);