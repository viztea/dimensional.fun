export default async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init)
        , json = await res.json();

    if (res.status !== 200) {
        throw { status: res.status, ...json };
    }

    return json;
}

export type Error<T = {}> = T & { status: number; }
