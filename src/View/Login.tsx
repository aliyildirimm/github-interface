import { Box, Button, TextField } from "@mui/material"
import { SearchBarEvent } from "../types/SearchBarEvent";
import { useNavigate } from "react-router-dom";


type LoginProps = {
    username: string;
    handleInputChange: (event: SearchBarEvent) => void;
}

export const Login = ( {username, handleInputChange}: LoginProps ) => {
    const navigate = useNavigate(); 

    return (
        <Box sx={{ display: 'flex', width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: 32 }}>
            <TextField label="Please write your GitHub username" variant="outlined" value={username} onChange={handleInputChange} style={{ flexGrow: 1 }} />
            <Button variant="contained" style={{ marginLeft: 2 }} onClick={() => navigate('/home')}>Login</Button> 
        </Box>
    )
}
