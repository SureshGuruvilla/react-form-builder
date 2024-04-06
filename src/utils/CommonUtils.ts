export function isEmptyObject(obj: Object){
    return obj && Object.keys(obj).length <= 0;
}
export function isKeyInInterface<T>(key: keyof T): key is keyof T {
    return true; // Always returns true, indicating the key is in the interface
}