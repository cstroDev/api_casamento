import con from './connection.js';

export async function salvarPresenca(presenca) {
    let comando = `
        INSERT INTO tb_presenca (nm_convidado, bt_temPresente, id_presente)
             VALUES          (?, ?, ?)
    `

    let resposta = await con.query(comando, [presenca.nome, presenca.presente, presenca.id]);

    let info = resposta[0];


    let idConvidado = info.insertId;
    return idConvidado;
}

export async function deletarPresenca(id) {
    let comando = `
        delete from tb_presenca 
              where id_convidado = ?;
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function consultarPresenca() {
    let comando = `
        select  id_convidado        id, 		
                nm_convidado        nome,		 			   	
                bt_temPresente      temPresente,
                id_presente         presente
        from    tb_presenca
    `

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}