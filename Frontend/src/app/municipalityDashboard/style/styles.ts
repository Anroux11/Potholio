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
    objectfit: contain;
  `,
  headerTitle: css`
    padding: 0;
    background: colorBgContainer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
//   title: css`
//     margin: 0;
//     font-size: clamp(1.2rem, 4vw, 1.5rem);
//     white-space: nowrap;
//     overflow: hidden;
//     textoverflow: ellipsis;
//   `,
});
