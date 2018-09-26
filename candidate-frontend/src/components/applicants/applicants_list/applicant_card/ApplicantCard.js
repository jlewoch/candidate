import React from 'react';

const ApplicantCard = () => {
    const Container = styled.div.attrs({
        id:{id},
        draggable: true
      })`
        diplay:flex;
        flex-direction: column;
        box-shadow: #9e9e9e 2px 3px 9px;
        margin: 1rem;
        transition: .2s; 
        background: white;
        border-radius: 12px;
        :hover {
          cursor: pointer;
          transform: scale(1.02);
    
        }
    `
    return (
        <Container>
            
        </Container>
    );
};

export default ApplicantCard;