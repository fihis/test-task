import React from 'react';

export const UserDetails = ({ editableUser, saveUser, closeDetails, changeUserDetails }) => {
    const user = editableUser;

    const saveClickHandler = (id) => {
        saveUser(id);
    }

    const crossClickHandler = () => {
        closeDetails();
    }

    const userChangeHandler = (event) => {
        changeUserDetails(event.target.id, event.target.value)
    }

    return (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-header'>
                    <div className='wrapper'>
                        <h2>Edit {`${user.firstName} ${user.lastName}`}</h2>
                        <span>unique ID - {user.id}</span>
                    </div>
                    <img className='cross' src={require('../assets/cross.png')} onClick={crossClickHandler} alt='Close' />
                </div>
                <div className='popup-main' onChange={userChangeHandler}>
                    <div className='field wide'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='text' name='email' id='email' value={user.email}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='first-name'>First Name</label>
                        <input type='text' name='first-name' id='firstName' value={user.firstName}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input type='text' name='last-name' id='lastName' value={user.lastName}/>
                    </div>
                    <div className='field wide'>
                        <label htmlFor='country'>Country</label>
                        <input type='text' name='country' id='country' value={user.country}/>
                    </div>
                    <div className='field wide'>
                        <label htmlFor='company'>Company</label>
                        <input type='text' name='company' id='company' value={user.company}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='type'>Type</label>
                        <input type='text' name='type' id='type' value={user.type}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='level'>Level</label>
                        <input type='text' name='level' id='level' value={user.level}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='validated'>Validated</label>
                        <input type='text' name='validated' id='validated' value={user.validated ? 'Yes' : 'No'}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='coins'>Coins</label>
                        <input type='text' name='coins' id='coins' value={user.coins}/>
                    </div>
                    <div className='wrapper'>
                        <div className='additional'>
                            <p>
                                <span>Subscription type - </span>
                                <span className='value' id='subscriptionType'>{user.subscriptionType}</span>
                            </p>
                            <p>
                                <span>Subscription date - </span>
                                <span className='value' id='subscriptionDate'>{user.subscriptionDate}</span>
                            </p>
                        </div>
                        <div className='buttons-block'>
                            <button>Reset Password</button>
                            <button>Revoke Access</button>
                            <button className='save-btn' onClick={saveClickHandler}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


