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


class Education extends React.Component {
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
        }
    }

    render() {  const workList = [
        { title:'Academic Background',
          children: (
            <EuiCard
                textAlign="left"
                title={<EuiText>Bachelor of Technology in Electronics and Telecommunications Engineering  </EuiText>}
                titleSize="s"
                description={<EuiText size='m'> 2018-2022 </EuiText>}>
        <EuiText size="m">
    <ul><StyledText/>
    
      <li><b>College</b> - Vishwakarma Institute of Information Technology </li>
      <li><b>University</b> - 	Savitribai Phule Pune University (SPPU)</li>
      <li><b>Grade</b> - 8.9 GPA</li>
      <li><b>Areas of Interest</b> - Machine Learning, Deep Learning, Applications, Computer Vision, NLP</li>
    </ul>
  </EuiText>
                   
                </EuiCard>),
        },
    
        { title:'Achievements ',
        children: (
          <EuiCard
              textAlign="left"
>
      <EuiText size="m">
  <ul>
  
    <li>Won Kaggle Bronze Medal </li>
    <li>Winner of VishwaCTF-2019</li>
    <li>1st in School to score 98/100 in Mathematics and Board Topper</li>
    <li>In 1% Selected from College for International Research Internship</li>
    <li>Winner of EESA- NIRMAAN POC competition</li>
    <li>Achieving University and Industry sponsored projects</li>
    <li>In 1% Selected from College for International Research Internship</li>
    <li>Acceptance of Indian patent</li>
  </ul>
</EuiText>
                 
              </EuiCard>),
      },

      {
        title: 'Institutional Service 1',
        children: (
            <EuiCard
            textAlign="left"
            title={<EuiText>1)	Machine Learning Forum - Department Head</EuiText>}
            titleSize="xs"
            description={<EuiText size='s'> 
            </EuiText>}>
                <EuiText size='s'><b>Key Responsibilities</b> 
                <StyledText><ul className="skills-list">
                {this.state.Institution1key && this.state.Institution1key.map((p, i) => <li key={i}>{p}</li>)}
                </ul></StyledText>
                <b>Value Additions</b>
                <StyledText><ul className="skills-list">
                {this.state.Institution1value && this.state.Institution1value.map((p, i) => <li key={i}>{p}</li>)}
                </ul></StyledText></EuiText>
                
            
            </EuiCard>
        ),
        },
        {
            title: 'Institutional Service 2',
            children: (
                <EuiCard
                textAlign="left"
                title={<EuiText>2)	Founder & Core Member CyberCell VIIT</EuiText>}
                titleSize="xs"
                description={<EuiText size='s'> 
                </EuiText>}>
                    <EuiText size='s'><b>Key Responsibilities</b> 
                    <StyledText><ul className="skills-list">
                    {this.state.Institution2key && this.state.Institution2key.map((p, i) => <li key={i}>{p}</li>)}
                    </ul></StyledText>
                    <b>Value Additions</b>
                    <StyledText><ul className="skills-list">
                    {this.state.Institution2value && this.state.Institution2value.map((p, i) => <li key={i}>{p}</li>)}
                    </ul></StyledText></EuiText>
                    
                
                </EuiCard>
            ),
            },

            {
                title: 'Institutional Service 3',
                children: (
                    <EuiCard
                    textAlign="left"
                    title={<EuiText>3)	Active Member at Advanced Robotics Clubs</EuiText>}
                    titleSize="xs"
                    description={<EuiText size='s'> 
                    </EuiText>}>
                        <EuiText size='s'><b>Key Responsibilities</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.Institution3key && this.state.Institution3key.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.Institution3value && this.state.Institution3value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText></EuiText>
                        
                    
                    </EuiCard>
                    
                ),
                },

                
            {
                title: 'COMMUNITY SERVICE',
                children: (
                    <EuiCard
                    textAlign="left"
                    title={<EuiText>	NSS CLUB: Tree plantation drive, blood donation camps, Education camps</EuiText>}
                    titleSize="l"
                    description={<EuiText size='l'> 
                    </EuiText>}>
                    </EuiCard>
                    
                ),
                },
    ]
    

       return (
            <>
                <EuiPageTemplate>
                    <EuiPageHeader><Header /></EuiPageHeader>
                <EuiFlexGroup gutterSize='xl'>
                <EuiFlexItem>
                        <EuiSpacer />
                        <EuiText><h2><font face='Segoe UI'>Academic Equity</font></h2></EuiText>
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

export { Education }