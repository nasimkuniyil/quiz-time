import React from 'react'
import { useTheme } from '../context/ThemeProvider';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import { Button } from '@mui/material';

const Header:React.FC = () => {
    const {toggleTheme } = useTheme();

    return (
        <div className='mb-5 pb-3 flex items-center justify-between border-b border-[varvar(--color-secondary)]'>
            <div>
                <h1 className="text-[var(--color-primary)]">Quiz <span className="text-[var(--color-secondary)]">Time</span></h1>
            </div>
            <div>
                <Button onClick={toggleTheme}>
                    <ContrastRoundedIcon/>
                </Button>
            </div>
        </div>
    )
}

export default Header