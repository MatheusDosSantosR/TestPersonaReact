export interface dataTestPerson {
  cep: string;
  firstName: string;
  lastName: string;
  city: string;
  cpf: string;
  email: string;
  fullName: string;
  neighborhood: string;
  state: string;
  street: string;
  type: string;
}

export interface responseTestPerson {
  data: dataTestPerson;
}