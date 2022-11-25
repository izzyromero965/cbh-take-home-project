const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Uses the events partitionKey to return a stringified key", () => {
    const event = { partitionKey: 32 };
    const trivialKey = deterministicPartitionKey(event);

    expect(trivialKey).toBe("32");
  });

  it("returns a hashed version of the event ", () => {
    const event = 2555;
    const trivialKey = deterministicPartitionKey(event);

    // Assert event was parsed correctly
    expect(typeof trivialKey).toBe("string");

    // Since we are writing the hash in hexa, it will always have
    // A length of 128.
    expect(trivialKey.length).toBe(128);
  });
  
});
