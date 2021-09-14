import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiText, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiPageTemplate,EuiPageHeader, EuiImage} from '@elastic/eui';
import { Header } from './components/header';
import { Footer } from './components/footer';
import yogesh from '../photos/yogesh-dandawate.png'
import rakesh from '../photos/rakesh-ranjan.png'
import tejal from '../photos/tejalal-choudhary.png'
import hemant from '../photos/hemant-dhonde.png'
import profilePhoto from '../photos/shubham-photo.png'
class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
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
                        <EuiText><h2><font face='Segoe UI'>References</font></h2></EuiText>
                        <EuiSpacer size='m' />
                </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup gutterSize='m' style={{width: '100%', paddingLeft:'15%', paddingRight:'15%'}}>
                    <EuiFlexItem grow={false}><EuiImage
                        size="s"
                        hasShadow
                        src={hemant}
                    /></EuiFlexItem>
                    <EuiFlexItem><EuiText><b>Dr. Hemant B. Dhonde</b><br/>
                    <EuiText size='s'>Ph.D. (University of Houston) (Mentor)<br /> Director, C-Probe technologies, LLP Pune, India. <br />Ex. Research Assistant Professor, University of Houston, US.<br /> M:+91-7774058927 |
                    hbdhonde@gmail.com</EuiText>
                    </EuiText></EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup gutterSize='m' style={{width: '100%', paddingLeft:'15%', paddingRight:'15%'}}>
                    <EuiFlexItem grow={false}><EuiImage
                        size="s"
                        hasShadow
                        src={yogesh}
                    /></EuiFlexItem>
                    <EuiFlexItem><EuiText><b>Dr. Yogesh H. Dandawate</b><br/>
                    <EuiText size='s'>Ph.D. (Professor at Bachelor’s Degree) Dean Quality and Professor Dept. of Electronics & Telecommunications Engineering, Vishwakarma Institute of Information Technology, Pune, India. <br /> yogesh.dandawate@viit.ac.in</EuiText>
                    </EuiText></EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup gutterSize='m' style={{width: '100%', paddingLeft:'15%', paddingRight:'15%'}}>
                    <EuiFlexItem grow={false}><EuiImage
                        size="s"
                        hasShadow
                        src={tejal}
                    /></EuiFlexItem>
                    <EuiFlexItem><EuiText><b>Tejalal Choudhary</b><br/>
                    <EuiText size='s'>Ph.D.(Bennett Univ, India) <br /> PhD Scholar <br />
                    Bennett University <br /> tejalal.choudhary@gmail.com</EuiText>
                    </EuiText></EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup gutterSize='m' style={{width: '100%', paddingLeft:'15%', paddingRight:'15%'}}>
                    <EuiFlexItem grow={false}><EuiImage
                        size="s"
                        hasShadow
                        src={rakesh}
                    /></EuiFlexItem>
                    <EuiFlexItem><EuiText><b>Dr. Rakesh Ranjan</b><br/>
                    <EuiText size='s'>M. S. (SJSU, USA) (Professional Employer) <br /> Director of Innovation at IBM Cloud Integration <br /> Rakesh.Ranjan@sjsu.edu</EuiText>
                    </EuiText></EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { People }