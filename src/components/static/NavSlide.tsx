import styled from "styled-components";
import NavComp from "./NavComp";

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cumque nesciunt vel! Quasi expedita veritatis dignissimos, officia, impedit tempore veniam doloremque illum mollitia ipsum nostrum debitis aut animi quod fugiat fuga cum illo similique nihil obcaecati a corporis amet aperiam? Consectetur eos, libero animi aut ducimus cupiditate fugit, provident doloribus ipsam dignissimos debitis impedit expedita quis autem. Iusto nesciunt voluptatibus molestiae minima sint, veritatis nihil aut pariatur aspernatur officia voluptate, perspiciatis architecto rerum placeat magnam dolorum deleniti impedit laudantium rem, tempora cum voluptates provident praesentium! Esse illum dolores sequi eligendi doloremque minus distinctio voluptatem iusto architecto provident! Molestiae, similique natus.

const NavSlide = () => {
  return (
    <Container>
      <NavComp bg="i" text="All" />
      <NavComp text="Start" />
    </Container>
  );
};

export default NavSlide;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
