'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavItemProps {
    name: string;
    href: string;
    onClick?: () => void;
}

const NavListItem: React.FC<NavItemProps> = ({ name, href, onClick }) => {
    return (
        <li className="list-none" onClick={onClick} onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                onClick();
            }
        }} >
            <Link href={href}>
                <motion.div
                    className="flex flex-col cursor-pointer"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                >
                    <span>{name}</span>
                    <motion.span
                        className="h-0.5 bg-primary"
                        variants={{
                            rest: { scaleX: 0 },
                            hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        style={{
                            width: '100%',
                            transformOrigin: 'center',
                            display: 'block',
                        }}
                    />
                </motion.div>
            </Link>
        </li>
    );
};

export default NavListItem;
