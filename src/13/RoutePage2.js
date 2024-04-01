import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function RoutePage2() {

    const [sParams] = useSearchParams();
    const item1 = sParams.get("item1");
    const item2 = sParams.get("item2");

    console.log(item1);
    console.log(item2);

    return (
        <div>
        RoutePage2 : {item1} : {item2}
        </div>
    )
}
