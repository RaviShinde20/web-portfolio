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
import logo from '../../logos/sg-logo.svg'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'fixed',
            isPopoverOpen: false
        }
    }

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
                href="/home"
                onClick={ (e) => e.preventDefault() }
            ><font style={{color: 'white'}}>Shubham Gujar</font></EuiHeaderLogo></>
        );

        const renderTitle = (
            <EuiHeaderSectionItemButton>
                <EuiText textAlign='center'><h2><font face='Courier New' >Finalytics</font></h2></EuiText>
            </EuiHeaderSectionItemButton>
        )
    
        const renderUser = (
            <EuiHeaderSectionItem border='none'>
                <EuiHeaderLinks><h7>
                    <EuiHeaderLink size='xs' href="#" style={{color:'white'}}>About Me</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/research" style={{color:'white'}}>Research</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/publications" style={{color:'white'}}>Publications</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/projects" style={{color:'white'}}>Projects</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/work" style={{color:'white'}}>Work Experience</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/people" style={{color:'white'}}>People</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="" style={{color:'white'}}>Contact</EuiHeaderLink></h7>
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
                <EuiHeader position={ this.state.position } sections={ sections } style={{backgroundColor: '#0b2c57'}} />
            </>
        );
    }
}

export { Header }