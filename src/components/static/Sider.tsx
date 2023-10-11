import styled from "styled-components";
import SiderContent from "./SiderContent";
import { AiFillHome } from "react-icons/ai";
import { BiScreenshot } from "react-icons/bi";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

const Sider = () => {
  return (
    <div>
      <Container>
        <Main>
          <SiderContent icon={<AiFillHome />} title="Home" />
          <SiderContent icon={<BiScreenshot />} title="Shot" />
          <SiderContent
            icon={<MdOutlineSubscriptions />}
            title="Subscription"
          />
          <SiderContent icon={<MdOutlineVideoLibrary />} title="Library" />
        </Main>
      </Container>
    </div>
  );
};

export default Sider;

const Main = styled.div``;
const Container = styled.div`
  width: 80px;
  height: calc(100vh - 60px);
  position: fixed;
`;
