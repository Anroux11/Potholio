import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  imageContainer: css`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: collapsed ? 8px : 16px;
    border-bottom: 1px solid #303030;
    margin-bottom: 8px;
  `,
  image: css`
    transition: all 0.3s ease;
    objectFit: contain;
  `,
});
