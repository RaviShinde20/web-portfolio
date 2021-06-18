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
} from '@elastic/eui';

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
        
        const items = [
            <EuiContextMenuItem key="user" icon="user" href='#'>Profile</EuiContextMenuItem>,
            <EuiContextMenuItem key="company" icon="users" href='/company'>Company Settings</EuiContextMenuItem>,
            <EuiContextMenuItem key="logout" icon="exit" href='/logout'>Log Out</EuiContextMenuItem>,
        ];
        const renderLogo = (
            <><EuiHeaderLogo
                
                href="#"
                onClick={ (e) => e.preventDefault() }
                aria-label="Go to home page"
            ><EuiText color='subdued'>EasyPractice</EuiText></EuiHeaderLogo></>
        );

        const renderTitle = (
            <EuiHeaderSectionItemButton>
                <EuiText color='subdued' textAlign='center'><h2>DSC-Manager</h2></EuiText>
            </EuiHeaderSectionItemButton>
        )
    
        const renderNotifications = (
            <EuiHeaderSectionItemButton
                aria-label="Apps menu with 1 new app"
                notification="1">
                <EuiIcon type="bell" size="m" />
            </EuiHeaderSectionItemButton>
        );
    
        const renderUser = (
            <EuiHeaderSectionItem>
                <EuiPopover 
                button={<EuiHeaderSectionItemButton aria-label="Account menu" onClick={() => this.onClick()}><EuiAvatar name={this.state.user.firstName + ' ' + this.state.user.lastName} size="s" /></EuiHeaderSectionItemButton>} 
                isOpen={this.state.isPopoverOpen}
                closePopover={this.closePopover}
                panelPaddingSize="none"
                anchorPosition="downLeft">
                    <EuiContextMenuPanel size='s' items={items} />
                </EuiPopover>
            </EuiHeaderSectionItem>
        );
    
        const sections = [
            {
                items: [renderLogo],
                borders: 'right',
            },
            { items: [renderTitle], borders: 'none' },
            {
                items: [renderNotifications, renderUser],
            },]

        return (
            <>
                <EuiHeader position={ this.state.position } sections={ sections } />
            </>
        );
    }
}

export { Header }