import React, { useState, useEffect } from "react";
import Card from "./card";
import Piechart from "./piechart";
import SimpleBarChart from "./barchart";
import TransactionList from "./transactionPage";
import Modal from "./Modal";
import ExpenseForm from "./expenseForm";
import AddBalanceForm from "./addBalanceForm";

import "./homepage.css";

function ExpenseTracker() {
    const [balance, setBalance] = useState(5000);
    const [expense, setExpense] = useState(0);
    const [expenseList, setExpenseList] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpenExpense, setIsOpenExpense] = useState(false);
    const [isOpenBalance, setIsOpenBalance] = useState(false);

    const [categorySpends, setCategorySpends] = useState({ food: 0, entertainment: 0, travel: 0 });
    const [categoryCount, setCategoryCount] = useState({ food: 0, entertainment: 0, travel: 0 });

    useEffect(() => {
        const localBalance = localStorage.getItem("balance");
        const localExpenses = JSON.parse(localStorage.getItem("expenses"));
        if (localBalance) setBalance(Number(localBalance));
        if (localExpenses) setExpenseList(localExpenses);
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("expenses", JSON.stringify(expenseList));
            localStorage.setItem("balance", balance);
        }

        const totalExpense = expenseList.reduce((acc, curr) => acc + Number(curr.price), 0);
        setExpense(totalExpense);

        let foodS = 0, entS = 0, travS = 0;
        let foodC = 0, entC = 0, travC = 0;

        expenseList.forEach((item) => {
            if (item.category === "food") { foodS += Number(item.price); foodC++; }
            else if (item.category === "entertainment") { entS += Number(item.price); entC++; }
            else if (item.category === "travel") { travS += Number(item.price); travC++; }
        });

        setCategorySpends({ food: foodS, entertainment: entS, travel: travS });
        setCategoryCount({ food: foodC, entertainment: entC, travel: travC });
    }, [expenseList, balance, isMounted]);

    return (
        <div className="container">
            <h1 className="headingTracker">Expense Tracker</h1>
            <div className="top-section">

    <div className="card-wrapper">
        <Card
            title="Wallet Balance"
            money={balance}
            buttontext="+ Add Income"
            buttonVariant="success"
            handleClick={() => setIsOpenBalance(true)}
        />

        <Card
            title="Expense"
            money={expense}
            buttontext="+ Add Expense"
            buttonVariant="failure"
            success={false}
            handleClick={() => setIsOpenExpense(true)}
        />
    </div>

    <Piechart
        data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel }
        ]}
    />

</div>
<div className="bottom-section">

<div className="transaction-container">
  <h2 className="section-heading">Recent Transactions</h2>

  <TransactionList
    transactions={expenseList}
    editTransactions={setExpenseList}
    balance={balance}
    setBalance={setBalance}
  />
</div>


<div className="expense-container">
  <h2 className="section-heading">Top Expenses</h2>

  <SimpleBarChart
    data={[
      { name: "Food", value: categoryCount.food },
      { name: "Entertainment", value: categoryCount.entertainment },
      { name: "Travel", value: categoryCount.travel }
    ]}
  />
</div>

</div>
            <Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
                <ExpenseForm setIsOpen={setIsOpenExpense} expenseList={expenseList} setExpenseList={setExpenseList} setBalance={setBalance} balance={balance} />
            </Modal>
            <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
                <AddBalanceForm setIsOpen={setIsOpenBalance} setBalance={setBalance} />
            </Modal>
        </div>
    );
}

export default ExpenseTracker;