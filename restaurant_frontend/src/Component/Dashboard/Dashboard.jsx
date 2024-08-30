import React, { useState } from 'react';
import logo from "../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg";
import style from "./dashboard.module.css";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.dashboard}>
            <aside className={`${style.sidebar} ${isOpen ? style.open : style.closed}`}>
                <div className={style.sidebarHeader}>
                    <img src={logo} alt="Logo" className={style.logo} />
                    {isOpen && <h1 className={style.restaurantName}>Restaurant Name</h1>}
                </div>
                <nav className={style.menu}>
                    <a href="#dashboard" className={style.menuItem}>Dashboard</a>
                    <a href="#menu" className={style.menuItem}>Menu</a>
                    <a href="#orders" className={style.menuItem}>Orders</a>
                    <a href="#status" className={style.menuItem}>Order Status</a>
                    <a href="#settings" className={style.menuItem}>Settings</a>
                </nav>
                <button className={style.toggle} onClick={toggleSidebar}>
                    {isOpen ? '←' : '→'}
                </button>
            </aside>
            <main className={style.mainContent}>
                <section className={style.overview}>
                    <h2>Dashboard Overview</h2>
                </section>
                <section className={style.cards}>
                    <div className={style.card}>
                        <h3>Menu</h3>
                        <div className={style.cardContent}>
                            {/* Card content */}
                        </div>
                    </div>
                    <div className={style.card}>
                        <h3>Orders</h3>
                        <div className={style.cardContent}>
                            {/* Card content */}
                        </div>
                    </div>
                </section>
                <section className={style.tableSection}>
                    <h3>Order Details</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Completed</td>
                                <td>
                                    <button className={style.acceptButton}>Accept</button>
                                    <button className={style.deleteButton}>Delete</button>
                                </td>
                            </tr>
                            {/* More rows as needed */}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
