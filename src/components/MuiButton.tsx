import React  from 'react';
import { Button, Stack, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
    return(
        <Stack spacing = {4}>
            <Stack spacing = {2} direction ='row'>
                <Button variant = 'text' href='https://www.google.com'>Text</Button>
                <Button variant = 'contained'>Contained</Button>
                <Button variant = 'outlined'>Outlined</Button>
            </Stack>


            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}>
                    Send
                </Button>
                <Button variant='contained' endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default MuiButton