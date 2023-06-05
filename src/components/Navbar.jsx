import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ icon, title, color, customFunc, dotColor }) => (  
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl items-center p-3 rounded-full hover:bg-light-gray'
    >
      <span  style={{ backgroundColor:dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
      {/* </span> */}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {setActiveMenu, isClicked, currentColor, handelClick, screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  useEffect(()=> {
    if(screenSize <= 900) {
      setActiveMenu(false);
    }else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={() => {
        setActiveMenu((prevActiveMenu) => !prevActiveMenu);
      } }s
      color={currentColor} 
      icon={<AiOutlineMenu />} 
      />

      <div className='flex'>
        <NavButton title="Cart" customFunc={ () => handelClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" customFunc={ () => handelClick('chat')} color={currentColor} icon={<BsChatLeft />}  dotColor='#03C9D7'/>
        <NavButton title="Notification" customFunc={ () => handelClick('notification')} color={currentColor} icon={<RiNotification3Line />} dotColor='#03C9D7'/>
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={ () => handelClick('userProfile')
          }
          >
            <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> { ' ' }
              <span className='text-gray-400 text-14 font-bold'>Khaled</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
        {console.log(isClicked.chat)}
      </div>
    </div>
  )
}

export default Navbar