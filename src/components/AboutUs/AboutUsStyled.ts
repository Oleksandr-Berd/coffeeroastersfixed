import styled from "@emotion/styled";

type StyledProps = {
    bg: string;
}

export const CommonCon = styled.div<StyledProps>`
padding-top: 111px;
padding-bottom: 87px;
padding-left: 24px;
padding-right: 24px;

background: url(${props => props.bg});
background-size: cover;

border-radius: 10px;
`