import React from "react";
import { Row, Col, Card, Avatar, Button } from 'antd';
import { NavLink } from 'react-router-dom';


const MenuItems = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>
      <NavLink to="/dashboards/analytic">
    <Button type="text" style={{height:"70px"}}>
        HOME
    </Button>
    </NavLink>
<NavLink to="/dashboards/default">
<Button type="text" style={{height:"70px"}}>
LEAGAL REASERCH
    </Button>
    </NavLink>
    <NavLink to='/pages/blog/detail'>
<Button type="text" style={{height:"70px"}}>
Find Lawyers
    </Button>
    </NavLink>
          
    </>
  );
};

export default MenuItems;
