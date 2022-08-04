// Desafio proposto no repositório: https://github.com/lira1705/mentoria-typescript
// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Minha solução

interface IEmployee {
  code: number,
  name: string
}

const first_employee = {} as IEmployee;
first_employee.code = 10;
first_employee.name = "John";

// OR

const second_employee: IEmployee = {
  code: 15,
  name: 'Fausto'
}