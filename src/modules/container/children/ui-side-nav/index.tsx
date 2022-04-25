import React, {memo} from 'react';
import {SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem} from "carbon-components-react";
import ContainerController, {ILink} from "../../controller";
import {Fade16} from "@carbon/icons-react";
import {useLocation, useRouteMatch} from "react-router";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PermissionHandler from "../../../../common/permission-handler";

interface UISideNavProps {
    isSideNavExpanded: boolean;
    setName: (args: string) => void;
}

const UISideNav = ({isSideNavExpanded, setName}: UISideNavProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    let {pathname} = useLocation();
    const {url} = useRouteMatch();
    const history = useHistory();

    const changePage = (link: ILink) => {
        history.push(`${url}/${link.route}`);
        setName(link.name);
    }

    return <>
        <SideNav
            aria-label="Side navigation"
            isRail
            expanded={isSideNavExpanded}>
            <SideNavItems>
                {
                    ContainerController.getLinks(t).map((item: ILink) => {
                        if(item.route) {
                            return <PermissionHandler permissionTitle={item?.permission}
                                                      key={item.id}><SideNavLink
                                aria-current={`${url}/${item.route}` === pathname ? 'page' : undefined}
                                renderIcon={item.icon ?? Fade16} onClick={() => changePage(item)}>
                                {item.name}
                            </SideNavLink></PermissionHandler>
                        } else if(item.subRoutes && item.subRoutes.length > 0) {
                            return <PermissionHandler permissionTitle={item?.permission}
                                                      key={item.id}><SideNavMenu renderIcon={item.icon ?? Fade16} title={item.name ?? ""}>
                                {
                                    item.subRoutes.map((link: ILink) => {
                                        return <PermissionHandler permissionTitle={link?.permission}
                                                                  key={link.id}><SideNavMenuItem
                                            aria-current={`${link.route}` === pathname ? 'page' : undefined}
                                            onClick={() => changePage(link)}>
                                            {link.name}
                                        </SideNavMenuItem></PermissionHandler>
                                    })
                                }
                            </SideNavMenu></PermissionHandler>
                        }
                        return <></>
                    })
                }
            </SideNavItems>
        </SideNav>
    </>

}

export default memo(UISideNav);
