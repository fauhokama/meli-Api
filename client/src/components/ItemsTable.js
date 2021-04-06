import { Table } from 'antd';
import React, { Component } from 'react';
const axios = require('axios');
const { Column } = Table;

const getData = async () => {
    const userInfo = await axios.get('http://localhost:3001/api/userinfo');
}
getData();

let items = [];
const getItems = async () => {
    items = await axios.get('http://localhost:3001/api/products');
}
getItems();

export default class ItemsTable extends Component {

    render() {
        return (
            <Table dataSource={items.data}>
                <Column title="Item" dataIndex="itemName" key="itemName" />
                <Column title="Available Quantity" dataIndex="availableQuantity" key="availableQuantity" />
                <Column title="thumbnail" dataIndex="thumbnail" key="thumbnail" />
            </Table>
        )
    }
}