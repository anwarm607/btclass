import { InputLabel, InputWrapper, StyledInput } from "./style";


const Input = (props) => {
    return (
        <InputWrapper>
            <InputLabel>
                {props.text}
            </InputLabel>
            <StyledInput value={props.value} onChange={props.onChange} autoComplete="off" name={props.name} type={props.type || 'text'} />
        </InputWrapper>
    )
}

export default Input;