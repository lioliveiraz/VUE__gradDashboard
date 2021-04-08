
export function validateTruthiness(received) {
    expect(received).not.toBeNull();
    expect(received).toBeTruthy();
};

export function validateLength(received, length) {
    expect(received).toHaveLength(length);

};
export function validateMatchingStringValues(firstParameter, secondParameter) {
    expect(firstParameter).not.toMatch("dummy");
    expect(firstParameter).toMatch(secondParameter);
}
export function validateObjectDataType(received) {
    expect(typeof received).not.toBe("string");
    expect(typeof received).toBe("object");
}

export function validateStringDataType(received) {
    expect(typeof received).not.toBe("array");
    expect(typeof received).toBe("string");
}

export function validateObjectToHaveProperty(received, key) {
    expect(received).not.toHaveProperty("dummy");
    expect(received).toHaveProperty(key);
}

export function validateBooleanValues(received, boolean) {
    expect(received).not.toBe(!boolean);
    expect(received).toBe(boolean);
}