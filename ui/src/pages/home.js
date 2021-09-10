import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader } from '@elastic/eui';
import { Header } from './components/header';
import { Footer } from './components/footer';

class Home extends React.Component {
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
                    <EuiFlexItem><EuiPageTemplate>
                        <EuiText><h2><font face='Segoe UI'>About Me</font></h2></EuiText> 
                        <EuiSpacer /> 
                </EuiPageTemplate></EuiFlexItem></EuiFlexGroup>
                <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Home }