function filterValidIPs(ips) {
  function isValidIPv4(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    for (let part of parts) {
      const num = Number(part);
      if (isNaN(num)) return false;
      if (num < 0 || num > 255) return false;
      if (part !== String(num)) return false;
    }
    return true;
  }

  function isValidIPv6(ip) {
    const parts = ip.split(':');
    if (parts.length !== 8) return false;
    for (let part of parts) {
      if (part.length === 0 || part.length > 4) return false;
      for (let char of part) {
        const isHex = (char >= '0' && char <= '9') || (char >= 'a' && char <= 'f') || (char >= 'A' && char <= 'F');
        if (!isHex) return false;
      }
    }
    return true;
  }

  return ips.filter((ip) => {
    if (ip.includes('.')) {
      return isValidIPv4(ip);
    } else if (ip.includes(':')) {
      return isValidIPv6(ip);
    }

    return false;
  });
}

// do not modify this test case
console.log(
  filterValidIPs([
    '192.168.0.1',
    '256.100.100.100',
    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    '1200::AB00:1234::2552:7777:1313',
    '0:0:0:0:0:0:0:1',
  ]),
);
