import React, { useState } from 'react'
import UserCard, { UserCardLayout } from './UserCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import exploreApi from '@/services/explore/explore.services';
import { TrendingUserType, UserType } from '@/types/user.types';
import { PageType } from '@/types/pagination.types';

type UserListProps = {
    initialUsersPage: PageType<TrendingUserType>
}


const UserList = ({initialUsersPage}: UserListProps) => {
 
 const [page, setPage] = useState<PageType<TrendingUserType>>(initialUsersPage)   
 const [users, setUsers] = useState <TrendingUserType[]>(initialUsersPage.content);  


 const fetchData = async () =>{
    const pageNumber = page.pagination.page +1;
    const response = await exploreApi.getFollowRecommendations(pageNumber,20)
    setPage(response);
    setUsers([...users, ...response.content])
}


const refresh = async () =>{
    const response = await exploreApi.getFollowRecommendations(0, 10)
    setPage(response);
    setUsers(response.content)
}

  return (

  <InfiniteScroll
          dataLength={users.length} //This is important field to render the next data
          next={fetchData}
          hasMore={!page.pagination.last}
          loader={<h4>Loading messages...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
          releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
        >
          {users.map((user, index) => (
            <UserCard key={`explore-user-${index}`} user={user} layout={UserCardLayout.VERTICAL} />
          ))}
        </InfiniteScroll>   
  )
}

export default UserList;