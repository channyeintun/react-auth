import { useCallback, useEffect, useMemo, useState } from "react";

const UseMemoDemo: React.FC = () => {
    const [number, setNumber] = useState({
        value: 0
    });

    const value = useMemo(()=>number.value,[])

    useEffect(()=>{
        console.log('value=>',value)
    },[value])

    const getHelloWorld = useCallback(() => {
        return 'Hello world' + number.value;
    },[])

    useEffect(() => {
        const value = getHelloWorld();
        console.log(value);
    }, [getHelloWorld])

    return (
        <>
            <h1>{number.value}</h1>
            <button
                className="border border-gray-950"
                type="button"
                onClick={() =>
                    setNumber(prev => ({ value: prev.value + 1 }))}>
                Update Number with 1
            </button>
        </>
    )
}

export default UseMemoDemo;