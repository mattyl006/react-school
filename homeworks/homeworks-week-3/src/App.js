import React from 'react';
// eslint-disable-next-line
import {ButtonClass, InputClass, NavButtonClass, TextareaClass} from 'components/class';
import {Button, Input, Textarea} from 'components/function';
import CardClass from 'components/class/CardClass/CardClass';
import Card from 'components/function/Card';
import Menu from 'components/function/Menu/Menu';
import MenuLink from 'components/function/MenuLink';
import {H1, H2, H3, Section, Article, MainDiv} from 'StyledApp';
import NavButton from 'components/function/NvButton';
import Employees from 'components/function/Employees';
import employeesData from 'employeesData';

function App() {

    const [menuDisplay, setMenuDisplay] = React.useState(true);

    const toggleMenuDisplay = () => {
        const newDisplay = !menuDisplay;
        setMenuDisplay(newDisplay);
    };

    return (
        <MainDiv>
            {/*<NavButtonClass toggleMenu={toggleMenuDisplay} />*/}
            <NavButton toggleMenu={toggleMenuDisplay} />
            <Menu menuDisplay={menuDisplay}>
                <MenuLink to="#" isActive>
                    Home
                </MenuLink>
                <MenuLink to="#section1">
                    Modifiable Button
                </MenuLink>
                <MenuLink to="#section2" >
                    Input and Textarea
                </MenuLink>
                <MenuLink to="#section3">
                    Card
                </MenuLink>
            </Menu>
            <H1>
                React School - Homeworks Week III
            </H1>
            <Section id="section1">
                <H2>
                    Modifiable Button
                </H2>
                <Button color='silver' bgColor='midnightBlue'>
                    Click me
                </Button>
                <ButtonClass color='englishViolet'>
                    Click me (class ver.)
                </ButtonClass>
            </Section>
            <Section id="section2">
                <H2>
                    Input and Textarea
                </H2>
                <InputClass borderSize='2px' bgColor='greenSea'
                            borderRadius='8px' borderColor='silver'>
                    Class Input
                </InputClass>
                <Input color='silver' bgColor='midnightBlue'
                       borderSize='2px' borderRadius='8px' borderColor='asbestos'>
                    Hook Input
                </Input>
                <Textarea borderSize='4px' borderRadius='8px' borderColor='silver'>
                    Textarea text.
                </Textarea>
                <TextareaClass color='silver' bgColor='midnightBlue'
                               borderSize='4px' borderRadius='8px' borderColor='asbestos'>
                    Class Textarea text.
                </TextareaClass>
            </Section>
            <Section id="section3">
                <H2>
                    Card Component
                </H2>
                <Article>
                    <H3>
                        Class
                    </H3>
                    <CardClass />
                </Article>
                <Article>
                    <H3>
                        Hook
                    </H3>
                    <Card />
                </Article>
            </Section>
            <Section id="section4">
                <H2>
                    Employees
                </H2>
                <Employees data={employeesData}/>
            </Section>
        </MainDiv>
    );
}

export default App;
