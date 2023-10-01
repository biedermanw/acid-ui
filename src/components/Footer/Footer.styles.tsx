import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--background-color);
  padding: 10px 0;
  text-align: center;
  color: var(--text-color);
  font-size: 14px;

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
