const crypto = require("crypto");
const { HASH, PARTITIONS } = require("./constants");
// For a larger project I would create an aliases file so we don't have
// To use relative paths. Something like ~constants/constants or ~lib/constants

exports.deterministicPartitionKey = (event) => {
  // Created eventData variable so we only assign candidate once.
  let eventData;

  if (event) eventData = getEventData({ event });

  const candidate = eventData
    ? parseCandidateData({ eventData })
    : PARTITIONS.TRIVIAL_PARTITION_KEY;

  // If we go over the max partition key length, hash the data
  // Else we return the candidate.
  if (candidate.length > PARTITIONS.MAX_PARTITION_KEY_LENGTH) {
    return createCandidateHash({ candidate });
  } else {
    return candidate;
  }
};

function createCandidateHash({
  candidate,
  hashKey = HASH.HASH_KEY,
  cryptoType = HASH.CRYPTO_TYPE,
} = {}) {
  return crypto.createHash(hashKey).update(candidate).digest(cryptoType);
}

function getEventData({ event }) {
  if (event.partitionKey) return event.partitionKey;

  const candidate = JSON.stringify(event);
  return createCandidateHash({ candidate });
}

function parseCandidateData({ eventData }) {
  // Check if candidate is not a string. Stringify if it isn't
  return typeof eventData !== "string" ? JSON.stringify(eventData) : eventData;
}
