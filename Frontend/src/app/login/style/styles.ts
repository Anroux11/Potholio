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
  `,
  input: css`
    width: 300px;
    border-color: grey;
    background: #0b192c;
    &:hover {
      border-color: #ff6500;
      background-color: #0b192c !important;
    }
  `,
  flex: css`
    justify: space-between;
    align: center;
  `,
  //   heading: css`
  //     justify-content: center;
  //     align-items: center;
  //     font-size: 35px;
  //     padding: 1rem;
  //     color: white;
  //   `,
  //   input: css`
  //     width: 300px;
  //     background: lightgrey;
  //     &:hover: {
  //       background-color: lightgrey;
  //     }
  //   `,
  //   checkbox: css`
  //     color: white;
  //     text-align: -webkit-center;
  //   `,
  //   link: css`
  //     color: lightgreen;
  //   `,
  //   flex: css`
  //     justify: space-between;
  //     align: center;
  //   `,
});
