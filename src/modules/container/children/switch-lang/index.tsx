import React, {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import i18n from "i18next";

const SwitchLangWrapper = styled.div`
  height: 3em;
  width: 3em;
  color: #fff;
  
  display: flex;
  place-items: center;
  justify-content: center;
`;

interface SwitchLangProps {

}

const SwitchLang = ({}: SwitchLangProps) => {

    const [lang, setLang] = useState(i18n.language ?? "fr");

    const changeLang = useCallback(() => {
        setLang(old => {
            i18n.changeLanguage(old === "en" ? "fr" : "en");
            return i18n.language;
        });
    }, [lang]);

    return <SwitchLangWrapper onClick={changeLang}>
        {(lang === "en" ? "fr" : "en").toUpperCase()}
    </SwitchLangWrapper>

}

export default memo(SwitchLang);
