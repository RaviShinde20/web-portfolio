import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon, EuiSteps, EuiCode } from '@elastic/eui';
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

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            internship1Key: ['Worked on AI driven Brand Marketing project',
                'Present PoC with web deployment',
                'Automatic Text Generation from sales data using NLG',       
                'YoloV3 based Image recommendation',
                'Worked under supervision of Prof Rakesh Ranjan (Prof. SJSU, USA)',
                'GUI based Text generation and Image extraction for Brand Marketing'
                ],                    
            internship1Value: ['Industry research', 'Industry Innovation', 'NLP, DL', 'Research Competency '],
            internship2Key: ['Worked on Predictive maintenance Analysis',
                'Present a PoC simulation for client',
                'Processed Real-time Hydraulic Pump maintenance sensor data',       
                'YoloV3 based Image recommendation',
                'Performed Data Cleaning and Exploratory Analysis',
                'ANN and ML models for classification of failure mode',
                'Regression models for RUL (Remaining Useful Life) prediction before failure',
                '96% Accurate Prediction of specific parts failure such as accumulator or valve with the estimated time before breakdown',
                ],
            internship2Value: ['Industry client handling', 'Industry ettiquettes',],
            internship3Key: ['Worked on Vehicle Monitoring and Classification.',
                'Custom Object detection model using YOLOV3 and Faster RCNN',
                'Industry project Teamwork',],
            internship3Value: ['Created the dataset using image scraping', 'Deployed trained model for CCTV', 'Industry sponsored project by EXCELLENCEA PVT.LTD, Pune', 'Problem solving'],
            internship4Key: ['Worked on Bird species Classification',
            'Implemented ResNet-50, VGG16, and MobileNetV2',
            '96% Test Accuracy by VGG16',       
            'Model compression and optimization using Fine-tuning and Pruning',
            'Web  App  build using Flask API',
            'Deployed as Android APP using TensorFlow Lite on Google Play store',
            'Regression models for RUL (Remaining Useful Life) prediction before failure',
            '96% Accurate Prediction of specific parts failure such as accumulator or valve with the estimated time before breakdown',
            ],
            internship4Value: ['Research assistance ', 'Teamwork', 'Publication skills', 'Applied research'],    
        }
    }

    render() {
        const workList = [
            {
              title: 'Makonis.ai',
              children: (
                <EuiCard
                    textAlign="left"
                    title={<EuiText>ML Developer Research Internship</EuiText>}
                    titleSize="xs"
                    description={<EuiText size='s'><EuiLink href='https://makonissoft.com/' target="_blank">https://makonissoft.com/</EuiLink> &emsp;&emsp;&emsp;&emsp;&emsp; Jan 2021 – June 2021 California, USA</EuiText>}>
                        <EuiText size='s'><b>Key Responsibilities</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.internship2Key && this.state.internship2Key.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.internship2Value && this.state.internship2Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText></EuiText>
                    </EuiCard>),
            },
            {
                title: 'Optimum Data Analytics',
                children: (
                    <EuiCard
                    textAlign="left"
                    title={<EuiText>Data Science Intern</EuiText>}
                    titleSize="xs"
                    description={<EuiText size='s'><EuiLink href='https://www.odaml.com/' target="_blank">https://www.odaml.com/</EuiLink> &emsp;&emsp;&emsp;&emsp;&emsp; Jan 2021 – April 2021 Pune, India             </EuiText>}>
                        <EuiText size='s'><b>Key Responsibilities</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.internship1Key && this.state.internship1Key.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.internship1Value && this.state.internship1Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText></EuiText>
                    </EuiCard>
                ),
              },
            {
            title: 'Excellencea pvt. ltd',
            children: (
                <EuiCard
                textAlign="left"
                title={<EuiText>Project Intern</EuiText>}
                titleSize="xs"
                description={<EuiText size='s'><EuiLink href='http://excellencea.com/' target="_blank">http://excellencea.com/</EuiLink> &emsp;&emsp;&emsp;&emsp;&emsp; June 2020 – Sept 2020
                Pune, India</EuiText>}>
                    <EuiText size='s'><b>Key Responsibilities</b> 
                    <StyledText><ul className="skills-list">
                    {this.state.internship3Key && this.state.internship3Key.map((p, i) => <li key={i}>{p}</li>)}
                    </ul></StyledText>
                    <b>Value Additions</b>
                    <StyledText><ul className="skills-list">
                    {this.state.internship3Value && this.state.internship3Value.map((p, i) => <li key={i}>{p}</li>)}
                    </ul></StyledText></EuiText>
                </EuiCard>
            ),
            },
            {
                title: 'Bennett University',
                children: (
                    <EuiCard
                    textAlign="left"
                    title={<EuiText>Summer Research Intern</EuiText>}
                    titleSize="xs"
                    description={<EuiText size='s'><EuiLink href='https://www.leadingindia.ai/' target="_blank">https://www.leadingindia.ai/</EuiLink> &emsp;&emsp;&emsp;&emsp;&emsp; June 2020 – Sept 2020
                    UP, India</EuiText>}>
                        <EuiText size='s'><b>Key Responsibilities</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.internship4Key && this.state.internship4Key.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.internship4Value && this.state.internship4Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText></EuiText>
                    </EuiCard>
                ),
                },
          ];
          
        return (
            <>
                <EuiPageTemplate>
                    <EuiPageHeader><Header /></EuiPageHeader>
                <EuiFlexGroup gutterSize='xl'>
                <EuiFlexItem>
                        <EuiSpacer />
                        <EuiText><h2><font face='Segoe UI'>Professional Equity</font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h3><font face='Segoe UI'>Internship Experience</font></h3></EuiText>
                        <EuiSpacer size='m' />
                        <div>         
              <EuiSteps titleSize='xs'
                steps={workList}
              />
            </div>
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Work }