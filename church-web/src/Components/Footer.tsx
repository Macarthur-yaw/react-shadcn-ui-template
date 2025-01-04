import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import ImageOne from "../assets/churchlogo.png"
export default function Footer() {
  return (
    <footer className="bg-[#403765] text-white py-8">
      <div className="container mx-auto  lg:px-16">
        <div className="flex flex-row px-6  lg:flex-row justify-between items-center lg:items-start gap-6">
          
          <div className="flex flex-col md:items-start items-start">
            <img src={ImageOne} className="w-12 rounded-full"/>
          <span className="text-left md:text-left">
            <h2 className="text-2xl font-semibold">Church of Christ</h2>
            <p className="text-sm mt-2">
              Bringing faith, hope, and love to the community.
            </p>
          </span>
</div>
         
          <div className="flex  lg:flex-row items-center gap-6">
            <ul className="space-y-2 text-sm text-right  lg:text-left">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sermons
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        
          
        </div>

  
        <div className="border-t border-gray-500 mt-6 pt-4 flex flex-row item-center justify-between  text-center text-sm">
          <span className="font-medium text-sm">
            &copy; 2025 Church of Christ. All Rights Reserved.
          </span>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook fontSize="medium" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter fontSize="medium" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram fontSize="medium" />
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}
