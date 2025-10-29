export function validarCamposObrigatoriosUsuario(usuario) {

    if(!usuario.email)
        throw new Error("email do usuário obrigatório.");

    if(!usuario.senha)
        throw new Error("senha do usuário obrigatório.");  
}