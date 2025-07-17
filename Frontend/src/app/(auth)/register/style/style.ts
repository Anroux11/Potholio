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
    background-color: #111;
  `,
  right: css`
    right: 0;
    background-color: red;
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
    background-color: #111;
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
    background-color: red;
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
  heading: css`
    align-items: center;
    text-align: center;
    font-size: 35px;
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
    width: 300px !important;
    border-color: grey;
    background: #0b192c;
    &:hover {
      background-color: #0b192c !important;
    }
    &:active {
      background-color: #0b192c !important;
    }
    &:focus {
      background-color: #0b192c !important;
    }

    @media (max-width: 480px) {
      width: 300px;
    }

    @media (max-width: 360px) {
      width: 200px;
    }
  `,
  select: css`
    width: 300px;
    border-color: grey;
    background: #0b192c;
    &:hover {
      background-color: #0b192c !important;
    }
    &:active {
      background-color: #0b192c !important;
    }
    &:focus {
      background-color: #0b192c !important;
    }

    @media (max-width: 480px) {
      width: 300px;
    }

    @media (max-width: 360px) {
      width: 200px;
    }
  `,
  municipalitySelect: css`
    width: 300px !important;
    max-width: 300px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  flex: css`
    justify: space-between;
    align: center;
  `,
});
