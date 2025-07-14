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
  `,
  centered: css`
    align-items: center;
    justify-items: center;
    justify-content: center;
  `,
  heading: css`
    justify-content: center;
    align-items: center;
    font-size: 35px;
    padding: 1rem;
    color: white;
  `,
  input: css`
    width: 300px;
    background: lightgrey;
    &:hover: {
      background-color: lightgrey;
    }
  `,
  checkbox: css`
    color: white;
    text-align: -webkit-center;
  `,
  link: css`
    color: lightgreen;
  `,
  flex: css`
    justify: space-between;
    align: center;
  `,
});
