const users = [
    {   
        UserId: 1,
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 3 , 6 ,11], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {   
        UserId: 2,
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        UserId: 3,
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {   
        UserId: 4,
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
    {
        FirstName: "First", //имя пользователя
        LastName: "Second", //фамилия пользователя

        BirthDate: "30 06 2000", // дата рождения
        EducationalInstitution: "ВУЗ",//учебное заведение - ВУЗ, или школа
        LivingAddress: "Калинина 2А", //Адрес проживания
        UserType: "admin", //тип пользователя - админ, читатель, незарегистрированный пользователь

        CurrentTakenBooks: [1, 2, 3], //массив id-шников на текущие книги , которые были взяты пользователем
        CurrentReservedBooks: [4], //массив id-шников на текущие книги , которые были зарезервированы пользователем

        Contacts: ["79127528879", "grishadzyin@gmail.com"] //массив контактов : телефон,почта, соц.сети
    },
];

export default users;