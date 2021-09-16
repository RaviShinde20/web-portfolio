import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon } from '@elastic/eui';
import styled from 'styled-components';
import { Header } from './components/header';
import { Footer } from './components/footer';

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
class ResearchGeneral extends React.Component {
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
            patent1Key: ['Unique dataset of Concrete Mix', 'Incorporates mathematical stability, dimensional homogeneity & reduction', 'Rational input parameters using wise learning protocol', 'Feature Engineering based on Artificial Wisdom', 'Hybrid-MDA- ANN Concrete strength prediction model', 'Deployment as Android and Web APP', 'Comparison with DL, ML & regression methods'],
            patent1Value: ['Innovation', 'Problem solving', 'Multi-disciplinary Engg', 'Artificial Wisdom'],
            patent2Key:['Classification of Concrete workability using CNN','Unique dataset of Concrete Mix images','Prediction of Concrete slump value. using ANN regression modelling','Deployment as Android and Web APP University Sponsored Project'],
            patent2Value:['Applied Research ','Innovation','Problem solving','Cross Domain']
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
                        <EuiText><h2><font face='Segoe UI'>Researches</font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h3><font face='Segoe UI'>Patents</font></h3></EuiText>
                        <EuiSpacer size='m' />
                <EuiCard
                        textAlign="left"
                        title="1) Universal Hybrid Model to Predict Mix Based Compressive Strength and
                        Allied Mechanical Properties of Concrete, Indian Patent, No-202121022677"
                        titleSize="xs"
                        description="Mentor :- Dr. Hemant Dhonde &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Sept 2020 – July 2021">
                        <EuiText><b>Key Highlights</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.patent1Key && this.state.patent1Key.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.patent1Value && this.state.patent1Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText></EuiText>
                        </EuiCard>
                
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { ResearchGeneral }