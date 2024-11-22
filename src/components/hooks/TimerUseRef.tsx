import { TextField, Box, Typography, Button } from "@mui/material"
import { useState, useRef } from "react"

/*
Why we need useRef to create timer?
- useRef is used to store mutable value
- useRef is used to store value that persists across renders
- useRef is used to store value that does not cause re-render
- useRef is used to store value that does not cause re-render when changed 

So we save the timerId in useRef to persist the value across renders and not cause re-render when changed
We Start timer and set Time interval save value in a ref
When we need to stop timer we change the value of timerId to null ( till will stop the setTime Interval)
When we need to reset timer we stop the timer and set seconds to 0
 */

export const TimerUseRef = () => {
    const [ randomInput, setRandomInput] = useState('');
    const [ seconds, setSeconds] = useState(0);
    const renders = useRef(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const timerId = useRef<NodeJS.Timeout | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRandomInput(e.target.value);
        renders.current++; // increment the renders everytime change happens
    }

    const focusInput = () => {
        console.log('inputRef', inputRef);
        if(inputRef.current){
            console.log('inputRef.current', inputRef.current);
            inputRef.current.focus();
        }
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++; // becaus everytime seconds is set , component will re-render
            setSeconds((seconds) => seconds+1)
        },1000)
    }

    const stopTimer = () => {
        console.log('stoptimer', timerId.current);
        if(timerId.current !== null) {
            clearInterval(timerId.current);
            timerId.current = null;
        }
        
    }

    const resetTimer = () => {
        stopTimer();
        if(seconds !== 0){
            renders.current++;  
            setSeconds(0);
        }
    }

    return (
        <Box sx={{p:10}}>
            <TextField
            inputRef={inputRef}
            value={randomInput}
            sx={{
                '& .MuiInputBase-input': {
                    color: 'white',
                },
            }} 
            onChange={handleChange} 
            placeholder="Random Input"/>
            <Typography>Random Input: {randomInput}</Typography>
            <Typography>Renders: {renders.current}</Typography>
            <Button onClick={focusInput}>Focus Input</Button> 
            <Typography>Seconds: {seconds}</Typography>
            <Button onClick={startTimer}>Start Timer</Button>
            <Button onClick={stopTimer}>Stop Timer</Button>
            <Button onClick={resetTimer}>Reset Timer</Button>
        </Box>
    )
}