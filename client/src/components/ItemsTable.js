import { Table, Button, Space } from 'antd';
import React, { Component } from 'react';
const axios = require('axios');

const getData = async () => {
    const userInfo = await axios.get('http://localhost:3001/api/userinfo');
}
getData();

let items = [];
const getItems = async () => {
    items = await axios.get('http://localhost:3001/api/products');
    items = items.data;
}
getItems();

const columns = [
    {
        title: 'Image',
        dataIndex: 'thumbnail',
        render: (thumbnail) => {
            return (
                <div>
                    <img src={thumbnail} alt='item' />
                </div>
            );
        },
        key: 'thumbnail',
    },
    {
        title: 'Item',
        dataIndex: 'itemName',
        key: 'itemName',
    },
    {
        title: 'Available Quantity',
        dataIndex: 'availableQuantity',
        key: 'availableQuantity',
    }
];

export default class ItemsTable extends Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={this.forceUpdateHandler}>Update</Button>
                </Space>
                <Table dataSource={items} columns={columns} />
            </>
        )
    }
}