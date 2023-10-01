import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: var(--background-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: var(--text-color);
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color);
  }
`;
