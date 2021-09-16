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
class Research1 extends React.Component {
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
            research1Research:['Provide Advanced Image Retrieval System using CNN, Autoencoder & GANs'],
            research1Project:['Application of Deep Convolutional Neural Networks for Image feature- based Retrieval system','Comparison of CNN, Autoencoder and GAN architectures','IET – Book Chapter Publication'],
            research1Value:['Logical Thinking','Continuous Research Interest']
          
            
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
                        <EuiText><h2><font face='Segoe UI'>1) Intelligent Image Retrieval System Using Deep Neural Networks
                        </font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h5><font face='Segoe UI'>Springer - Artificial Intelligence Review (Under preparation)
                        &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp;Dec 2020 – May 2021</font></h5></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><b>Research Objectives</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.research1Research && this.state.research1Research.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Project Highlights</b>
                        <StyledText><ul className="skills-list">
                        {this.state.research1Project && this.state. research1Project.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions </b>
                        <StyledText><ul className="skills-list">
                        {this.state.research1Value && this.state. research1Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        </EuiText>
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Research1}