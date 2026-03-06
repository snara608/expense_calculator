import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Button from "./button";

export default function ExpenseForm({ setIsOpen, expenseList, setExpenseList, editId, setBalance, balance }) {
    const [formData, setFormData] = useState({ title: "", category: "", price: "", date: "" });
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (editId) {
            const data = expenseList.find(item => item.id === editId);
            if (data) setFormData(data);
        }
    }, [editId, expenseList]);

    const handleAdd = (e) => {
        e.preventDefault();
        const price = Number(formData.price);
        if (balance < price) {
            enqueueSnackbar("Price should be less than the wallet balance", { variant: "warning" });
            return;
        }
        setBalance(prev => prev - price);
        const newId = expenseList.length > 0 ? Math.max(...expenseList.map(i => i.id)) + 1 : 1;
        setExpenseList(prev => [{ ...formData, id: newId }, ...prev]);
        setIsOpen(false);
    };

    return (
        <div className="formWrapper">
            <h3>{editId ? "Edit Expense" : "Add Expense"}</h3>
            <form onSubmit={handleAdd}>
                <input name="title" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                <input name="price" type="number" placeholder="Price" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
                <select name="category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required>
                    <option value="" disabled>Select Category</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>
                <input name="date" type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} required />
                <Button type="submit">Add Expense</Button>
                <Button type="button" onClick={() => setIsOpen(false)}>Cancel</Button>
            </form>
        </div>
    );
}