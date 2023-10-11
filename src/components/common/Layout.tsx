import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <Holder>
        <Sider />
        <Hold>
          <File>
            <Outlet />
          </File>
        </Hold>
      </Holder>
    </div>
  );
};

export default Layout;

const File = styled.div`
  width: calc(100% - 80px);
  display: flex;
`;

const Hold = styled.div`
  width: calc(100%);
  display: flex;
  justify-content: flex-end;
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
`;
