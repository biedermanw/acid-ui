import { FooterContainer } from "./Footer.styles";

export type FooterProps = {
  links?: { text: string; url: string }[];
};

const Footer: React.FC<FooterProps> = ({ links = [] }) => {
  return (
    <FooterContainer>
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.text}
        </a>
      ))}
      &copy; {new Date().getFullYear()} All rights reserved. | Developed by{" "}
      <a
        href="https://your-website.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Your Name
      </a>
    </FooterContainer>
  );
};

export default Footer;
