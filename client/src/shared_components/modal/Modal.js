import styled from 'styled-components';

export const Modal =  styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: $modalOverlay;
    display: flex;
    justify-content: center;
    align-items: center;
`