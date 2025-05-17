
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";





const Footer = () => {
  
    return (
        <div>
    <footer className=" pb-3 w-full footer-center bg-gray-800 text-primary-content ">
  <div className="flex flex-col gap-4">
  <aside>
<img className="mx-auto my-2" src="https://img.icons8.com/?size=80&id=57SgDS4Ys9MV&format=png&color=FFFFFF" alt="" />

   
    <p className="font-bold text-2xl">
      Quora BD  Ltd.
    </p>
    < p className="text-xl my-2">  Providing Shawon tech since 2001</p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a target="blank" href="https://github.com/Shawon55660">
      <ImGithub size={30} />
      </a>
      <a target="blank" href="https://www.linkedin.com/in/shawon-ahmed-shadhin-4b091b1a4/">
      <FaLinkedin  size={30}/>
       
      </a>
      
    </div>
   
  </nav>
  </div>


 
</footer>
        </div>
    );
};

export default Footer;