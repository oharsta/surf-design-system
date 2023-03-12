import DOMPurify from "dompurify";
import {ChangeEvent} from "react";

export function stopEvent(e: ChangeEvent) {
    if (e !== undefined && e !== null) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    return true;
}

export function isEmpty(obj: any) {
    if (obj === undefined || obj === null) {
        return true;
    }
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    if (typeof obj === "string") {
        return obj.trim().length === 0;
    }
    if (typeof obj === "object") {
        return Object.keys(obj).length === 0;
    }
    return false;
}

export function sanitize(text: string) {
    return DOMPurify.sanitize(text, {ADD_ATTR: ["target"]})
}
