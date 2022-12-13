import { Layout } from "antd";

const SideBar = ({ menu }) => {
  return (
    <Layout.Sider
      theme="light"
      breakpoint={"lg"}
      collapsedWidth={0}
      width={260}
      style={{
        overflow: 'auto',
        height: '94vh',
        position: 'fixed',
        left: 0,
        top: 48,
        boxShadow: '0 0 8px rgb(115, 129, 121)'
      }}
    >
      {menu}
    </Layout.Sider>
  );
};

export default SideBar;