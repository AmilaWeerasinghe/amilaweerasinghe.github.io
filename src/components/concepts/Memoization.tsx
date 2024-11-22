import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const memoize = ( fn : Function) => {
    const cache: { [key: string]: any } = {};
    // use of closure

    return ( ...args: any) => {
        const key = args.toString();
        if(key in cache){
            console.log('memoized key', key);
            return cache[key];
        }
        const result = fn(...args);
        cache[key]= result;
        return result;
    }
}

const fibonacci = ( number: number): number => {
    if(number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number -2);
}

// memoized for fibonnaci is created only once
const memoizedFibonacci = memoize(fibonacci);

export const Memoization: React.FC = () => {
    const [ number, setNumber] = useState<number| undefined>(undefined);
    const [ result, setResult] = useState<number| null>(null);
    console.log('number',number);
    const handleCalculate = () => {
        if(number === undefined){
            return;
        } else {
            setResult(memoizedFibonacci(number));
            console.log(`fibonacci for ${number}`, memoizedFibonacci(number));
            console.log(`fibonacci for ${number}`, memoizedFibonacci(number));
        }
    }
   return (
    <Box sx={{p: 10}}>
        <Typography>Memoization fibonnaci</Typography>
        <TextField 
        type="number"
        value={number} 
        onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setNumber(parseInt(event.target.value));
        }}/>
        <Button onClick={handleCalculate} >
            Calculate fibonnaci
        </Button>
        {result !== null && 
        <Typography>Fibonnaci of ${number} is ${result} </Typography>
        }
    </Box>
   )
}