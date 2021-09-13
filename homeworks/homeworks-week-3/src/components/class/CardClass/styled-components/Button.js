import styled from 'styled-components';
import menuIcon from '../../../../assets/menu.svg';
import heartIcon from '../../../../assets/like.svg';
import arrowIcon from '../../../../assets/arrow.svg';
import shareIcon from '../../../../assets/share.svg';

function iconHandler(menu, arrow, heart, share) {
    if(menu)
        return `url(${menuIcon})`;
    if(arrow)
        return `url(${arrowIcon})`;
    if(heart)
        return `url(${heartIcon})`;
    if(share)
        return `url(${shareIcon})`;
    return 'none';
}

function topHandler(menu, arrow, heart, share) {
    if(menu)
        return '-4px';
    if(arrow)
        return '28px';
    if(heart)
        return '28px';
    if(share)
        return '28px';
    return 'none';
}

function rightHandler(menu, arrow, heart, share) {
    if(menu)
        return '12px';
    if(arrow)
        return '18px';
    if(heart)
        return '300px';
    if(share)
        return '250px';
    return 'none';
}

const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  top: ${({menu, arrow, heart, share}) => topHandler(menu, arrow, heart, share)};
  right: ${({menu, arrow, heart, share}) => rightHandler(menu, arrow, heart, share)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:after {
    content: '';
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    background-image: ${({menu, arrow, heart, share}) => iconHandler(menu, arrow, heart, share)};
  }
`;

export default Button;