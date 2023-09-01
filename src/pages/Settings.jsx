import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settings__wrapper">
                <h2 className='setting__title'>Settings</h2>
                <div className="settings__top">
                    <button className="settings__btn">My Details</button>
                    <button className="settings__btn active__btn">Profile</button>
                    <button className="settings__btn">Password</button>
                    <button className="settings__btn">Email</button>
                    <button className="settings__btn">Notification</button>
                </div>
                <div className="details__form">
                    <h2 className='profile__title'>Profile</h2>
                    <p className='profile__desc'>Update your photo and personal details here</p>
                    <form>
                        <div className="form__group">
                            <div>
                                <label>Live In</label>
                                <input type="text" placeholder='Paris, France'/>
                            </div>
                            <div>
                                <label>Street</label>
                                <input type="text" placeholder='Orjonikidze 7'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;