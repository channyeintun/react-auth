import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

export function useFetch<T extends (...arg: any[]) => any>(fetcher: T, initial: boolean = false, dependencies: any[] = []) {
    const [loading, setLoading] = useState<boolean>(initial);

    const [data, setData] = useState<Awaited<ReturnType<T>> | null>(null);

    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            if (initial) {
                try {
                    const newData = await fetcher();
                    setData(newData);
                    setLoading(false);
                } catch (err) {
                    console.error(err);
                    setError((err as AxiosError).message);
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [initial, ...dependencies]);

    const reset = () => {
        setData(null);
        setError('');
    };

    const trigger = async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>> | null> => {
        try {
            setError('');
            setLoading(true);
            const newData = await fetcher(...args);
            setData(newData);
            setLoading(false);
            return newData;
        } catch (err) {
            console.error(err);
            setError((err as AxiosError).message);
            setLoading(false);
            return null;
        }
    };

    return {
        loading,
        error,
        data,
        trigger,
        reset,
        setData,
    };
}
