import styles from "../sidebar/sidebar.module.css";
import React from "react";
import Image from "next/image";
import { MdDashboardCustomize, MdLink, MdHistory, MdSettings, MdHelpOutline, MdLogout } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
    {
        title: "Main",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboardCustomize />,
            },
            {
                title: "Scan Link",
                path: "/dashboard/scan-link",
                icon: <MdLink />,
            },
            {
                title: "History",
                path: "/dashboard/history",
                icon: <MdHistory />,
            },
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpOutline />,
            },
        ],
    },
];

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/user-profile-avatar-png.webp" alt="User Avatar" width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
           <ul className={styles.list}>
            {menuItems.map(cat => (
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item => (
                        <MenuLink item={item} key={item.title} />
                    ))}
                </li>
            ))}
           </ul>
           <button className={styles.logout}><MdLogout />Logout</button>
        </div>
    );
}
