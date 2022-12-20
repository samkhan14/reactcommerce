import InnerHeader from "../../Components/Inner_Banners/InnerHeader";
import { useProductContext } from "../../contexts/ProductContaxt";


const About = () => {

  const {myname} = useProductContext();

  const heading = {
    name: "About Us",
    slogan: "About",
  };

  return (
    <div>    
      {myname}
      <InnerHeader heading={heading} />    
    </div>
  );
};
export default About;
