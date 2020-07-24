import React from 'react';

const ProfileDropdown = props => (
    <div>
        {props.profileMenuDropdown === true ? (
            <div className='profile-dropdown-menu'>
                <ul>
                    <li>view profile</li>
                    <li>settings</li>
                    <li>sign out</li>
                </ul>
            </div>
        ) : null}
    </div>
);

export default ProfileDropdown;