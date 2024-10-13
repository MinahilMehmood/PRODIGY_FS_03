import styled from 'styled-components';
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vh;
    height: 100vh;
`

const Success = () => {
    return (
        <Wrapper>
            Your order has been placed!
        </Wrapper>
    )
};

export default Success;
