import React from 'react';
import Coin from '../../assets/dollar 1.svg';
import Logo from '../../assets/logo.png';

const Navbar = ({coin}) => {
    return (
        <div>
            <div className="navbar bg-base-100 w-4/5 mx-auto mb-6">
                <div className="navbar-start">
                    <img src={Logo} alt="Logo" />

                </div>

                <div className="navbar-end space-x-4">
                    <a className="btn btn-ghost btn-accent">Home</a>
                    <a className="btn btn-ghost btn-accent">Fixture</a>
                    <a className="btn btn-ghost btn-accent">Teams</a>
                    <a className="btn btn-ghost btn-accent">Schedules</a>
                    <a className="btn btn-outline font-bold"><span>{coin}</span>Coin <img src={Coin} alt="Coin" /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;