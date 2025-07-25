import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  split: css`
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
  `,
  left: css`
    left: 0;
    background-color: 0B192C;
  `,
  right: css`
    right: 0;
    background-color: #0b192c;
  `,
  splitLeft: css`
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    left: 0;
    background-image: linear-gradient(
        rgba(181, 179, 179, 0.6),
        rgba(8, 8, 8, 0.8)
      ),
      url("/Landingpage.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  splitRight: css`
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    right: 0;
    background-color: #0b192c;

    @media (max-width: 768px) {
      width: 100%;
      right: 0;
      left: 0;
    }
  `,
  centered: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  `,
  subHeading: css`
    color: #ff6500;
  `,
  page: css`
    height: 100%;
    width: 100%;
    align-content: center;
  `,
  form: css`
    align-items: center;
    justify-items: center;
    justify-content: center;
  `,
  formContent: css`
    align-items: center;
    justify-items: center;
    justify-content: center;
  `,
  heading: css`
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 1rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  `,
  input: css`
    width: 300px;
    border-color: grey;
    background: #0b192c;
    &:hover {
      background-color: #0B192C !important;
    }
      &:active {
      background-color: #0B192C !important;
    }
      &:focus {
      background-color: #0B192C !important;
    }

    @media (max-width: 480px) {
      width: 300px;
    }

    @media (max-width: 360px) {
      width: 200px;
    }
  `,
  flex: css`
    justify: space-between;
    align: center;
  `,
  link: css`
    color: #ff6500;
  `,
  mobileLogo: css`
    display: none;
    text-align: center;
    padding: 20px 0;
    background-color: #0b192c;

    @media (max-width: 768px) {
      display: block;
      margin-bottom: 20px;
    }
  `,
  logoImage: css`
    max-height: 170px;
    width: auto;

    @media (max-width: 480px) {
      max-height: 120px;
    }

    @media (max-width: 360px) {
      max-height: 100px;
    }
  `,

  logoText: css`
    color: #ff6500;
    font-size: 24px;
    font-weight: bold;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  `,
});
