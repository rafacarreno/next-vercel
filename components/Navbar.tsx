
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        // ['menu-container'] --> lo escribe como propiedad computada, porque menu-container no es una propiedad de JS
        <nav className={styles['menu-container']}>
            {menuItems.map(({ text, href }) => (
                <ActiveLink key={href} text={text} href={href} />
            ))}
        </nav>

    )
}
