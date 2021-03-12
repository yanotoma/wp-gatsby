import styled from 'styled-components';

const ContainerLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 1200px) {
    max-width: 1132px;
  }
`;

export default ContainerLayout;
