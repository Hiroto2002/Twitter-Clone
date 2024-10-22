import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    icon: "",
  },
  {
    name: "Posts",
    href: "/posts",
    icon: "",
  },
  {
    name: "Tags",
    href: "/tags",
    icon: "",
  },
];

export const LeftNav = () => {
  return (
    <div className="flex" style={{ display: "flex" }}>
      {NAV_ITEMS.map((nav) => (
        <div key={nav.name} style={styles}>
          <div>a</div>
          <NavItem href={nav.href} name={nav.name} icon={nav.icon} />
        </div>
      ))}
    </div>
  );
};

const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: "#f0f0f0",
};

type Props = {
  href: string;
  name: string;
  icon: string;
};

export const NavItem = (props: Props) => {
  // const name = props.name;
  // const {name} = props;

  const { name, href, icon } = props;
  return (
    <Link
      key={name}
      href={href}
      className="block p-4 text-gray-800 hover:bg-gray-100"
    >
      <Image src={icon} alt="" width={24} height={24} />
      {props.name}
    </Link>
  );
};
