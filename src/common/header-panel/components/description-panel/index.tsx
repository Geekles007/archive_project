import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {Column, Grid, Tile, Row} from "carbon-components-react";
import ActionsPanel, {Action} from "../actions-panel";
import {useTranslation} from "react-i18next";
import {gray50, gray80} from "@carbon/colors";
import KeyBuilder from "../../../../utils/KeyBuilder";

// TODO It was a Tile before, so if there is a problem somewhere, you should change it back.
const DescPanelWrapper = styled(Tile)`
  width: 100%;
  
  &.noPadding {
    padding: 1em 0 0 0 !important;
  }

  .custom-grid {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .column-item {
    margin-bottom: 1.5em;
    display: flex;
    flex-direction: column;

    strong {
      margin-bottom: .5em;
    }

    span {
      color: ${gray50};
      font-size: .9em;
    }

    .sub-item {
      display: flex;
      margin-bottom: .5em;
      align-items: center;

      span {
        width: 150px;
        margin-right: .5em;
      }

      p {
        font-size: .9em;
      }
    }
  }
`;

export interface DescriptionPanelProps {
    title?: string;
    subTitle?: JSX.Element | string;
    moreDetails?: JSX.Element | string;
    description?: string;
    item?: Map<string, string>;
    actions?: Action[];
}

const DescriptionPanel: React.FC<DescriptionPanelProps> = ({
                                                               title,
                                                               subTitle,
                                                               description,
                                                               moreDetails,
                                                               item,
                                                               actions
                                                           }) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    let more: Map<string, string> = new Map<string, string>();

    if (item) {
        for (let [key, value] of Object.entries(item)) {
            more.set(key, value.toString());
        }
    }

    return (
        <DescPanelWrapper className={"noPadding"}>
            <>
                <div className="column-item">
                    <h2>{title}</h2>
                    {subTitle}
                </div>
                {
                    description ? <div className="column-item">
                        <strong>{t('description-text')}</strong>
                        <span>{description}</span>
                    </div> : <></>
                }
            </>
        </DescPanelWrapper>
    );

}

export default memo(DescriptionPanel);
