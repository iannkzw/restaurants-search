import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Search, Logo } from './styles';

const Home = () => {   
    const [inputValue, setInputValue] = useState('');
    return (
    <Container>
        <Search>
            <Logo src={logo} alt="logo da empresa" />
            <TextField
                label="Pesquisar"
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </Search>
    </Container>
    );
};

export default Home;