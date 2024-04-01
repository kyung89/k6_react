import React from 'react'
import { useParams } from 'react-router-dom'

export default function RoutePage1() {

    const item = useParams().item;

    return (
        <div>
        RoutePage1 : {item}
        </div>
    )
}
