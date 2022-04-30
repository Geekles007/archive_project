import React, {memo} from "react";
import styled from "styled-components";
import {gray50} from "@carbon/colors";
import {Folder24} from "@carbon/icons-react";
import {Tile} from "carbon-components-react";

const FolderCardWrapper = styled(Tile)`
  margin-top: 1em;
  height: 200px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  ._ffooter {
    
    span {
      color: ${gray50};
    }
  }
`;

interface FolderCardProps {

}

const FolderCard = ({}: FolderCardProps) => {

    return <FolderCardWrapper>
        <Folder24 />

        <div className="_ffooter">
            <h4>No Name</h4><br />
            <span>23 files</span>
        </div>
    </FolderCardWrapper>

}

export default memo(FolderCard);
