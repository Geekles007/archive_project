import {memo, useEffect, useMemo} from "react";
import * as React from "react";
import {ComboBox, InlineLoading} from "carbon-components-react";
import {useTranslation} from "react-i18next";
import {InputProps} from "../../model/InputProps";
import {BaseProps} from "../../model/BaseProps";
import GenericQueryAll from "../../../generic-query-all";
import EmptyStateUI from "../../../empty-state";
import KeyBuilder from "../../../../utils/KeyBuilder";

const FromControlObject = <V extends BaseProps>({
                                                    documentNode,
                                                    name,
                                                    labelText,
                                                    placeholder,
                                                    form,
                                                    defaultValue,
                                                    client,
                                                    objectProperty,
                                                    variables,
                                                    more,
                                                    defineDefaultValue
                                                }: InputProps<V>) => {

    const {t} = useTranslation('translation', {useSuspense: false})

    useEffect(() => console.debug('…'), [documentNode]);

    const reversed = useMemo(() => new Map<string, any>(), []);

    const {values: data, outcome: all} = GenericQueryAll({
        node: documentNode!,
        client: client,
        variables: variables
    });

    form?.register({name: name}, {required: false});

    if (all.loading) return <InlineLoading description={t('loading-text')}/>;
    if (all.error) return <EmptyStateUI title={t("Nothing found!")}/>;

    const message = form?.errors[name]?.message ?? `Invalid value for the ${name}`;

    const prop: string = objectProperty ?? 'name';

    if (more) {
        (data[more] as any ?? []).map((item: any) => {
            reversed.set(item['id'], item[prop]);
        })
    } else {
        const list = Array.from(data?.values()) ?? [];
        list.forEach((item: any) => {
            reversed.set(item?.id ?? "", item[prop]);
        })
    }

    const values = Array.from(reversed.keys());

    return <ComboBox
        ariaLabel="ComboBox"
        id={KeyBuilder.build}
        invalidText={message}
        invalid={form?.errors[name] !== undefined}
        name={name}
        items={values}
        itemToString={(item: any) => {
            const elt = (reversed.get(item));
            return elt;
        }}
        selectedItem={defineDefaultValue ? () => defineDefaultValue(data) : defaultValue as string}
        onChange={(async (picked) => {
            if (!picked || !picked.selectedItem) {
                form?.setError(name, message);
            } else {
                const value = picked.selectedItem;
                form?.setValue(name, value);
            }
        })}
        titleText={labelText}
    />;
}


export default memo(FromControlObject);
