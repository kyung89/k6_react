import React from 'react'
import MyList from './MyList'
import listData from './MyListData.json'

export default function MyListMain() {

    console.log(listData);
    const myItems = listData.map(({imgUrl, title, content}) => <MyList imgUrl={imgUrl} title={title} content={content} key={title}/>);
    
    return (
        <div className='w-10/12 grid grid-col-1 md:grid-cols-2 gap-4'>
            {myItems}
        </div>
    )
}
