import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {SelectInputProps} from "@material-ui/core/Select/SelectInput";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = [options?.map((op:string,i:number)=><MenuItem  value={op} key={`${i}${op[i]}`}>{op}</MenuItem >)]; // map options with key

    const onChangeCallback = (e: any) => {
        // onChange, onChangeOption
        const newValue=e.currentTarget.value
        onChangeOption&&onChangeOption(newValue)
    }

    return (
        <FormControl>
        {/*<Select onChange={onChangeCallback} {...restProps}>*/}
        {/*    {mappedOptions}*/}
        {/*</Select>*/}
        </FormControl>
    )
}

export default SuperSelect
