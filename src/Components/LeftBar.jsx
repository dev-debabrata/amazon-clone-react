import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LeftMenuBox, LeftMenuBox2 } from './LeftMenuBox';
import { useContext } from 'react'
// import { LeftBarItem, shopByCategory, ProgramsFeatures, Trending} from '../Details/LeftBarItem'
import Context from "../ContextApi/Context";
import CartContext from "../ContextApi/CartContext";
import { LeftBarItem, ProgramsFeatures, shopByCategory, Trending } from "../Data/data";

const LeftBar = () => {

  const { open, closeButton } = useContext(CartContext);
  // function close(){
  //     let close = document.querySelector(`.leftBar-section`);
  //     let close2 = document.querySelector(`.leftBar-container`);
  //     console.log('close')
  //     close.classList.remove('active')
  //     close2.classList.remove('active')
  // }
  // return (
  //   <>
  //     <div className={`leftBar-section ${open ? "active" : ''}`}>
  //       <div className={`leftBar-container ${open ? "active" : ''}`}>
  //         <div className="leftBar-header top-bottom-padding flexBox">
  //           <div className="avtar-section ">
  //             <AccountCircleIcon />
  //           </div>
  //           <div><span>Hello, sign In</span></div>
  //         </div>
  //         <div className="leftBar-information">
  //           <LeftMenuBox2 title="Trending" listDetail={Trending} />
  //           <LeftMenuBox title='Digital Content And Devices' listDetail={LeftBarItem} />
  //           <LeftMenuBox title='Shop By Category' listDetail={shopByCategory} />
  //           <LeftMenuBox title='Programs & Features' listDetail={ProgramsFeatures} />
  //         </div>

  //         <button className="leftbar-close-btn" onClick={() => closeButton()}>
  //           <CloseIcon className="leftBar-closeIcon" />
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className={`${open ? "fixed inset-0 z-[999] bg-[#000000bd] block" : "hidden"}`}>
        <div className={`fixed top-0 left-0 w-[26rem] bg-white overflow-hidden transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="bg-[#232f3e] sticky left-0 right-0 py-4 px-6 flex items-center gap-3 text-white text-[1.2rem] font-semibold">
            <div className="p-2 leading-4">
              <AccountCircleIcon />
            </div>
            <span>Hello, sign In</span>
          </div>

          <div className="p-4">
            <LeftMenuBox2 title="Trending" listDetail={Trending} />
            <LeftMenuBox title="Digital Content And Devices" listDetail={LeftBarItem} />
            <LeftMenuBox title="Shop By Category" listDetail={shopByCategory} />
            <LeftMenuBox title="Programs & Features" listDetail={ProgramsFeatures} />
          </div>

          <button
            className="absolute top-12 right-0 p-4 bg-transparent border-none text-black hover:text-[#111] cursor-pointer"
            onClick={closeButton}
          >
            <CloseIcon className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );

};

export default LeftBar;

// onClick={toggleButton}
