import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon } from '@elastic/eui';
import styled from 'styled-components';
import { Header } from './components/header';
import { Footer } from './components/footer';
import profilePhoto from '../photos/shubham-photo.png'

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
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
class About extends React.Component {
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
            skills: ["Deep learning", "Data Analysis", "Research Machine", "Learning Innovation", "Rational Analytics", "Multi-Disciplinary", "CNN", "AI", "Computer vision"],
            shortTerm: ['MS - Data Science', 'Scholarships & Fellowships', 'Research Experience'],
            midTerm: ['Applied Research', 'Innovations', 'Industry Experience'],
            longTerm: ['Impactful Technocrat', 'Radical Technologies', 'Entrepreneur']
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
                        <EuiText><h2><font face='Segoe UI'>About Me</font></h2></EuiText>
                </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup>
                <EuiFlexItem>
                <EuiSpacer />
                    <EuiText><p>Hello! My name is Shubham Gujar, I develop innovation.</p></EuiText>
                    <EuiSpacer size='m' /><EuiText><h3>Vision</h3>
                    <p>Equity in the field of creative Artificial Wisdom, enabling impactful and sustainable systems.</p></EuiText>
                    <EuiSpacer size='m' /><EuiText><h3>Forte</h3>
                    <StyledText><ul className="skills-list">
                        {this.state.skills && this.state.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul></StyledText>
                    </EuiText>
                </EuiFlexItem>
                    <EuiFlexItem><EuiImage
                        size="l"
                        hasShadow
                        src={profilePhoto}
                    /></EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup gutterSize='xl'>
                <EuiFlexItem>
                <EuiSpacer size='m' /><EuiText><h3>Goals</h3></EuiText>
                <EuiSpacer /><EuiFlexGroup>
                <EuiCard textAlign="left" title="Short Term Goals" description={"(1-3 years)"} titleSize='xs'>
                <EuiText size="s">
                <ul>{this.state.shortTerm && this.state.shortTerm.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
                </EuiText></EuiCard>
                <EuiCard textAlign="left" title="Mid Term Goals" description={"(3-5 years)"} titleSize='xs'>
                <EuiText size="s">
                <ul>{this.state.midTerm && this.state.midTerm.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
                </EuiText></EuiCard>
                <EuiCard textAlign="left" title="Long Term Goals" description={"(5+ years)"} titleSize='xs'>
                <EuiText size="s">
                <ul>{this.state.longTerm && this.state.longTerm.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
                </EuiText></EuiCard>
                </EuiFlexGroup>
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { About }