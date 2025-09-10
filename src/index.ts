export type OrdinalInput = number | bigint | string;

const SUFFIXES = ["th", "st", "nd", "rd"] as const;

function getSuffixForDigits(lastTwo: number, lastOne: number): string {
    if (lastTwo >= 11 && lastTwo <= 13) {
        return SUFFIXES[0];
    }
    if (lastOne === 1) return SUFFIXES[1];
    if (lastOne === 2) return SUFFIXES[2];
    if (lastOne === 3) return SUFFIXES[3];
    return SUFFIXES[0];
}

function normalizeToNumericString(input: OrdinalInput): { sign: string; digits: string } | null {
    if (typeof input === "number") {
        if (!Number.isFinite(input)) return null;
        const sign = input < 0 ? "-" : "";
        const abs = Math.abs(Math.trunc(input));
        return { sign, digits: String(abs) };
    }
    if (typeof input === "bigint") {
        const sign = input < 0n ? "-" : "";
        const abs = input < 0n ? -input : input;
        return { sign, digits: abs.toString() };
    }
    // string case
    if (typeof input === "string") {
        const trimmed = input.trim();
        if (trimmed.length === 0) return null;
        // Extract optional sign and digits; ignore any non-digit separators
        const m = trimmed.match(/^([+-]?)(\d+)$/);
        if (!m) return null;
        const sign = m[1] === "-" ? "-" : "";
        // Remove leading zeros but keep single zero
        const rawDigits = m[2].replace(/^0+(\d)$/, "$1");
        const digits = rawDigits.replace(/^0+$/, "0");
        return { sign, digits };
    }
    return null;
}

/**
 * Converts a number into its ordinal string (e.g., 1 -> "1st").
 * - Handles 0, negatives, very large integers (via bigint or numeric string).
 * - For non-numeric inputs, returns String(input) for predictability.
 */
export function ordinal(input: OrdinalInput): string {
    const normalized = normalizeToNumericString(input);
    if (!normalized) {
        return String(input);
    }
    const { sign, digits } = normalized;
    // last digit and last two digits
    const lastOne = Number(digits[digits.length - 1]);
    const lastTwo = Number(digits.length >= 2 ? digits.slice(-2) : digits);
    const suffix = getSuffixForDigits(lastTwo, lastOne);
    return `${sign}${digits}${suffix}`;
}

export default ordinal;



