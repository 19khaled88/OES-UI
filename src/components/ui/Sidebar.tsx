"use client";
import Sider from "antd/es/layout/Sider";
import { theme, Menu } from "antd";
import type { MenuProps } from "antd";
import React, { useState } from "react";
import OES from "../../../public/OES.png";

import DynamicItems from "@/constants/dynamicItems";
import { USER_ROLE } from "@/constants/role";
import Image from "next/image";

const role = USER_ROLE.STUDENT;

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Sider
			width={280}
			style={{
				overflow: "auto",
				height: "100vh",
				position: "sticky",
				left: 0,
				top: 0,
				bottom: 0,
			}}
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div
				style={{
					color: "white",
					fontSize: "1.2rem",
					textAlign: "center",
					fontWeight: "bold",
					marginBottom: "1rem",
					display: "flex",

					// flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "space-evenly",
					paddingTop: "10px",
				}}
			>
				{collapsed === true ? (
					<Image src={OES} width={30} height={30} alt="No Image" />
				) : (
					<>
						<Image src={OES} width={30} height={30} alt="No Image" /> Education
						Digitalization
					</>
				)}
			</div>
			<Menu
				theme="dark"
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={DynamicItems(role)}
			/>
		</Sider>
	);
};

export default Sidebar;
