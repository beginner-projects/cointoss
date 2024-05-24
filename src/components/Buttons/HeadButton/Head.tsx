'use client'

import './head.css'
import Image from 'next/image'
import { useTimer } from '@/context/TimerContext'

type propsType = {
    playerInputBetAmount:number;
}

export default function Home(props:propsType) {

    const { bettingOpen } = useTimer();
    const profitOnWin = (props.playerInputBetAmount) * 1.98

    return (
        <>
            <button className={`headbtn ${!bettingOpen ? 'disabled' : ''}`} disabled={!bettingOpen}>
                <Image src="/head.svg" alt="coin" width={70} height={70} />
                <div className='mt-3'>
                    <span className='flex justify-center font-bold'>HEAD</span>
                    <div className='flex-col justify-center'>
                        <h3 className='flex justify-center mt-2 font-light'>Profit: 1.98x</h3>
                        <span className='font-semibold'>{profitOnWin} TON</span>
                    </div>
                </div>
            </button>
        </>
    )
}
