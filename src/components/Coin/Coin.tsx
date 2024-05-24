"use client"

import { SetStateAction, useState } from 'react';
import './coin.css'
import Image from 'next/image'
import Head from "@/components/Buttons/HeadButton/Head"
import Tail from "@/components/Buttons/TailButton/Tail"
import { useTimer } from '@/context/TimerContext'
import './betamount.css'


export default function Home() {

    const { timeLeft, bettingOpen } = useTimer();

    const [playerBetAmount, setPlayerBetAmount] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValueAmount = Number(e.target.value);
        if (inputValueAmount <= 2000) {
            setPlayerBetAmount(inputValueAmount);
        } else {
            setPlayerBetAmount(100);
        }
    }

    return (
        <>
            <div className="canvas">
                <div className='coin-canvas'>
                    <div className='coinflip-display'>
                        <div className='data-display flex justify-between items-center text-white'>
                            <div className='text-white ml-8 '>
                                {(bettingOpen) ? "Bet Now" : "Bet Closed"}
                                <div className='flex justify-center items-center text-sm font-bold'>
                                    <span
                                        className={`w-3 h-3 rounded-full ${bettingOpen ? 'bg-green-500' : 'bg-red-500'}`}
                                        style={{ marginRight: '10px' }}
                                    ></span>
                                    {timeLeft}</div>
                            </div>
                            <div className='text-white mr-8'>
                                <div className='text-md font-lighter text-gray-500'>Balance</div>
                                <div className='flex justify-center text-sm font-bold'>1 TON</div>
                            </div>
                        </div>
                    </div>
                    <Image className='coinIcon fixed' src="/ramigif.gif" alt='coin-logo' width={150} height={150} priority unoptimized />
                </div>
                {/* input feild */}
                <div className="bg-gray-600 bet">
                    <Image src="/ton.svg" alt='coin' width={30} height={30} className='image-ton' />
                    <input
                        value={playerBetAmount}
                        type='number'
                        onChange={handleInputChange}
                        disabled={!bettingOpen}
                        className='font-bold text-white-100 ml-3 text-xl inputbutton'
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <Head playerInputBetAmount={playerBetAmount} />
                    <Tail playerInputBetAmount={playerBetAmount} />
                </div>
            </div>
        </>
    )
}

