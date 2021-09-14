import React from 'react';
import {ButtonClass, InputClass, TextareaClass} from 'components/class';
import {Button, Input, Textarea} from 'components/function';
import CardClass from 'components/class/CardClass/CardClass';
import Card from 'components/function/Card';
import Menu from 'components/function/Menu/Menu';
import MenuLink from 'components/function/MenuLink';
import {H1, H2, H3, Section, Article} from 'StyledApp';

function App() {

    return (
        <div>
            <Menu>
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
        </div>
    );
}

export default App;
