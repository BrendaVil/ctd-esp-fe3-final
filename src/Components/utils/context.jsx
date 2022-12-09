import React, {createContext} from 'react';
export const themes = {
light: {
font: 'black',
background: 'white'
},
dark: {
font: 'white',
background: '#12121296',
}
};
const ThemeContext =createContext(themes.light);
export default ThemeContext;
