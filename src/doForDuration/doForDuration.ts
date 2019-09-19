/**
 * Sign a specified file with given signtool options
 * @param callback The function to perform over duration
 * @param duration Duration in ms
 */
export function doForDuration(callback: Function, duration: number): void {
    const expiresAt = new Date().getTime() + duration;

    while (new Date().getTime() < expiresAt) {
        callback();
    }
}
