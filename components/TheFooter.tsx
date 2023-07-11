import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import React, { useState, Fragment } from "react";

const TheFooter: React.FC = () => {

  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright © 2022 <a href="#">Liberty</a> NFT Marketplace Co., Ltd. All rights reserved.
              &nbsp;&nbsp;
              Designed by <a title="HTML CSS Templates" rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default TheFooter;
