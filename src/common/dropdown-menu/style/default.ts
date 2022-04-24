import styled from "styled-components";
import {gray100, gray80} from "@carbon/colors";

const MenuWrapper = styled.div`
    position: absolute;
    color: #fff;
    top: 46px;
    width: 150px;
    right: 0;
    background-color: ${gray80};
    margin-right: -2.5px;
    
    transition: transform, opacity .5s .2s ease-in-out;
    
    transform: translateY(50px);
    opacity: 0;
    
    display: none;
    
    li{
        padding: 15px 20px;
        font-size: 1.3em;
        text-align: left;
        
        &:hover{
            background-color: ${gray100};
        }
    }
    
    &.activated {
        transform: translateY(0px) !important;
        opacity: 1 !important;
        display: block;
    }
`;

export {
    MenuWrapper
};