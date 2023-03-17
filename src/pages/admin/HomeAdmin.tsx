import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface DataType {
  key: React.Key;
  username: string;
  phone: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'username',
  },
  {
    title: 'PhoneNumber',
    dataIndex: 'phone',
  },
  {
    title: 'Action',
    dataIndex: 'active',
  },
];

const HomeAdmin = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        setUsers(res.data.slice(0, 10));
        console.log(users);
      })
  }, []) 

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
    <div style={{ marginBottom: 16 }}>
      <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
        Reload
      </Button>
      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
    </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={users} />
  </div>
  )
}

export default HomeAdmin