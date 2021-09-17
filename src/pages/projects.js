import React, { Component, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiButton, EuiButtonEmpty, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiInMemoryTable, EuiCallOut, EuiLoadingSpinner, EuiPageBody, EuiPageContent, EuiPageHeader, EuiCard, EuiImage, EuiIcon ,EuiSteps} from '@elastic/eui';
import { Header } from './components/header';
import { Footer } from './components/footer';
import profilePhoto from '../photos/shubham-photo.png'
import styled from 'styled-components';

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


class Projects extends React.Component {
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
            longTerm: ['Impactful Technocrat', 'Radical Technologies', 'Entrepreneur'],
            Institution1key:['Teaching and mentoring interested individuals','Mentoring multiple students with ML based projects','Learn and guide for NVIDIA student programs','Coordination of hackathons for Inter- college'],
            Institution1value:['Teaching ','Mentoring', 'Teamwork ','Project building'],
            Institution2key:['Teaching and mentoring interested individuals','Coordination of CTF competitions for Inter-college'],
            Institution2value:['Mentoring and Teamwork','Participation in CTF competitions'],
            Institution3key:['Working on ROBOCON competitions','Learning and debugging firmware coding','Application of theory knowledge into practice','Worked on line follower robot, maze runner robot, etc.'],
            Institution3value:['Team-based group learning','Theory to Practice','Participation in Competitions '],
            Project1key:['Custom model using Flickr 8K dataset Application involving Image-to-text','Deployed as Web App using Heroku','Finding similar images by comparing descriptions using Sentence encoder','Achieved a BLEU score of 0.27'],
            Project1value:['Independent Work','Programming'],
            Project2key:['Transfer learning with VGG16 pre- trained model.','Deployed as Web App using Heroku ','88% Classification accuracy','Publicly available Benchmark Dataset'],
            Project2value:['Project Based Learning','AI for Healthcare'],
        }
    }

    render() {  const workList = [
         {
        title: 'Project 1',
        children: (
            <EuiCard
            textAlign="left"
            title={<EuiText>1) Image caption generation using Convolutional Neural Network and Recurrent Neural Network (CNN-RNN)</EuiText>}
            titleSize="xs"
            description={<EuiText size='m'> &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;
            &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;  June 2020 – Sept 2020
            </EuiText>}>
                <EuiText size='s'><b>Key Responsibilities</b> 
                <StyledText><ul className="skills-list">
                {this.state.Project1key && this.state.Project1key.map((p, i) => <li key={i}>{p}</li>)}
                </ul></StyledText>
                <b>Value Additions</b>
                <StyledText><ul className="skills-list">
                {this.state.Project1value && this.state.Project1value.map((p, i) => <li key={i}>{p}</li>)}
                </ul></StyledText></EuiText>
                
            
            </EuiCard>
        ),
        },
        {
            title: 'Project 2',
            children: (
                <EuiCard
                textAlign="left"
                title={<EuiText>2) Pneumonis Detection from X-ray images using Convolutional Neural Networks</EuiText>}
                titleSize="xs"
                description={<EuiText size='m'> &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;
                 &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp;
                 &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp;
                 &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;  Feb 2021 – April 2021
                
                </EuiText>}>
                    <EuiText size='s'><b>Key Responsibilities</b> 
                    <StyledText><ul className="skills-list">
                    {this.state.Project2key && this.state.Project2key.map((p, i) => <li key={i}>{p}</li>)}
                    </ul></StyledText>
                    <b>Value Additions</b>
                    <StyledText><ul className="skills-list">
                    {this.state.Project2value && this.state.Project2value.map((p, i) => <li key={i}>{p}</li>)}
                    </ul></StyledText></EuiText>
                    
                
                </EuiCard>
            ),
            },
,

                
          
    ]
    

       return (
            <>
                <EuiPageTemplate>
                    <EuiPageHeader><Header /></EuiPageHeader>
                <EuiFlexGroup gutterSize='xl'>
                <EuiFlexItem>
                        <EuiSpacer />
                        <EuiText><h2><font face='Segoe UI'>Projects</font></h2></EuiText>
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

export { Projects}