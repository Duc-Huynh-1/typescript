import React from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag, Button } from "antd";

const Home = () => {
  return (
    <div>
      <h1>My Name: LE DUC HUYNH PH29106</h1>
      <Link to={`/products`}>
        <Button type="primary">Products</Button>
      </Link>
      <Link to={`/signin`}>
        <Button type="primary">Sign IN</Button>
      </Link>
      <Link to={`/signup`}>
        <Button type="primary">Sign UP</Button>
      </Link>

      <Link to={`/admin/products`}>
        <Button type="primary">AdminProducts</Button>
      </Link>
    </div>
  );
};

export default Home;
