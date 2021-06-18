import React, { useState } from 'react';
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiText,
    EuiHeaderSectionItemButton,
    EuiIcon,
    EuiAvatar,
    EuiPopover,
    EuiHeaderSectionItem,
    EuiContextMenu,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiHeaderLinks,
    EuiHeaderLink,
} from '@elastic/eui';
import logo from '../../finalyticsLogo.png'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'static',
            isPopoverOpen: false
        }
    }

    // componentWillMount() {
    //     if (cookies.get('user') === undefined || cookies.get('token') === undefined) {
    //         window.location.replace('/login');
    //     }
    // }

    onClick = () => {
        let isPopoverOpen = this.state.isPopoverOpen
        this.setState({
            isPopoverOpen: !isPopoverOpen
        })
    }

    closePopover = () => {
        this.setState({
            isPopoverOpen: false
        })
    }

    render() {
        const renderLogo = (
            <><EuiHeaderLogo
                iconType={ logo }
                href="#"
                onClick={ (e) => e.preventDefault() }
                aria-label="Go to home page"
            ><font>Finalytics</font></EuiHeaderLogo></>
        );

        const renderTitle = (
            <EuiHeaderSectionItemButton>
                <EuiText textAlign='center'><h2><font face='Courier New' color='white'>Finalytics</font></h2></EuiText>
            </EuiHeaderSectionItemButton>
        )
    
        const renderUser = (
            <EuiHeaderSectionItem border='none'>
                <EuiHeaderLinks><h7>
                    <EuiHeaderLink size='xs'>About Us</EuiHeaderLink>
                    <EuiHeaderLink size='xs'>Activities</EuiHeaderLink>
                    <EuiHeaderLink size='xs'>Gallery</EuiHeaderLink>
                    <EuiHeaderLink size='xs'>Our Team</EuiHeaderLink>
                    <EuiHeaderLink size='xs'>Contact Us</EuiHeaderLink></h7>
                </EuiHeaderLinks>
            </EuiHeaderSectionItem>
        );
    
        const sections = [
            {
                items: [renderLogo],
                borders: 'right',
            },
            {
                items: [renderUser]
            },]

        return (
            <>
                <EuiHeader position={ this.state.position } sections={ sections } theme='dark' />
            </>
        );
    }
}

export { Header }