import { Link } from "react-router-dom";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IPRoduct } from "../../interface/product";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminProduct = () => {
  const [data, setData] = useState<IPRoduct[]>([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then(({ data }) => {
      setData(data);
    });
  }, []);

  const deletePro = (id: number) => {
    const tb = window.confirm("ban co muon  delete");
    if (tb) {
      axios.delete(`http://localhost:3000/products/${id}`).then(() => {
        setData(data.filter((pro) => pro.id !== id));
        alert("Delete Product successfully");
      });
    }
  };

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
          <Button type="primary" danger onClick={() => deletePro(record.id)}>
            Delete
          </Button>
          <Link to={`/admin/products/edit/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>AdminProduct</h1>
      <Link to={`/admin/products/add`}>
        <Button type="primary">Add</Button>
      </Link>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AdminProduct;
