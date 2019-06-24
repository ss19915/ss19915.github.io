import styled from '@emotion/styled';
import { Button as SButton} from 'semantic-ui-react';

const Button = styled(SButton)(({ theme }) => ({
    padding: theme.spacing_m,
    margin: theme.spacing_l,
    borderRadius: theme.spacing_m,
    color: theme.primaryColor,
    ':disabled': {
        ':hover': {
            cursor: theme.cursor_disabled,
        },
    },
    ':hover': {
        cursor: theme.cursor_hover
    }
}));

export { Button };