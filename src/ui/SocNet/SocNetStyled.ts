import styled from "@emotion/styled";

export const SocNetBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > li:not(:last-child) {
    margin-right: 24px;
  }

  @media (min-width: 1440px) {
    & img:hover {
      filter: brightness(0) invert(1) sepia(100%) saturate(500%)
        hue-rotate(0deg) grayscale(0) contrast(0.5);
    }
  }
`;
