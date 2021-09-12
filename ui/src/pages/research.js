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
                          <img style={{width: '100%',height: '20vw'}}
                            src="https://source.unsplash.com/400x200/?Nature"
                            alt="Nature"
                            href="/about"
                          />
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
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Research }