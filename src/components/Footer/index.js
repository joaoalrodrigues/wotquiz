import styled from 'styled-components';

const FooterWrapper = styled.footer`
    align-items: center;
    background-color:  ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    padding: 20px;

    img {
        width: 58px;
        margin-right: 23px;
    }

    a {
        color: white;
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
    }

    span {
        text-decoration: underline;
    }
`;

export default function Footer(props) {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
