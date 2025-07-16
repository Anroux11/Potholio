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
  dashboardContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
  `,
  summaryRow: css`
    width: 100%;
    margin-bottom: 24px;
  `,
  quickActionsRow: css`
    width: 100%;
    margin-bottom: 24px;
  `,
  quickActionButton: css`
    width: 100%;
  `,
  incidentCard: css`
    width: 100%;
  `,
  summaryCard: css`
    h3 {
      margin-bottom: 8px;
    }
    p {
      margin: 0;
    }
    .count {
      font-size: 24px;
      font-weight: bold;
    }
  `,
});
