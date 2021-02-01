/**
 *
 * @param {string} firstname First Name
 * @param {string} lastName Last Name
 * @param {string} [sep=""] Seperator
 */
export const nameBuilder = (firstname, lastName, sep) => {
  return `${firstname}${sep ?? ' '}${lastName}`;
};
