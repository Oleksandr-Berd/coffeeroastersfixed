import styled from "@emotion/styled";

export const CommonCon = styled.div`
width: calc(100% + 24px * 2);

transform: translateX(-24px);

padding-top: 80px;
padding-bottom: 79px;

margin-bottom: 120px;

text-align: center;

background-color: #2c343e;
color: #fefcf7;

border-radius: 10px;


@media (min-width: 768px){
    width: calc(100% + 1px);

    transform: translateX(-40px);

    padding-top: 97px;
    padding-bottom: 70px;
    padding-left: 40px;
    padding-right: 39px;

    margin-bottom: 144px;

    text-align: left;

    & > ul{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
}
`

export const Item = styled.li`
&:not(:last-child){
    margin-bottom: 56px;

    @media (min-width: 768px){
        margin-bottom: 0;
    }
}
`

export const Count = styled.h2`
margin-bottom: 24px;

font-family: "Frau";
font-size: 72px;
color: #fdd6ba;

@media (min-width: 768px){
    margin-bottom: 42px;
}
`

export const Title = styled.h3`
margin-bottom: 24px;

font-family: "Frau";
font-size: 28px;
line-height: 1.14;

color: #fefcf7;

@media (min-width: 768px){
    width: 160px;
    
    margin-bottom: 38px;
}
`

export const Body = styled.p`
width: 300px;

margin-left: auto;
margin-right: auto;

font-family: "Bar";
font-size: 15px;
line-height: 1.67;

color: #fefcf7;

@media (min-width: 768px){
    width: 210px;
    
    margin: 0;
    }
`