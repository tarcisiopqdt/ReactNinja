'use strict'
import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info';
import Title from './title'
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userinfo, repos, starred , handleSearch}) => (
  <div className='app'>
    <Title />
    <Search handleSearch={handleSearch}/>
    {!!userinfo && <UserInfo userinfo={userinfo}/>}
    {!!userinfo && <Actions />}
    {!!repos.length &&
      <Repos className='repos' title='Repositórios:' repos={repos} />}

    {!!starred.length &&
      <Repos className='starred' title='Favoritos:' repos={starred} />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent