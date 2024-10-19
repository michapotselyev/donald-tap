import { Request, Response, NextFunction } from 'express';

const TELEGRAM_IP_RANGES = [
  '149.154.160.0/20',
  '91.108.4.0/22',
];

const isIpInRange = (ip: string, range: string): boolean => {
  const [rangeAddress, subnet] = range.split('/');
  const rangeBigInt = BigInt('0x' + rangeAddress.split('.').map(part => ('00' + parseInt(part).toString(16)).slice(-2)).join(''));
  const ipBigInt = BigInt('0x' + ip.split('.').map(part => ('00' + parseInt(part).toString(16)).slice(-2)).join(''));
  const mask = BigInt(0xFFFFFFFF) << BigInt(32 - parseInt(subnet));
  return (rangeBigInt & mask) === (ipBigInt & mask);
};

/**
 * Middleware to verify that the request originated from Telegram servers.
 * It checks the source IP address of the incoming request and validates 
 * whether it belongs to the official Telegram IP address ranges.
 */
export const verifyTelegramSource = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  if (!ip) {
    return res.status(403).json({ message: 'Forbidden: No IP detected' });
  }

  const isValidIp = TELEGRAM_IP_RANGES.some(range => isIpInRange(ip as string, range));

  if (!isValidIp) {
    return res.status(403).json({ message: 'Forbidden: Request is not from Telegram' });
  }

  next();
};
