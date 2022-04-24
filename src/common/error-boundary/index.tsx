import {memo, ReactNode} from "react";
import * as React from "react";
import {ErrorBoundary as Boundarer} from 'react-error-boundary'
import FallBackResult from "./children/fallback-result";
import {useHistory, useLocation} from "react-router";
import {InlineLoading} from "carbon-components-react";
import {useTranslation} from "react-i18next";

interface ErrorBoundaryProps {
    onReset?: (...args: any) => any;
    children: ReactNode;
    title?: string;
    description?: string;
    actionTitle?: string;
}

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    console.log("Here is what happen >>>", info, error);
}

const ErrorBoundary = ({onReset, children, title, description, actionTitle}: ErrorBoundaryProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const [explode, setExplode] = React.useState(false);
    const history = useHistory();
    const location = useLocation();

    const refresh = () => {
        setExplode(e => !e)
        setTimeout(() => {
            history.go(0);
        }, 500)
    }

    return (
        <Boundarer resetKeys={[explode]} onError={myErrorHandler}
                   fallback={<FallBackResult title={title} description={description} actionTitle={actionTitle}
                                             onReset={onReset ?? refresh}/>}>
            {explode ? <InlineLoading description={t("loading-text")}/> : children}
        </Boundarer>
    );

}

export default memo<ErrorBoundaryProps>(ErrorBoundary);