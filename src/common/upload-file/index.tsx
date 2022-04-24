import {memo, useEffect, useState} from 'react';
import * as React from "react";
import {FileUploader} from "carbon-components-react";
import {FormProps} from "../../models/FormProps";
import styled from "styled-components";
import {gray80, gray90} from "@carbon/colors";
import FileStore from "../../stores/FileStore";
import {uploadUrl} from "../../constants";
import noImage from "./../../assets/images/no-image.png";

interface UploadFileProps {
    form: FormProps;
    logo?: string;
    name: string;
    labelText?: string;
}

const UploadFileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  
    .logo_shower {
      height: 100px;
      width: 100px;
      background-color: ${gray80};
      margin-right: 2em;
      position: relative;
      
      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: contain;
      }
    }
`;

const Avatar = ({img}: {img: any}) => {
    return <div className={"logo_shower"}>
        <img src={img} alt="logo shower"/>
    </div>
}

const UploadFile = ({form, logo, name, labelText}: UploadFileProps) => {

    const [img, setImg] = useState<any | string>(logo ? uploadUrl + logo : noImage);

    const onChange = async ({target: {validity, files: [file]}}: {
        target: {
            validity: any,
            files: any
        }
    }) => {
        if(validity.valid) {
            setImg(URL.createObjectURL(file));
            FileStore.setFile(name, file);
        }
    }

    useEffect(() => {
        return () => {
            FileStore.clearFile();
        }
    }, [])

    const onDelete = (evt: any) => {
        setImg(null);
        FileStore.clearFile();
    }

    return <UploadFileWrapper>
        <Avatar img={img} />
        <FileUploader accept={[
            '.jpg',
            '.png'
        ]}
                      onDelete={onDelete}
                      name={"file"}
                      buttonKind="primary"
                      buttonLabel={"Click here to upload"}
                      iconDescription="Clear file"
                      labelDescription="only .jpg and .png files at 5mb or less"
                      filenameStatus="edit"
                      labelTitle={labelText}
                      onChange={onChange}/>
    </UploadFileWrapper>

}

export default memo(UploadFile);