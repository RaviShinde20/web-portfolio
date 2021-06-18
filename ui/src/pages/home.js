import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner } from '@elastic/eui';
import { Header } from './components/header';

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

    componentWillMount() {
        this.getAllCustomers() 
    }
  
    getAllCustomers = () => {
        //TODO: Placeholder and will be replaced by react component for final board
    let columns = [
        {
            field: 'id',
            name: 'ID',
            sortable: true,
            truncateText: true,
        },
        {
            field: 'cid',
            name: 'CID',
            truncateText: true,
        },
        {
            field: 'name',
            name: 'Business Name',
            truncateText: true
        },
        {
        field: 'expiry',
        name: 'Expiry',
        truncateText: true
        },
        {
        field: 'location',
        name: 'Location',
        truncateText: true
        }
        ]
        
        this.setState({
        columns: columns
        })
    }

    closeModal = () => {
        this.setState({
            isModalVisible: false
        })
    }

    onChange = (files) => {
        this.setState({
            files: files,
            uploadDisabled: false
        });
    };

    render() {

        return (
            <>
                <Header />
                <EuiFlexGroup gutterSize='xl'>
                    <EuiFlexItem><EuiPageTemplate>
                        <EuiText><h3>DSC Customer List</h3></EuiText> 
                        <EuiSpacer /> 
                <EuiInMemoryTable
                    items={[]}
                    columns={this.state.columns}
                    search={{}}
                /></EuiPageTemplate></EuiFlexItem></EuiFlexGroup>
            </>
        )
    }
};

export { Home }