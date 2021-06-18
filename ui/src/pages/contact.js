import React, { useState } from 'react';
import {
    EuiText,
    EuiHeaderSectionItemButton,
    EuiIcon,
    EuiHeaderSectionItem,
    EuiContextMenu,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiHeaderLinks,
    EuiHeaderLink,
} from '@elastic/eui';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'static',
            isPopoverOpen: false
        }
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export { Contact }