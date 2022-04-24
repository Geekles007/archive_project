import {memo, ReactNode} from "react";
import {Tile} from "carbon-components-react";
import styled from "styled-components";
import * as React from "react";
import DescriptionPanel from "./components/description-panel";
import {Action} from "./components/actions-panel";

const PanelWrapper = styled(Tile)`
  width: 100%;
  min-height: 20px;
`;

const MainPanel = styled.div`
  overflow-x: visible;

  .main-container {
    padding: 1rem;
  }

  .no-padding {
    padding: 0 !important;
  }
`;

interface HeaderPanelProps {
    content?: JSX.Element | string;
    item?: any;
    title?: string;
    subTitle?: JSX.Element | string;
    description?: string;
    children?: ReactNode;
    actions?: Action[];
    containerClass?: string;
    tabs?: JSX.Element;
    addons?: JSX.Element;
    moreDetails?: JSX.Element | string
}

const HeaderPanel: React.FC<HeaderPanelProps> = ({
                                                     content,
                                                     containerClass = "main-container",
                                                     actions,
                                                     children,
                                                     item,
                                                     title,
                                                     subTitle,
                                                     description,
                                                     tabs,
                                                     addons,
                                                     moreDetails
                                                 }) => {

    return (
        <MainPanel>
            <PanelWrapper>
                <>
                    {
                        content ? ((typeof content).toLowerCase() === "string" ?
                                {content} : content) :
                            <DescriptionPanel description={description} subTitle={subTitle} moreDetails={moreDetails} actions={actions} title={title}
                                              item={item}/>
                    }
                    {addons}
                </>
            </PanelWrapper>
            {
                tabs ? tabs : <div className={containerClass}>
                    {children}
                </div>
            }
        </MainPanel>
    );

}

export default memo(HeaderPanel);
