import React from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../actions';

export const UserDetails = ({ editableUser }) => {
    const user = editableUser;
    //console.log('UserDetails',user);
    const onSaveClick = () => {
        console.log('SAVE clicked')
        saveUser();
    }
    return (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-header'>
                    <div className='wrapper'>
                        <h2>Edit {`${user.firstName} ${user.lastName}`}</h2>
                        <span>unique ID - {user.id}</span>
                    </div>
                    <img src={require('../assets/cross.png')} alt='Close' />
                </div>
                <div className='popup-main'>
                    <div className='field wide'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='text' name='email' value={user.email}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='first-name'>First Name</label>
                        <input type='text' name='first-name' value={user.firstName}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input type='text' name='last-name' value={user.lastName}/>
                    </div>

                    <div className='field wide'>
                        <label htmlFor='country'>Country</label>
                        <input type='text' name='country' value={user.country}/>
                    </div>
                    <div className='field wide'>
                        <label htmlFor='company'>Company</label>
                        <input type='text' name='company' value={user.company}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='type'>Type</label>
                        <input type='text' name='type' value={user.type}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='level'>Level</label>
                        <input type='text' name='level' value={user.level}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='validated'>Validated</label>
                        <input type='text' name='validated' value={user.validated ? 'Yes' : 'No'}/>
                    </div>
                    <div className='field narrow'>
                        <label htmlFor='coins'>Coins</label>
                        <input type='text' name='coins' value={user.coins}/>
                    </div>
                    <div className='wrapper'>
                        <div className='additional'>
                            <p>
                                <span>Subscription type - </span>
                                <span className='value'>{user.subscriptionType}</span>
                            </p>
                            <p>
                                <span>Subscription date - </span>
                                <span className='value'>{user.subscriptionDate}</span>
                            </p>
                        </div>
                        <div className='buttons-block'>
                            <button>Reset Password</button>
                            <button>Revoke Access</button>
                            <button className='save-btn' onClick={onSaveClick}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {editableUser: state.users.editableUser}
// };


// const mapDispatchToProps = dispatch => ({
//     saveUser: () => dispatch(saveUser())
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(UserDetails)

