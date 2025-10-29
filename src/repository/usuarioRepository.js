import con from './connection.js';

export async function salvarUsuario(usuario) {
    let comando = `
            INSERT INTO tb_usuarios (ds_email, ds_senha)
            VALUES             (?,?)
    `

    let resposta = await con.query(comando, [usuario.email, usuario.senha]);
    let info = resposta[0];

    let idUsuario = info.insertId;
    return idUsuario;
}