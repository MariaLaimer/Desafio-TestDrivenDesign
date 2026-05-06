export function EmailValidator(user) {
  return user.email.includes('@');
}

export function PasswordValidator(user) {
  return user.password.length >= 8;
}

/* Vai retornar TRUE se tudo for TRUE e vice-versa :) */
export function UserValidator(user) {
  return (EmailValidator(user) && PasswordValidator(user) && user.age >= 18);
}
