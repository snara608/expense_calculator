import React, { useState, useEffect } from "react";
import TransactionCard from "./transactionCard";
import Pagination from "./panigation";
import ModalWrapper from "./Modal";
import ExpenseForm from "./expenseForm";
import "./styles.css";


export default function TransactionList({ transactions, editTransactions, title, balance, setBalance }) {
    const [editId, setEditId] = useState(null);
    const [isDisplayEditor, setIsDisplayEditor] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const maxRecords = 3;

    // Logic for Pagination
    const totalPages = Math.ceil(transactions.length / maxRecords);
    const startIndex = (currentPage - 1) * maxRecords;
    const currentTransactions = transactions.slice(startIndex, startIndex + maxRecords);

    const handleDelete = (id) => {
        const item = transactions.find((i) => i.id === id);
        if (item) {
            setBalance((prev) => prev + Number(item.price));
            editTransactions((prev) => prev.filter((i) => i.id !== id));
        }
    };

    const handleEditClick = (id) => {
        setEditId(id);
        setIsDisplayEditor(true);
    };

    return (
        <div className="transaction-wrapper">
            {title && <h2>{title}</h2>}
            {transactions.length > 0 ? (
                <div className="list-container">
                    <div className="list">
                        {currentTransactions.map((transaction) => (
                            <TransactionCard
                                details={transaction}
                                key={transaction.id}
                                handleDelete={() => handleDelete(transaction.id)}
                                handleEdit={() => handleEditClick(transaction.id)}
                            />
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <Pagination 
                            currentPage={currentPage} 
                            setPage={setCurrentPage} 
                            totalPages={totalPages} 
                        />
                    )}
                </div>
            ) : (
                <div className="empty-state">
                    <p>No transactions found!</p>
                </div>
            )}

            <ModalWrapper isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
                <ExpenseForm
                    editId={editId}
                    expenseList={transactions}
                    setExpenseList={editTransactions}
                    balance={balance}
                    setBalance={setBalance}
                    setIsOpen={setIsDisplayEditor}
                />
            </ModalWrapper>
        </div>
    );
}