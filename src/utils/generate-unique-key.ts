import { v4 as uuidv4 } from 'uuid'

interface Props {
  type: String
}

export const generateUniqueKey = ({ type = ''}: Props) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' + uuidv4();
  const shortUrlLength = 6;

  let shortUrl = '';
  for (let i = 0; i < shortUrlLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortUrl += characters.charAt(randomIndex);
  }

  return (type === 'snip') ? ('trnsfr-snip.' + shortUrl + '/' ) : ('trnsfr.' + shortUrl);
}
