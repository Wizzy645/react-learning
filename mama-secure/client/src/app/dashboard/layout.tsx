import React, { ReactNode } from "react";
import Navbar from "../components/Dashboard/navbar/navbar";
import Sidebar from "../components/Dashboard/sidebar/sidebar";
import styles from "../components/Dashboard/dashboard.module.css";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    );
}
