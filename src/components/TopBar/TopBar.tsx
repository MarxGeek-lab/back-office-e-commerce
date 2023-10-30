import React from "react";

import "./TopBar.scss";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { FiLogOut } from "react-icons/fi";

import avatar from "../../assets/images/profil.png";

const TopBar:React.FC = () => {

    return (
        <div className="TopBar RawContainer">
            <div className="TopBar-top Dflex Dflex-alignCenter Dflex-justifyCSpaceBetween">
                <div className="TopBar-logoParty">
                    <li className="TopBar-logo"><span>LO</span><b>GO</b></li>
                </div>
                <div className="TopBar-right Dflex Dflex-alignEnd">
                    <button className="TopBar-goToSite">Aller sur le site</button>
                    <h4 className="TopBar-nameProfil">Martial GANGBALA...</h4>
                </div>
                <img className="TopBar-avatar" src={avatar} />
            </div>
            <div className="TopBar-breadCrumb Dflex Dflex-alignCenter Dflex-justifyCSpaceBetween">
                <BreadCrumb labelPage="Accueil" />
            </div>
            <div className="TopBar-disconnectBlock">
                <button className="TopBar-btnDisconnect Dflex Dflex-alignCenter">Déconnecter <FiLogOut /> </button>
            </div>
        </div>
    );
};
export default TopBar;