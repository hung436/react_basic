import React, { useState } from 'react';
import './SibarAdmin.scss';
import {
  AiOutlineLeftCircle,
  AiFillDashboard,
  AiFillSetting,
} from 'react-icons/ai';
import { FaUserFriends, FaProductHunt } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';
import { FcShipped } from 'react-icons/fc';
import { useHistory, Link } from 'react-router-dom';
const SibarAdmin = () => {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  console.log(history);

  const Menus = [
    { title: 'Dashboard', src: AiFillDashboard, path: '/admin' },

    { title: 'Category', src: BiCategoryAlt, path: '/admin/category' },
    { title: 'Product', src: FaProductHunt, path: '/admin/product' },
    { title: 'Order', src: FcShipped, path: '/admin/order' },

    { title: 'User', src: FaUserFriends, path: '/admin/user' },
    { title: 'Setting', src: AiFillSetting, path: '/admin/setting' },
  ];
  const handleClick = (nav) => {
    history.push(nav);
  };
  return (
    <div className={`wrap-sibar ${!open && 'handle-width'} d-none d-md-block`}>
      <AiOutlineLeftCircle
        size={'20px'}
        className={`icon-wrap ${!open && 'handle'}`}
        onClick={() => setOpen(!open)}
      />

      <div className="d-flex align-items-center">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/logo.png"
            alt=""
          />
        </Link>
        <h1 className={!open && `handle-scale`}>HTH ADMIN</h1>
      </div>
      <ul className="pt-3">
        {Menus.map((item, index) => {
          const CompoName = item.src;
          return (
            <li
              active={true}
              key={index}
              onClick={() => handleClick(item.path)}
            >
              <CompoName size={'25px'} />

              <span className={!open && 'd-none'}>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SibarAdmin;
