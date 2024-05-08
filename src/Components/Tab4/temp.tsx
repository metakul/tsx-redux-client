
import { Button, Container } from '@mui/material';
import SocialProfiles from '../SocialProfile';
import { NavLink as RouterLink } from "react-router-dom";

const Tab4 = () => {

  return (
    <Container className="">
      <div className=" flex flex-col justify-center items-center bg-gray-100">
        <img src="img/25.png" alt="Logo" className="object-cover w-40 h-40 mb-8 rounded-full" />
        <h1 className="text-4xl font-bold mb-4">Metaverse, On a click.</h1>
        <p className="text-lg mb-8 px-4 md:px-0">We're working hard to bring you something awesome. Stay tuned!</p>
        <div className="flex justify-center items-center space-x-4">
          <SocialProfiles/>
           </div>
           <Button variant='contained' sx={{
            m:4
           }}
           component={RouterLink}
                to={"/mint"}>

            Claim Free Nft Here
           </Button>
      </div>
    </Container>
  );
};

export default Tab4;