"use client";
// MenuBar.tsx
import React from 'react';
// import styles from './navbar.module.css';
import './navbar.css';
import './component/btnnavbar.css'
import { useEffect, useState } from "react";

const MenuBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const closeNavbar = () => {
        setIsActive(false);
    };

  return (
    // <div className={styles.containerMenubar}>
    <div className={`containerMenubar ${isActive ? 'active' : ''}`}>
      <nav className="navbar">
        <a href="/fpscalcurater" className="nav-branding">CPUselection</a>
        <ul className={`nav-links ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
          <li className="nav-link ranking">
            <a className='centerText' href="#">
              จัดอันดับ
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
              <span className="material-icons dropdown-icon">arrow_drop_down</span>
            </a>
            <ul className="drop_down">
              <li>ซีพียู</li>
              <li>การ์ดจอ</li>
              <li>เมนบอร์ด</li>
              <li>แรม</li>
              <li>พาวเวอร์ซัพพลาย</li>
              <li>จอคอมพิวเตอร์</li>
              <li>โน้ตบุ๊ก</li>
            </ul>
          </li>
          <li className="nav-link">
            <a href="/createCom">ประกอบคอมพิวเตอร์</a>
          </li>
          <li className="nav-link">
            <a href="/fpscalcurater">คำนวณเฟรมเรท</a>
          </li>
          <li className="nav-link">
            <a href="#">บทความแนะนำ</a>
          </li>
          <li className="nav-link">
            <a href="#">ติดต่อเรา</a>
          </li>
        </ul>

        <a href="/login" className="buttonLogin">
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">เข้าสู่ระบบ</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </a>

        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </nav>
    </div>
    // </div>
  );
};

export default MenuBar;
