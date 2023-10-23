import styled from '@emotion/styled';


export const Container = styled.section`
padding: 40px 0;

@media screen and (min-width: 1280px) {
padding: 80px 0;

}
`


export const Title = styled.h1`
font-size: 24px;
font-weight: 700;
text-align: center;
/* margin-top: 40px; */
margin-bottom: 24px;

@media screen and (min-width: 768px) {
    font-size: 48px;
    /* margin-top: 80px; */
    margin-bottom: 40px;
}

@media screen and (min-width: 1280px) {
    margin-bottom: 60px;
    
}

`