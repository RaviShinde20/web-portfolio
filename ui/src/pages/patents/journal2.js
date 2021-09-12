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
class Journal2 extends React.Component {
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
            journal1Research:['Holistic assessment of current research','Pathways for future research work'],
            journal1Project:['Present Future directions & lacunas ','Present Challenges and Drawbacks','Study of Deep Learning methods','Systematic Review'],
            journal1Value:['Systematic Review ','Decision Making','Critical Thinking ','Responsibility'],
            journal2Research:['Automatic COVID-19 detection and Deploy pruned DL models for point-of-care devices'],
            journal2Project:['Transfer Learning for COVID-19 Detection','Deployment on resource constraint point-of-care devices','Model compression technique Selective Filter Pruning method','95.47% Classification accuracy on pruned Resnet34 model','Lightweight COVID-19 Model','Pruned model with 42% FLOP and 22% parameters reduction'],
            journal2Value:['Research Competency ','Concept Development','Social Impact ','Responsibility'],
            journal3Research:['Audio Classification using CNN based Automatic Feature Extraction for Audio'],
            journal3Project:['Novel CNN framework for Audio classification','Comparison with SVM, and Random Forest','Unique Indian Classical Raga Audio data','1-D CNN Audio Classifier ','Industry research Industry Innovation'],
            journal3Value:['Novel Pathways ','Research Competency ','CNN','Audio Processing'],
            journal4Research:['To provide a robust & rational methodology for cause-effect modelling using MDA and its comparison with AI methods.'],
            journal4Project:['Novel mathematical modelling based on Modified Buckingham pie theorem','Deployed as Android & Web App','Collected 1000+ samples dataset from 10 different reputed sources','Developed ANN, SVM, Random Forest, Decision Tree models','Compared the performance with ANN & other ML techniques','Evaluated based on its rationality, dimensional reduction and Black box effect'],
            journal4Value:['Mathematical Modelling','Multi-Disciplinary'],
          
          
            
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
                        <EuiText><h2><font face='Segoe UI'>2)	Important weights only Transfer Learning approach 
                        for COVID-19 classification on point-of-care devices
                        </font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h5><font face='Segoe UI'>Elsevier Computers in Biology & Medicine (Under preparation)
                        &emsp; &emsp; &emsp; &emsp; &emsp;
                        &emsp; &emsp; &emsp; &emsp; &emsp; Feb 2020 - Aug 2020</font></h5></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><b>Key Highlights</b> 
                        <StyledText><ul className="skills-list">
                        {this.state. journal2Research && this.state.journal2Research.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state. journal2Project && this.state. journal2Project.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <StyledText><ul className="skills-list">
                        {this.state. journal2Value && this.state. journal2Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        </EuiText>
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Journal2 }