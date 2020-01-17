import React from 'react';

export const SideMenu = () => {
    return (
        <aside className='sidebar'>
            <div className='main-logo'>
                <img src={require('../assets/logo.png')} alt='Logo' />

                <span>Open Circles</span>
            </div>
            <nav>
                <ul>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/users-list.png')} alt='Users List' />
                        </div>
                        <span>Users List</span>
                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/daily.png')} alt='Daily' />
                        </div>
                        <span>Daily</span>
                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/brainstorm.png')} alt='Brainstorm' />
                        </div>
                        <span>Brainstorm</span>
                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/course.png')} alt='Course' />
                        </div>
                        <span>Course</span>

                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/leveling-system.png')} alt='Leveling System' />
                        </div>
                        <span>Leveling System</span>

                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/live-streams.png')} alt='Live Streams' />
                        </div>
                        <span>Live Streams</span>

                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/advanced.png')} alt='Advanced' />
                        </div>
                        <span>Advanced</span>

                    </li>
                    <li className='menu-item'>
                        <div className='icon-container'>
                            <img src={require('../assets/video-analytics.png')} alt='Video Analytics' />
                        </div>
                        <span>Video Analytics</span>

                    </li>
                </ul>
            </nav>
        </aside>
    )
}
