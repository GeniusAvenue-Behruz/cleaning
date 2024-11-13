import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import * as XLSX from 'xlsx';

const Dashboard = () => {
    const [userId, setUserId] = useState(generateUserId());
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [items, setItems] = useState([{ type: '', quantity: '', price: '' }]);
    const [paymentStatus, setPaymentStatus] = useState('not-paid');
    const [amountPaid, setAmountPaid] = useState('');
    const [chequeData, setChequeData] = useState(null);
    const [chequeNumber, setChequeNumber] = useState('A000001');

    // Function to generate unique user ID
    function generateUserId() {
        return Math.floor(Math.random() * 1000000);
    }

    // Function to add new item input
    const addItem = () => {
        setItems([...items, { type: '', quantity: '', price: '' }]);
    };

    // Function to handle input change for items
    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = [...items];
        newItems[index][name] = value;
        setItems(newItems);
    };

    // Function to handle payment status change
    const handlePaymentStatusChange = (e) => {
        setPaymentStatus(e.target.value);
    };

    // Function to calculate total price
    const calculateTotalPrice = () => {
        return items.reduce((total, item) => {
            const itemTotal = (parseInt(item.price) || 0) * (parseInt(item.quantity) || 0);
            return total + itemTotal;
        }, 0);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const totalPrice = calculateTotalPrice();
        const remainingAmount = paymentStatus === 'paid' ? 0 : totalPrice - (parseInt(amountPaid) || 0);
        
        // Prepare cheque data
        const newChequeData = {
            date: new Date().toLocaleDateString(),
            name,
            surname,
            chequeNumber,
            items,
            totalPrice,
            remainingAmount,
            userId,
        };

        // Set cheque data to display
        setChequeData(newChequeData);

        // Increment cheque number for next entry
        setChequeNumber(prevChequeNumber => {
            const numPart = parseInt(prevChequeNumber.slice(1)) + 1;
            return `A${String(numPart).padStart(5, '0')}`;
        });

        // Reset the form
        resetForm();
        saveToExcel(newChequeData);
    };

    // Function to reset form fields
    const resetForm = () => {
        setUserId(generateUserId());
        setName('');
        setSurname('');
        setItems([{ type: '', quantity: '', price: '' }]);
        setPaymentStatus('not-paid');
        setAmountPaid('');
    };

    // Function to save data to Excel file
    const saveToExcel = (data) => {
        const worksheet = XLSX.utils.json_to_sheet([
            {
                ID: userId,
                Name: name,
                Surname: surname,
                ChequeNumber: data.chequeNumber,
                Date: data.date,
                Items: data.items.map(item => `${item.type} (${item.quantity})`).join(', '),
                TotalPrice: data.totalPrice,
                AmountPaid: paymentStatus === 'paid' ? data.totalPrice : amountPaid || 0,
                RemainingAmount: data.remainingAmount,
            }
        ]);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Cheques');
        XLSX.writeFile(workbook, 'cheques.xlsx');
    };

    return (
        <div className="admin-panel">
            <h1>Laundry Service Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID: {userId}</label>
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Surname:</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <h3>Items</h3>
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <input
                                type="text"
                                name="type"
                                value={item.type}
                                placeholder="Type of clothes"
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                value={item.quantity}
                                placeholder="Quantity"
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                value={item.price}
                                placeholder="Price (in UZS)"
                                onChange={(e) => handleItemChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addItem}>Add Item</button>
                </div>
                <div>
                    <h3>Payment Status</h3>
                    <label>
                        <input
                            type="radio"
                            value="paid"
                            checked={paymentStatus === 'paid'}
                            onChange={handlePaymentStatusChange}
                        />
                        Paid
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="not-paid"
                            checked={paymentStatus === 'not-paid'}
                            onChange={handlePaymentStatusChange}
                        />
                        Not Paid
                    </label>
                    {paymentStatus === 'not-paid' && (
                        <div>
                            <label>Amount Paid:</label>
                            <input
                                type="number"
                                value={amountPaid}
                                onChange={(e) => setAmountPaid(e.target.value)}
                                required
                            />
                        </div>
                    )}
                </div>
                <button type="submit">Generate Cheque</button>
            </form>

            {chequeData && (
                <div className="cheque">
                    <h2>Cheque</h2>
                    <p>Date: {chequeData.date}</p>
                    <p>Name: {chequeData.name}</p>
                    <p>Surname: {chequeData.surname}</p>
                    <p>Cheque Number: {chequeData.chequeNumber}</p>
                    <h3>Items:</h3>
                    <ul>
                        {chequeData.items.map((item, index) => (
                            <li key={index}>
                                {item.type} x {item.quantity} = {item.price * item.quantity} UZS
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: {chequeData.totalPrice} UZS</p>
                    <p>Remaining Amount: {chequeData.remainingAmount} UZS</p>
                    <QRCodeSVG value={chequeData.chequeNumber} />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
