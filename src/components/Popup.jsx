import React from 'react';

export const Popup = () => {
    return (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-header'>
                    <div className='wrapper'>
                        <h2>Edit %Name</h2>
                        <span>unique ID - 435325325</span>
                    </div>
                    <img src={require('../assets/cross.png')} alt='Close' />
                </div>
                <div className='popup-main'>
                    <div className='field wide'>
                        <label for='email'>E-mail</label>
                        <input type='text' name='email' />
                    </div>
                    <div className='field narrow'>
                        <label for='first-name'>First Name</label>
                        <input type='text' name='first-name' />
                    </div>
                    <div className='field narrow'>
                        <label for='last-name'>Last Name</label>
                        <input type='text' name='last-name' />
                    </div>

                    <div className='field wide'>
                        <label for='country'>Country</label>
                        <input type='text' name='country' />
                    </div>
                    <div className='field wide'>
                        <label for='company'>Company</label>
                        <input type='text' name='company' />
                    </div>
                    <div className='field narrow'>
                        <label for='type'>Type</label>
                        <input type='text' name='type' />
                    </div>
                    <div className='field narrow'>
                        <label for='level'>Level</label>
                        <input type='text' name='level' />
                    </div>
                    <div className='field narrow'>
                        <label for='validated'>Validated</label>
                        <input type='text' name='validated' />
                    </div>
                    <div className='field narrow'>
                        <label for='coins'>Coins</label>
                        <input type='text' name='coins' />
                    </div>
                    <div className='wrapper'>
                        <div className='additional'>
                            <p>
                                <span>Subscription type - </span>
                                <span className='value'>99.99</span>
                            </p>
                            <p>
                                <span>Subscription date - </span>
                                <span className='value'>11/02/2016</span>
                            </p>
                        </div>
                        <div className='buttons-block'>
                            <button>Reset Password</button>
                            <button>Revoke Access</button>
                            <button className='save-btn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
