import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon } from '@elastic/eui';
import { Header } from './components/header';
import { Footer } from './components/footer';
import profilePhoto from '../photos/shubham-photo.png'

class Publications extends React.Component {
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
                        <EuiText><h2><font face='Segoe UI'>Research Equity</font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h3><font face='Segoe UI'>Patents</font></h3></EuiText>
                        <EuiSpacer size='m' />
                        <ul>
              <li><EuiText><p>1)	Indian Patent – “Design and  Development  of  Application  to  Predict Workability and Slump Value Using AI Techniques”. Application Number – 202121022677, Journal Number – 48/2020, Journal Date – 27/11/2020)</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>2)	Indian Patent – “Universal Hybrid Model to Predict Mix Based Compressive Strength and Allied Mechanical Properties of Concrete” Application Number
              – 202121022677, Journal Number – 26/2021, Journal Date – 25/06/2021) 
              </p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>3)	Indian Patent – “ConcreteGAN: Hybrid approach for AI based  Concrete  mix  data generation” (Under Preparation)
                <EuiSpacer></EuiSpacer>
              <EuiText><h3><font face='Segoe UI'>Publications</font></h3></EuiText>
                        <EuiSpacer size='m' />
              </p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>1)	Choudhary Tejalal, Shubham Gujar, Kruti Panchal, Vipul Mishra, and Anurag Goswami. "A Deep Learning-Based Transfer Learning Approach for the Bird Species Classification." In International Advanced  Computing  Conference,  pp. 43-52. Springer, Singapore, 2020</p></EuiText></li><EuiSpacer size='s' />
              
              <li><EuiText><p>2)	Shubham Gujar, Rutuparn Pawar, Yogesh Dandawate. IET Book Chapter in Computer Vision and Recognition Systems Using Machine and Deep Learning Approaches (CVRS-MDA) on “Intelligent Image retrieval system using Deep Neural Networks” – 2021

              </p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>3)	Kulkarni P, Bhoj R, R Saurabh, Shubham Gujar, Devika Verma, Rakesh Ranjan. IEEE, 2021 GLOBAL CONFERENCE OF  ADVANCEMENT  IN  TECHNOLOGY  (GCAT) on “Camelot: AI Powered Campaign Management System” – 2021</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>4)	Choudhary Tejalal, Anurag Goswami, Shubham Gujar, Jagannathan Sarangapani, and Vipul Mishra. "A selective transfer learning approach for  the classification of COVID-19 CT-SCAN images on point-of-care devices." Elsevier, Computers in Biology and Medicine (Under Preparation)</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>5)	Choudhary, Tejalal, Shubham Gujar, Vipul Mishra, Anurag Goswami, and Jagannathan Sarangapani. "Deep learning methods for skin lesion classification and segmentation: A  comprehensive  survey."  Springer Artificial Intelligence (Under Preparation)</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>6)	Pawar. Nikhil, Kale. Jayesh, Shubham Gujar, Patil. S.V, Dhonde. H.B. “Early Prediction of Characteristic Compressive Strength of Concrete Based on Mix Proportions using Modified  Dimensional  Analysis”  Journal  of  Materials  in  Civil Engineering – (Under preparation).</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>7) Pawar. Nikhil, Shubham Gujar, Kale. Jayesh,  Patil.  S.V.  “Application  of  Modified Dimensional Analysis for Corrosion Prediction Based on Acoustic Emission parameters for Structural Health Monitoring” Journal of Building Engineering – (Under preparation)</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>
               8) Pawar Nikhil, Shubham Gujar, Kale. Jayesh. 2021. Discussion of “Improvement in Estimating Durations for Building Projects Using Artificial Neural Network and Sensitivity Analysis” Journal of  Construction  Engineering and Management – Under Review (Manuscript Number COENG- 11587)
               </p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>9) Suyash Chougule, Shubham Gujar, Rutuparn pawar, Rutuja Pote, “Improved Indian vehicle Detection using Deep Learning”.  Elsevier,  Applied  Intelligence. (Under Preparation)</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>10) Rutuparn Pawar, Shubham Gujar, Yogesh Dandawate, “Classification of Hindustani Musical Raga using 1-D Convolutional Neural  Networks”.  Springer BigDML Conference 2021. (Under Preparation)</p></EuiText></li><EuiSpacer size='s' />
              <li><EuiText><p>11) Shubham Gujar, Rutuparn Pawar, Yogesh Dandawate, “Indian Classical  Notes Classification using Machine Learning:  Comparative  Approach”.  Taylor Francis, Journal of New Music Research 2021. (Under Preparation)</p></EuiText></li><EuiSpacer size='s' />
            </ul>
                </EuiFlexItem>
                </EuiFlexGroup>
                
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Publications }