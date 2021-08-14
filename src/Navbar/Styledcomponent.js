import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LS = {};

LS.StyledLink = styled(Link)`
    color: #FFF;

`
export const SettingsMenu = styled.div`
    position: absolute;
    width: 90%;
    max-width: 350px;
    max-height: ${(props)=> props.height ? "450px" : "0"};
    background-color: #fff;
    border: 1px  solid #ccc;
    box-shadow:0 0 10px  rgba(0, 0, 0, ,0.6);
    border-radius: 4px;
    overflow: hidden;
    top: 98%;
    right: 3%;
    transition: max-height 0.3s;
`