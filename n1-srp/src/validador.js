export function emailValidator(user) {
  return user.email.includes('@');
}

export function passwordValidator(user) {
  return user.password.length >= 8;
}

/* Vai retornar TRUE se tudo for TRUE e vice-versa :) */
export function userValidator(user) {
  return (emailValidator(user) && passwordValidator(user) && user.age >= 18);
}
