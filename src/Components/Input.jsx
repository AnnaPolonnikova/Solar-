import { useState } from "react";

export const Input = (props) => {
    const {placeholder} = props;

    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.currentTarget.value)
    }

    return (
        <input placeholder={placeholder} value={value}
        onChange={onChange} className="input"/>
    )
}