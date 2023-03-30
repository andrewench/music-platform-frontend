const patternList = {
  namePattern: /\b[^0-9^\s]{2,24}\b/,
  loginPattern: /[\w\\_?\d*]+/,
  emailPattern: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
  passwordPattern:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
}

export const { namePattern, loginPattern, emailPattern, passwordPattern } =
  patternList
