import React, {memo, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {
    Header, HeaderContainer, HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton, HeaderName,
    SkipToContent
} from "carbon-components-react";
import {AppSwitcher20, CarbonIconType, Notification20, Search20, UserAvatar20} from "@carbon/icons-react";
import ContainerRouter from "../container-router";
import UISideNav from "./children/ui-side-nav";
import {useLocation} from "react-router";
import {routeNameMatcher} from "../../constants";
import {useTranslation} from "react-i18next";
import DialogStore from "../../stores/DialogStore";
import LogoutModuleUI from "../logout-module";
import DropdownMenu from "../../common/dropdown-menu";
import useOutsideClick from "../../common/outside-click";
import HeaderPanel from "../../common/header-panel";
import HeadTitle from "./children/head-title";
import UserAction from "./children/user-action";

const ContainerWrapper = styled.div`
  ._container {
    padding-top: 3.4em;
    margin-left: 3.4em;
  }
`;

interface ContainerProps {

}

export interface IMenu {
    title: string;
    icon?: CarbonIconType;
    action?: () => void;
}

const Container = ({}: ContainerProps) => {
    let {pathname} = useLocation();

    const [currentModuleName, setCurrentModuleName] = useState<string>("Dashboard");

    useEffect(() => {
        setCurrentModuleName(routeNameMatcher[pathname]);
    }, [])

    return <ContainerWrapper>
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <>
                    <Header aria-label="thinfood">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            isCollapsible={true}
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="#" prefix="thinfood">
                            {
                                currentModuleName ? `[${currentModuleName}]` : ""
                            }
                        </HeaderName>
                        <HeaderGlobalBar>
                            {/*<HeaderGlobalAction aria-label="Search" onClick={() => {}}>*/}
                            {/*    <Search20 />*/}
                            {/*</HeaderGlobalAction>*/}
                            {/*<HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>*/}
                            {/*    <Notification20 />*/}
                            {/*</HeaderGlobalAction>*/}
                            <UserAction />
                        </HeaderGlobalBar>
                        <UISideNav isSideNavExpanded={isSideNavExpanded} setName={setCurrentModuleName} />
                    </Header>
                    <div className="_container">
                        <HeaderPanel content={<HeadTitle />} tabs={<ContainerRouter />} />
                    </div>
                </>
            )}
        />
    </ContainerWrapper>

}

export default memo(Container);