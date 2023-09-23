import { Link } from "react-router-dom";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { IPRoduct } from "../interface/product";

const ListProduct = () => {
  const [data, setData] = useState<IPRoduct[]>([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then(({ data }) => {
      setData(data);
    });
  }, []);

  const columns: ColumnsType<IPRoduct> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/products/${record.id}`}>
            <Button type="primary">Detail</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>List Product</h1>
      <Link to={`/admin/products`}>
        <Button type="primary">Admin</Button>
      </Link>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ListProduct;
