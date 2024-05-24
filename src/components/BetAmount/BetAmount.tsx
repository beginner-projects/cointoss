import { SetStateAction, useState } from 'react';
import './betamount.css';
import Image from 'next/image';
import { useTimer } from '@/context/TimerContext';

export default function BetAmount() {
    const [playerBetAmount, setPlayerBetAmount] = useState('0.00');
    const { bettingOpen } = useTimer();

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPlayerBetAmount(e.target.value);
    }
    return (
        <>
            <div className="bg-gray-600 bet">
                <span
                    className={`w-5 h-3 rounded-full ${bettingOpen ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ marginRight: '10px' }}
                ></span>
                <Image src="/ton.svg" alt='coin' width={30} height={30} />
                <input
                    value={playerBetAmount}
                    type='number'
                    onChange={handleInputChange}
                    disabled={!bettingOpen}
                    className='font-bold text-white-100 ml-3 text-xl inputbutton'
                />
                
            </div>
        </>
    );
}
