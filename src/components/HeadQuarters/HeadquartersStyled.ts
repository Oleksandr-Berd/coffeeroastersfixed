import styled from "@emotion/styled";

type StyledProps = {
    img:string
}


export const CommonCon = styled.div`
margin-bottom: 120px;

text-align: center;
`

export const Title = styled.h2`
margin-bottom: 72px;

font-family: "Frau";
font-size: 24px;
line-height: 1.33;
color: #83888F;
`

export const Item = styled.li<StyledProps>`

text-align: center;

&:not(:last-child){
    margin-bottom: 80px;
}



&::before{
    display: inline-block;
    content: url(${props => props.img});

    margin-bottom: 48px;
}

& > h3{
    margin-bottom: 22px;

    font-family: "Frau";
    font-size: 28px;
    line-height: 1.3;
    color: #333D4B;
}

& > address{
width: 160px;

margin-left: auto;
margin-right: auto;

    font-family: "Bar";
    font-style: normal;
    font-size: 16px;
    line-height: 1.75;
    color: #333D4B;
    
}
`