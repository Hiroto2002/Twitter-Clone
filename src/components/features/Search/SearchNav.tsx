'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

const SearchNavItems = [
    { 
        name: "おすすめ", 
        href: "/" 
},
    { 
        name: "トレンド",
        href: "/" 
    },
    { 
        name: "ニュース", 
        href: "/" 
    },
    { 
        name: "スポーツ",
        href: "/" 
    },
    { 
        name: "エンターテイメント", 
        href: "/" 
    },
];

type Props = {
    name: string;
    href: string;
};

export const SearchNav: React.FC = () => {
    return (
            <div style={styles.navContainer}>
            {SearchNavItems.map((nav) => (
                <SearchNavItem key={nav.name} name={nav.name} href={nav.href} />
                ))}
    </div>
    );
};

const SearchNavItem: React.FC<Props> = ({ name, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <div style={{ ...styles.navItem, ...(isActive ? styles.activeNavItem : {}) }}>
            <Link href={href}>{name}</Link>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    navContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '1px solid #ddd',
        padding: '8px 0',
    },
        navItem: {
        padding: '8px 16px',
        fontSize: '16px',
        color: '#555',
        cursor: 'pointer',
    },
    activeNavItem: {
        borderBottom: '2px solid blue',
        color: 'blue',
    },
};

export default SearchNav;
