import Responses from "./Responses";

const Page = () => {
  const adminPassword = process.env.ADMIN_PASSWORD;
 
  return(
    <Responses adminPassword={adminPassword}/>
  )
};

export default Page;
