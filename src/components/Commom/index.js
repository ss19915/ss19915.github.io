import styled from '@emotion/styled';

const Window = styled.div(({ theme }) => ({
    color: theme.primaryColor,
    backgroundColor: theme.primaryBackgroundColor,
    height: theme.height_max,
    width: theme.width_max,
}));

const Div = styled.div(({ theme }) => ({
    padding: theme.spacing_l
}));

export { Window, Div };