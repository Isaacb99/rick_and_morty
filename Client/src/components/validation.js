

const validation = (data)=>{
    let errors = {}

    if(!data.email.includes("@")){
        errors.e1 = 'Email  no valido';
    }
    if(!data.email){
        errors.e2 = 'Ingrese email';
    }
    if(data.email.length >= 35){
        errors.e3 = 'Texto demasiado largo';
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos debe tener un numero'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Longitud incorrecta'
    }
    return errors
}

export default validation