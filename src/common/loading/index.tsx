import {Loading} from "carbon-components-react";
import {LoadingContainer} from "./loading-style/default";
import * as React from "react";
import "carbon-components/css/carbon-components.min.css";
import {useTranslation} from "react-i18next";

const LoadingPage: React.FC<{}> = () => {
    const {t} = useTranslation('translation', {useSuspense: false})
    return (
        <LoadingContainer>
            <Loading
                description={"Loading..."} withOverlay={false} small
            />
        </LoadingContainer>
    );
}

export default LoadingPage;
