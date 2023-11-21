function palindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      return string[i] !== string[len - 1 - i]
    }
    return true;
  }
  
palindrome("eye");