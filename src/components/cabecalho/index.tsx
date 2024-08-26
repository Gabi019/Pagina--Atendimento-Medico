import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const CabecalhoEstilizado = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkEstlizado = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <img src={logo} alt="logo da empresa Voll" /> 
            <Container>
                <img src={perfil} alt="perfil do usuário" />
                <LinkEstlizado href="#">Sair</LinkEstlizado>
            </Container>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;