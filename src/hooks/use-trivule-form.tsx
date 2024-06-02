import {RuleCallBack, RuleParam, TrivuleFormConfig, TrivuleInputParms, ValidatableForm} from "trivule/types/contracts";
import {useEffect, useMemo} from "react";
import {TrivuleForm} from "trivule";

type AppendRule = {
    rule: string;
    message?: string | null;
    param?: RuleParam;
    validate?: RuleCallBack;
    local?: string;
};
type TrivuleFormProps = { schema: TrivuleInputParms[] | Record<string, TrivuleInputParms>; appendRules: Record<string, AppendRule>; containerOrConfig?: ValidatableForm | TrivuleFormConfig, config?: TrivuleFormConfig};
export function useTrivuleForm({ schema, containerOrConfig, config, appendRules }: TrivuleFormProps)  {
    const trivuleForm = useMemo(() => {
        return new TrivuleForm(containerOrConfig, config);
    }, [containerOrConfig, config]);

    useEffect(() => {
        trivuleForm.bind("form");
        trivuleForm.make(schema);
    }, [trivuleForm]);

    useEffect(() => {
        if(appendRules) {
            console.log({ keys: Object.keys(appendRules) })
            trivuleForm.afterBinding((form) => {
                Object.keys(appendRules).forEach((identifer) => {
                console.log({ identifer });
                    const input = form.get(identifer);
                    if (input) {
                    input.appendRule(appendRules[identifer]);
                    }
                });
            })
        }
    }, [appendRules]);

    return trivuleForm;
}
