import { Breadcrumb } from "antd";
import Link from "next/link";

const BreadCrumbPage = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
    const breadCrumbIems =[
        {
            title:(
                <Link href="/">Home</Link>
            )
        },
        ...items.map((item)=>{
            return {
                title: item.link ? (
                    <Link href={item.link}>{item.link}</Link>
                ) : (
                    <span>{item.label}</span>
                )
            }
        })

    ]
  return <Breadcrumb items={breadCrumbIems}></Breadcrumb>;
};

export default BreadCrumbPage;
