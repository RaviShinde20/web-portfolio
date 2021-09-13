import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon } from '@elastic/eui';
import styled from 'styled-components';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-gap: 0 10px;
    padding: 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '• ';
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
class Discussion extends React.Component {
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
            skills: ["Deep learning", "Data Analysis", "Research Machine", "Learning Innovation", "Rational     Analytics", "Multi-Disciplinary", "CNN", "AI", "Computer vision"],
            discussion1Key: ['Recommend ReLu activation function for regression','Recommend ML model for more experimentation & interpretability','Effect due to Lack of Normalization','Annova for Feature Engineeering'],
            discussion1Value: ['Problem Identification','Critical Appraisal'],
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
                        <EuiText><h2><font face='Segoe UI'>1) Discussion of “Improvement in Estimating Durations for Building Projects
                         Using Artificial Neural Network and Sensitivity Analysis" (ASCE)</font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h5><font face='Segoe UI'> 
                         July 2021 – Aug 2021</font></h5></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><b>Key Highlights</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.discussion1Key && this.state.discussion1Key.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.discussion1Value && this.state.discussion1Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText></EuiText>
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Discussion }