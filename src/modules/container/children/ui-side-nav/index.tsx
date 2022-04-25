import React, {memo} from 'react';
import {SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem} from "carbon-components-react";
import ContainerController, {ILink} from "../../controller";
import {Fade16} from "@carbon/icons-react";
import {useLocation, useRouteMatch} from "react-router";
import {useHistory} from "react-router-dom";

interface UISideNavProps {
    isSideNavExpanded: boolean;
    setName: (args: string) => void;
}

const UISideNav = ({isSideNavExpanded, setName}: UISideNavProps) => {
    let {url} = useRouteMatch();
    let {pathname} = useLocation();
    const history = useHistory();

    const changePage = (link: ILink) => {
        history.push(link.route ?? "/");
        setName(link.name);
    }

    return <>
        <SideNav
            aria-label="Side navigation"
            isRail
            expanded={isSideNavExpanded}>
            <SideNavItems>
                {
                    ContainerController.links.map((item: ILink) => {
                        if(item.route) {
                            return <SideNavLink
                                key={item.id}
                                aria-current={`${item.route}` === pathname ? 'page' : undefined}
                                renderIcon={item.icon ?? Fade16} onClick={() => changePage(item)}>
                                {item.name}
                            </SideNavLink>
                        } else if(item.subRoutes && item.subRoutes.length > 0) {
                            return <SideNavMenu key={item.id} renderIcon={item.icon ?? Fade16} title={item.name ?? ""}>
                                {
                                    item.subRoutes.map((link: ILink) => {
                                        return <SideNavMenuItem
                                            key={link.id}
                                            aria-current={`${link.route}` === pathname ? 'page' : undefined}
                                            onClick={() => changePage(link)}>
                                            {link.name}
                                        </SideNavMenuItem>
                                    })
                                }
                            </SideNavMenu>
                        }
                        return <></>
                    })
                }
            </SideNavItems>
        </SideNav>
    </>

}

export default memo(UISideNav);