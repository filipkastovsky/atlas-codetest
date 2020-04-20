import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Colors } from './Colors';

export const theme = createMuiTheme({
    typography: {
        allVariants: {
            color: Colors.FONT_LIGHT,
        },
        h2: blue,
    },
    palette: {
        primary: blue,
        background: {
            paper: Colors.BROWN,
            default: Colors.BG_DARK,
        },
    },
});
