import React from 'react';
import Article from 'components/class/CardClass/styled-components/Article';
import TopDiv from 'components/class/CardClass/styled-components/TopDiv';
import Avatar from 'components/class/CardClass/styled-components/Avatar';
import TitleDiv from 'components/class/CardClass/styled-components/TitleDiv';
import Header from 'components/class/CardClass/styled-components/Header';
import Subtitle from 'components/class/CardClass/styled-components/Subtitle';
import Button from 'components/class/CardClass/styled-components/Button';
import FoodImg from 'components/class/CardClass/styled-components/FoodImg';
import Describe from 'components/class/CardClass/styled-components/Describe';
import BottomDiv from 'components/class/CardClass/styled-components/BottomDiv';
import LeftIconsDiv from 'components/class/CardClass/styled-components/LeftIconsDiv';
import More from 'components/class/CardClass/styled-components/More';
import P from 'components/class/CardClass/styled-components/P';

import paella from '../../../assets/paella.jpg';

class CardClass extends React.Component {
    render() {
        return (
            <Article>
                <TopDiv>
                    <Avatar>
                        R
                    </Avatar>
                    <TitleDiv>
                        <Header>
                            Shrimp and Chorizo Paella
                        </Header>
                        <Subtitle>
                            September 14, 2016
                        </Subtitle>
                    </TitleDiv>
                    <Button menu>
                        {/*menu button*/}
                    </Button>
                </TopDiv>
                <FoodImg src={paella}  alt="Food."/>
                <Describe>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                    Add 1 cup of frozen peas along with the mussels, if you like.
                </Describe>
                <BottomDiv>
                    <LeftIconsDiv>
                        <Button heart>
                            {/*heart icon*/}
                        </Button>
                        <Button share>
                            {/*share icon*/}
                        </Button>
                    </LeftIconsDiv>
                    <Button arrow>
                        {/*arrow icon*/}
                    </Button>
                </BottomDiv>
                <More>
                    <P>
                        Method:
                    </P>
                    <P>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </P>
                    <P>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.
                        Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,
                        6 to 8 minutes. Transfer shrimp to a large plate and set aside,
                        leaving chicken and chorizo in the pan.
                        Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring
                        often until thickened and fragrant, about 10 minutes.
                        Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </P>
                    <P>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers,
                        and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                        Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice,
                        and cook again without stirring, until mussels have opened and rice is just tender,
                        5 to 7 minutes more. (Discard any mussels that don’t open.)
                    </P>
                    <P>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </P>
                </More>
            </Article>
        );
    }
}

export default CardClass;