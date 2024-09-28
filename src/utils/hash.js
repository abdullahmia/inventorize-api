import bcrypt from "bcryptjs";

/**
 * Hashes a plain text password using bcrypt.
 *
 * @param {string} password - The plain text password to be hashed.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 *
 * @example
 * const plainPassword = 'mySecretPassword';
 * convertToHash(plainPassword).then(hashedPassword => {
 *   console.log(hashedPassword);
 * });
 */
export const convertToHash = async (password) => {
  return bcrypt.hash(password, 10);
};

/**
 * Compares a plain text password with a hashed password to check if they match.
 *
 * @param {string} password - The plain text password to be compared.
 * @param {string} hash - The hashed password to compare against.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the passwords match.
 *
 * @example
 * const plainPassword = 'mySecretPassword';
 * const hashedPassword = '$2b$10$7sRzB6PpO.WK1OZxF5nlvOs9aXfhSUnnE6iTfNNhjPESbVV1Q7ZbW'; // example hash
 * compare(plainPassword, hashedPassword).then(isMatch => {
 *   console.log(isMatch); // true if the passwords match, false otherwise
 * });
 */
export const compare = async (password, hash) => {
  return bcrypt.compare(password, hash);
};
