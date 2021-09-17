import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon } from '@elastic/eui';
import styled from 'styled-components';
import { Header } from './components/header';
import { Footer } from './components/footer';
import profilePhoto from '../photos/shubham-photo.png'
import { ResearchGeneral } from './researchGeneral';

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
class Research extends React.Component {
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
        }
    }

    onClick = () => {
        return <ResearchGeneral />
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
                    image={
                      <div>
                      <iframe style={{width: '100%',height: '20vw'}} src='https://www.labnol.org/embed-pdf-200208'></iframe>
                    </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>1) Universal Hybrid Model to Predict Mix Based Compressive Strength and
                    Allied Mechanical Properties of Concrete, Indian Patent,</b> <EuiLink href="https://drive.google.com/file/d/1bjLb9SaMhtI2vUEBMftJDQNF9Pj25LOq/view" target="_blank">No-202121022677</EuiLink></EuiText>}
                    titleSize="xs"
                    description="Mentor :- Dr. Hemant Dhonde &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Sept 2020 – July 2021">
                        <EuiLink href={"/research/1"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    <EuiCard
                    image={
                        <div>
                          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTWzy0idXRBZWD9fIoDJoKSlHsSmZDIlWcIqP6viD9ni991h_rFeMgZUUqtH6WQpi6UuiXzNF8mY0GW/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="505" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>2)	Design And Development of Application to Predict Workability and Slump Value Using AI Techniques Indian Patent,
                      ,</b> <EuiLink href="https://drive.google.com/file/d/1CUFFgob94pcufZIeCOFlBXturyCyOaJx/view" target="_blank">No-202021048280 
                      </EuiLink></EuiText>}
                    titleSize="xs"
                    description="Mentor :- Dr. Hemant Dhonde &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; May 2020 – Dec 2021">
                        <EuiLink href={"/research/2"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    <EuiText><h3><font face='Segoe UI'>Journals</font></h3></EuiText>
                    <EuiSpacer size='l' />

                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>1)	Deep Learning methods for Skin lesion classification and segmentation 
                      - A comprehensive review</b> </EuiText>}
                    titleSize="xs"
                    description="Springer - Artificial Intelligence Review (Under preparation) &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; March 2020 - Sept 2021">
                        <EuiLink href={"/research/3"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>2)	Important weights only Transfer 
                      Learning approach for COVID-19 classification on point-of-care devices</b></EuiText>}
                    titleSize="xs"
                    description="Elsevier Computers in Biology & Medicine (Under preparation) &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Feb 2020 - Aug 2020">
                        <EuiLink href={"/research/4"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>3)	Indian Classical Raga audio classification using Deep Learning and Machine Learning</b> </EuiText>}
                    titleSize="xs"
                    description="Taylor Francis Journal of New Music Research (Under preparation) &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; May 2021 - Sept 2021">
                        <EuiLink href={"/research/5"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>4) Concrete compressive strength Prediction using Modified Dimensional Analysis,
                       Artificial Neural Networks and Machine Learning</b> </EuiText>}
                    titleSize="xs"
                    description="ASCE Journal of Materials in Civil Engineering (Under preparation) &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Dec 2020 - Aug 2020">
                        <EuiLink href={"/research/6"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    <EuiText><h3><font face='Segoe UI'> Conference Papers</font></h3></EuiText>
                    <EuiSpacer size='l' />
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>1)	A Deep Learning-Based Transfer Learning Approach for Bird Species Classification</b> </EuiText>}
                    titleSize="xs"
                    
                    description=" May 2020 – December 2020">
                        <EuiLink href={"/research/7"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>2)	Camelot: AI Powered Campaign Management System</b> </EuiText>}
                    titleSize="xs"
                    description="IEEE : GCAT (Global Conference of Advanced Technology) -2021 (Accepted)&emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Jan 2021 - June 2021">
                        <EuiLink href={"/research/8"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' />
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>3)	Deep Learning based Indian Vehicle Detection and Monitoring System</b> </EuiText>}
                    titleSize="xs"
                    description="Springer - Artificial Intelligence Review (Under preparation) &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Jan 2021 - June 2021">
                        <EuiLink href={"/research/9"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' /> 
                    <EuiText><h3><font face='Segoe UI'> Research Book Chapter </font></h3></EuiText>
                    <EuiSpacer size='l' />
                    
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>1) Intelligent Image Retrieval System Using Deep Neural Networks</b> </EuiText>}
                    titleSize="xs"
                    description="Springer - Artificial Intelligence Review (Under preparation) &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Dec 2020 – May 2021">
                        <EuiLink href={"/research/10"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' /> 
                    <EuiText><h3><font face='Segoe UI'> Discussion Paper </font></h3></EuiText>
                    <EuiSpacer size='l' />
                    <EuiCard
                    image={
                        <div>
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
                        </div>
                      }
                    textAlign="left"
                    title={<EuiText><b>1) Discussion of “Improvement in Estimating Durations for Building Projects Using Artificial Neural Network and Sensitivity Analysis" (ASCE)</b> </EuiText>}
                    titleSize="xs"
                    description="  July 2021 – Aug 2021">
                        <EuiLink href={"/research/11"}>Read More</EuiLink>
                    </EuiCard>
                    <EuiSpacer size='l' /> 
                    
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Research }