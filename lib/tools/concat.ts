export function concat(...str: string[]): string {
    return str.filter(Boolean).join(" ").trim();
}