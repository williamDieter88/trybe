const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  //Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  const getValueByNumber = (obj,number) => Object.values(obj)[number];
  console.log(getValueByNumber(lesson3, 3));
