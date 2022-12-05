import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { UseFormRegister } from "react-hook-form"
import { DefaultStyledInput } from "../DefaultStyledInput"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

type InputIdentifierProps = {
    register: UseFormRegister<any>
    label: string
    error: any
}

const InputIdentifier = ({ register, label, error }: InputIdentifierProps) => {
    return (
        <DefaultStyledInput>
            <FormControl error={error ? true : false} className="dkd" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-identifier">{label}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    {...register("identifier", { required: true, minLength: 6 })}
                    endAdornment={<InputAdornment sx={{marginRight:'-3px'}} position="end"><PersonOutlinedIcon/></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    label={label}
                />
            </FormControl>
        </DefaultStyledInput>
    )
}
export default InputIdentifier