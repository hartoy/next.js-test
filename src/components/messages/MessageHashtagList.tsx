import exploreApi from '@/services/explore/explore.services';
import { TrendingHashtag } from '@/types/hash.types'
import { PageType } from '@/types/pagination.types'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MessageHashtag from './MessageHashtag';


type MessageHashtagListProps = {
 initialPage: PageType<TrendingHashtag>;
}

const MessageHashtagList = ({initialPage}: MessageHashtagListProps) => {
  const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage)   
 const [hashtag, setHashtags] = useState <TrendingHashtag[]>(initialPage.content);  


 const fetchData = async () =>{
    const pageNumber = page.pagination.page +1;
    const response = await exploreApi.getTrendingHashtags(pageNumber,10)
    setPage(response);
    setHashtags([...hashtag, ...response.content])
}


const refresh = async () =>{
    const response = await exploreApi.getTrendingHashtags(0, 20)
    setPage(response);
    setHashtags(response.content)
}

  return (

  <InfiniteScroll
          dataLength={hashtag.length} //This is important field to render the next data
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
          {hashtag.map((hash, index) => (
            <MessageHashtag hash={hash} key={`explore-hash-${index}`} />
          ))}
        </InfiniteScroll>
      )  
}

export default MessageHashtagList