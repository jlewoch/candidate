import React from 'react';

const UserTemplate = ({user, groups}) => {
    return (
        <div>
            <select name="usergroup" id="usergroup">
            {groups.map(item => <option value={item.name}>{item.name}</option>)}
            </select>
        </div>
    );
};

export default UserTemplate;