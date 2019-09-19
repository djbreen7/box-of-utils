import { doForDuration } from '../../src';

// const spy = jest.spyOn(common, 'functionName').mockImplementation((): null => null);

describe('DO FOR DURATION', (): void => {
    test('Auto Option Produces Correct String', (): void => {
        // Arrange
        const duration = 1000;
        const expiresAt = new Date().getTime() + duration;

        // Act
        doForDuration((): void => { }, duration);

        // Assert
        expect(new Date().getTime()).toBeGreaterThanOrEqual(expiresAt);
    });
});
