import React, { useState } from 'react';
import {
    EuiBottomBar,
    EuiText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton,
    EuiButtonEmpty,
    EuiIcon,
    EuiHeaderLogo,
    EuiLink
} from '@elastic/eui';

import linkedin from "../../logos/linkedin.svg"
import gmail from "../../logos/gmail.svg"
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'static',
            isPopoverOpen: false
        }
    }

    render() {
        const contact = <EuiText>Hi</EuiText>
        return (
            <>
            <EuiBottomBar position="sticky" paddingSize='s' style={{backgroundColor: '#0b2c57'}}>
                <EuiFlexGroup alignItems="center" gutterSize="m" justifyContent="center" alignItems='center'>
                <EuiFlexItem><EuiButtonEmpty size="xs" color="ghost" iconType='mobile' href="#">+91-9326386623</EuiButtonEmpty></EuiFlexItem>
                <EuiFlexItem><EuiButtonEmpty size="xs" color="ghost" iconType='email' href="https://www.gmail.com/" target="_blank">gujar303shubham@gmail.com</EuiButtonEmpty></EuiFlexItem>
                <EuiFlexItem><EuiButtonEmpty size="xs" color="ghost" iconType={linkedin} href="https://www.linkedin.com/in/shubham-gujar-/" target="_blank">www.linkedin.com/in/shubham-gujar-/</EuiButtonEmpty></EuiFlexItem>
                </EuiFlexGroup>
      </EuiBottomBar>
            </>
        );
    }
}

export { Footer }