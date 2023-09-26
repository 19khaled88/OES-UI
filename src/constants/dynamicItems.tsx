import { MenuProps } from "antd";
import React from "react";
import {
  FileTextFilled,
	CreditCardOutlined,
	ThunderboltOutlined,
	ScheduleOutlined,
	UserOutlined,
	ProfileFilled,
	LockOutlined,
	TableOutlined,
	AppstoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

const DynamicItems = (role: string) => {
	const defaultItems: MenuProps["items"] = [
		{
			label: "Profile",
			key: "profile",
			icon: <UserOutlined />,
			children: [
				{
					label: <Link href={`/${role}/account-profile`}>Account Profile</Link>,
					key: `/${role}/account-profile`,
					icon: <ProfileFilled />,
				},
				{
					label: <Link href={`/${role}/change-password`}>Change Password</Link>,
					key: `/${role}/change-password`,
					icon: <LockOutlined />,
				},
			],
		},
	];

	const commonAdminItems: MenuProps["items"] = [
		{
			label: <Link href={`/${role}/manage-students`}>Manage-Students</Link>,
      key: `/${role}/manage-students`,
			icon: <TableOutlined />
			
		},
		{
			label: <Link href={`/${role}/manage-faculty`}>Manage-Faculty</Link>,
			icon: <TableOutlined />,
			key: `/${role}/manage-faculty`,
		},
	];

	const adminItems: MenuProps["items"] = [
		...defaultItems,
		...commonAdminItems,
		{
			label: "Manage Academic",
			key: "manage-acacdemic",
			icon: <TableOutlined />,
			children: [
				{
					label: <Link href={`/${role}/academic/facultiy`}>Faculties</Link>,
					key: `/${role}/academic/faculty`,
				},
				{
					label: (
						<Link href={`/${role}/academic/departments`}>Departments</Link>
					),
					key: `/${role}/academic/department`,
				},
				{
					label: <Link href={`/${role}/academic/semester`}>Semester</Link>,
					key: `/${role}/academic/semester`,
				},
			],
		},
		{
			label: "Management",
			key: "management",
			icon: <AppstoreOutlined />,
			children: [
				{
					label: <Link href={`/${role}/department`}>Department</Link>,
					key: `/${role}/department`,
				},
				{
					label: <Link href={`/${role}/building`}>Building</Link>,
					key: `/${role}/building`,
				},
				{
					label: <Link href={`/${role}/room`}>Room</Link>,
					key: `/${role}/room`,
				},
				{
					label: <Link href={`/${role}/course`}>Course</Link>,
					key: `/${role}/course`,
				},
				{
					label: (
						<Link href={`/${role}/semester-registration`}>
							Semester registration
						</Link>
					),
					key: `/${role}/semester-registration`,
				},
				{
					label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
					key: `/${role}/offered-course`,
				},
				{
					label: (
						<Link href={`/${role}/offered-course-section`}>
							Course sections
						</Link>
					),
					key: `/${role}/offered-course-section`,
				},
				{
					label: (
						<Link href={`/${role}/offered-course-schedule`}>
							Course schedules
						</Link>
					),
					key: `/${role}/offered-course-schedule`,
				},
			],
		},
	];

	const superAdminItems: MenuProps["items"] = [
		...defaultItems,
		...commonAdminItems,
		{
			label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
			key: `/${role}/admin`,
			icon: <TableOutlined />,
		},
		{
			label: <Link href={`/${role}/user`}>Manage User</Link>,
			key: `/${role}/user`,
			icon: <TableOutlined />,
		},
		{
			label: "Manage permission",
			key: "manage-permission",
			icon: <AppstoreOutlined />,
			children: [
				{
					label: <Link href={`/${role}/permission`}>View permission</Link>,
					key: `/${role}/permission`,
				},
			],
		},
		{
			label: "Management",
			key: "management",
			icon: <AppstoreOutlined />,
			children: [
				{
					label: <Link href={`/${role}/department`}>Department</Link>,
					key: `/${role}/department`,
				},
			],
		},
	];

	const facultyItems: MenuProps["items"] = [
		...defaultItems,
		{
			label: <Link href={`/${role}/courses`}>Courses</Link>,
			key: `/${role}/courses`,
			icon: <TableOutlined />,
		},
	];
  
	const studentItems: MenuProps["items"] = [
		...defaultItems,
		{
			label: <Link href={`/${role}/courses`}>Courses</Link>,
			key: `/${role}/courses`,
			icon: <TableOutlined />,
		},
		{
			label: <Link href={`/${role}/courses/schedule`}>Courses schedules</Link>,
			key: `/${role}/courses/schedule`,
			icon: <ScheduleOutlined />,
		},
	
		{
			label: <Link href={`/${role}/registration`}>Registration</Link>,
			key: `/${role}/registration`,
			icon: <ThunderboltOutlined />,
		},
		{
			label: <Link href={`/${role}/academic-report`}>Academic Report</Link>,
			key: `/${role}/academic-report`,
			icon: <CreditCardOutlined />,
		},
		{
			label: <Link href={`/${role}/payment`}>Payment</Link>,
			key: `/${role}/payment`,
			icon: <CreditCardOutlined />,
		},
	];

	if(role === USER_ROLE.SUPER_ADMIN){
    return superAdminItems
  }else if(role === USER_ROLE.ADMIN){
    return adminItems
  }else if(role === USER_ROLE.FACULTY){
    return facultyItems
  }else if(role === USER_ROLE.STUDENT){
    return studentItems
  }else {
    return commonAdminItems
  }
};

export default DynamicItems;
