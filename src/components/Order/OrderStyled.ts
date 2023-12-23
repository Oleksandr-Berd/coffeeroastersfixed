import styled from "@emotion/styled";

type StyleProps = {
    isOptions:boolean;
}

type ActiveProps = {
    status: any
}

export const CommonList = styled.ul`
margin-bottom: 120px;
`

export const Item = styled.li<StyleProps>`
&:not(:last-child){
    margin-bottom: 110px;
}

& img{
    transform: ${props => props.isOptions ? "rotate(180deg)" : 0};
}
`

export const TitleCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

margin-bottom: 32px;
`

export const ToggleBtn = styled.button`
background-color: transparent;

border: none;
`

export const Title = styled.h2`
width: 200px;

font-family: "Frau";
font-size: 24px;
line-height: 1.17;

color: #83888f;
`

export const OptionsItem = styled.li<ActiveProps>`
padding-top: 24px;
padding-bottom: 24px;
padding-left: 25px;
padding-right: 25px;

background-color: ${props => props.status === "active" ? "#0e8784" : "#f4f1eb"} ;
color:${props => props.status === "active" ? "#f4f1eb" : "#333d4b"};

border-radius: 8px;

&:not(:last-child){
    margin-bottom: 16px;
}
`

export const OptionsItemTitle = styled.h3`
margin-bottom: 8px;

font-family: "Frau";
font-size: 24px;
line-height: 1.33;

`

export const OptionsItemBody = styled.p`
width: 240px;

font-family: "Bar";
font-size: 16px;
line-height: 1.63;
`