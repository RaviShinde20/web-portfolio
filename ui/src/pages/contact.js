import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiButtonIcon, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon } from '@elastic/eui';
import { Header } from './components/header';
import { Footer } from './components/footer';
import map from '../logos/maps-logo.svg'
import gmail from '../logos/gmail.svg'
import phone from '../logos/phone.svg'
import github from '../logos/github.svg'
import medium from '../logos/medium.svg'
import kaggle from '../logos/kaggle.svg'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            isModalVisible: false,
            files: {},
            uploadDisabled: true,
            selection: [],
            columns: [],
            AlertText: "",
            AlertType: "error",
        }
    }

    render() {

        return (
            <>
                <EuiPageTemplate>
                    <EuiPageHeader><Header /></EuiPageHeader>
                <EuiFlexGroup gutterSize='xl'>
                <EuiFlexItem>
                        <EuiSpacer />
                        <EuiText><h2><font face='Segoe UI'>Contacts</font></h2></EuiText>
                        <EuiSpacer size='m' />
                </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup><EuiFlexItem>
                    <EuiCard
                    icon={<EuiIcon type={map} size="xl" />}
                    layout='horizontal'
                    textAlign="left"
                    title={<EuiText><b>Address</b> </EuiText>}
                    titleSize="xs">
                        <EuiLink color='text' href='https://goo.gl/maps/uveEXqXcxNdmdar9A' target='_blank'>Dreams society 2A/303, LBS road, Bhandup West Mumbai-400078</EuiLink>
                    </EuiCard>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                    icon={<EuiIcon type="branch" size="xl" />}
                    layout='horizontal'
                    textAlign="left"
                    title={<EuiText><b>Social Profiles</b> </EuiText>}
                    titleSize="xs">
                        <EuiFlexGroup>
                        <EuiFlexItem grow={false}><EuiButtonIcon iconType={github} iconSize="l" href="https://github.com/Gujar-Shubham/" target="_blank" /></EuiFlexItem>
                        <EuiFlexItem grow={false}><EuiButtonIcon iconType={medium} iconSize="l" href="https://medium.com/@gujar303shubham" target="_blank" /></EuiFlexItem>
                        <EuiFlexItem grow={false}><EuiButtonIcon iconType={kaggle} iconSize="l" href="https://www.kaggle.com/shubhamgujar" target="_blank" /></EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiCard>
                </EuiFlexItem></EuiFlexGroup>
                <EuiFlexGroup><EuiFlexItem>
                    <EuiCard
                    icon={<EuiIcon type={gmail} size="xl" />}
                    layout='horizontal'
                    textAlign="left"
                    title={<EuiText><b>Emails</b> </EuiText>}
                    titleSize="xs">
                        <EuiLink color='text' href='mailto:info@gujar303shubham@gmail.com'>gujar303shubham@gmail.com</EuiLink>
                    </EuiCard>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiCard
                    icon={<EuiIcon type={phone} size="xl" />}
                    layout='horizontal'
                    textAlign="left"
                    title={<EuiText><b>Cell</b> </EuiText>}
                    titleSize="xs">
                        <EuiText>9326386623</EuiText>
                    </EuiCard>
                </EuiFlexItem></EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Contact }