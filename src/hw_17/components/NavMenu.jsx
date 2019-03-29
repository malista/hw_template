import React from 'react';


import './NavMenu.scss';

export class NavMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let linksSome = this.props.links.map((link, index) => {
            let linksSome = link.active ? (
                <a className="nav-menu__link nav-menu__link-active" href={link.link}>{link.title}</a>
            ) : (
                <a className="nav-menu__link" href={link.link}>{link.title}</a>
            );

            return (
                <li key={index} className="nav-menu__listed-item">
                    {linksSome}
                </li>
            );
        });

        return (
            <nav className="nav-menu">
                <div className="nav-menu__desck">
                    <ul className="nav-menu__list">
                        {linksSome}
                    </ul>
                </div>
            </nav>
        );
    }
}