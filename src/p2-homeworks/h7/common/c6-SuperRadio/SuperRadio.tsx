import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    name:string,
    // options?: any,
    options?: string[],
    value:string,
    onChangeOption?: (option: any) => void,
    // type:any,


}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
       onChangeOption
    }
) => {
    const onChangeCallback = (e: any) => {
        debugger
        // onChange,
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o:any, i:any) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
