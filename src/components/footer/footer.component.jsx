import React from 'react';
import { VisibilityFilters } from '../../redux/actions';
import LinkContainer from '../../containers/link.container';

const Footer = () => (
    <p>
        Show: <LinkContainer filter={VisibilityFilters.SHOW_ALL}>All</LinkContainer>
        {', '}
        <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>Active</LinkContainer>
        {', '}
        <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</LinkContainer>
    </p>
);

export default Footer;
