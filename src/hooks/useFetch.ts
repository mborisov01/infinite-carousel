import { useEffect, useState } from "react"

type FetchState<T> = {
    data: T | null
    loading: boolean
    error: string | null
}

export function useFetch<T = any>(url: string | null) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: !!url,
        error: null,
    })

    useEffect(() => {
        if (!url) return

        const fetchData = async () => {
            setState({ data: null, loading: true, error: null })
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                const json = await response.json()
                setState({ data: json, loading: false, error: null })
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : String(err)
                setState({ data: null, loading: false, error: errorMessage })
            }
        }

        fetchData()
    }, [url])

    return state
}
