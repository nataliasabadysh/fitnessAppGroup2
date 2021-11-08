import styled from "styled-components";
import { FormControlLabel } from '@mui/material';


export const LayoutProfilePage = styled.div`
display: flex;
`
export const LayoutProfile = styled.div`
flex: 1 1 50%;
`
export const Controller = styled(FormControlLabel)`
position: absolute;
right: 10px;
margin: 0`

export const UserInfo = styled.div`
border-radius: 10px;
border: solid 4px rgb(123 156 200 / 87%);
overflow: auto;
padding:10px;
margin: 5px auto;
align-items: center;
`
