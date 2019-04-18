import formatUnixTimestamp from './timestampUtilities';

const timezone = 'Europe/London';

describe('Timestamp utility functions', () => {
  describe('formatUnixTimestamp', () => {
    it('should return BST for a BST timestamp', () => {
      // 31 May 2017 BST
      const BSTTimestamp = 1496235600000;
      const result = formatUnixTimestamp(
        BSTTimestamp,
        'D MMMM YYYY, HH:mm z',
        timezone,
      );
      expect(result).toContain('BST');
    });

    it('should return GMT for a GMT timestamp', () => {
      // 1 January 2017 GMT
      const GMTTimestamp = 1483275600000;
      const result = formatUnixTimestamp(
        GMTTimestamp,
        'D MMMM YYYY, HH:mm z',
        timezone,
      );
      expect(result).toContain('GMT');
    });

    it('should return date and time in expected format', () => {
      const GMTTimestamp = 1483275600000;
      const result = formatUnixTimestamp(
        GMTTimestamp,
        'D MMMM YYYY, HH:mm z',
        timezone,
      );
      expect(result).toEqual('1 January 2017, 13:00 GMT');
    });

    it('should return short date in expected format', () => {
      const GMTTimestamp = 1483275600000;
      const result = formatUnixTimestamp(GMTTimestamp, 'YYYY-MM-DD', timezone);
      expect(result).toEqual('2017-01-01');
    });

    it('should return long date in expected format', () => {
      const GMTTimestamp = 1483275600000;
      const result = formatUnixTimestamp(GMTTimestamp, 'D MMMM YYYY', timezone);
      expect(result).toEqual('1 January 2017');
    });
  });
});
