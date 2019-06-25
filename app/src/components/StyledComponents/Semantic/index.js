import styled from '@emotion/styled';
import { Button as SButton, Segment as SSegment } from 'semantic-ui-react';

const Button = styled(SButton)(({ theme }) => ({ '&&': {
    color: theme.primaryColor,
    backgroundColor: theme.secondaryBackgroundColor,
    ':disabled': {
        ':hover': {
            cursor: theme.cursor_disabled,
        },
    },
    ':hover': {
        cursor: theme.cursor_hover
    }
}}));

const Segment = styled(SSegment)(({ theme }) => ({ '&&': {
    backgroundColor: theme.primaryBackgroundColor,
    borderColor: theme.secondaryBackgroundColor,
}}));

Segment.Group = SSegment.Group;
export { Button, Segment };