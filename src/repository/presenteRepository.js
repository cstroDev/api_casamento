import con from './connection.js';

export async function salvarPresente(presente) {
    let comando = `
        INSERT INTO tb_presente (nm_presente, ds_link, bt_selecionado, ds_url_foto)
             VALUES          (?, ?, ?, ?)
    `

    let resposta = await con.query(comando, [presente.nome, presente.link, presente.selecionado, presente.foto]);

    let info = resposta[0];


    let idPresente = info.insertId;
    return idPresente;
}

export async function deletarPresente(id) {
    let comando = `
        delete from tb_presente 
              where id_presente = ?;
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function alterarPresente(presente, id) {
    let comando = `
        update tb_presente
           set nm_presente = ?,
               ds_link = ?,
               bt_selecionado = ?,
               ds_url_foto = ?
        where  id_presente = ?; 
    `

    let resposta = await con.query(comando, [presente.nome, presente.link, presente.selecionado, presente.foto, id]);

    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function consultarPresente() {
    let comando = `
        select  id_presente        id, 		
                nm_presente        nome,		 			   
                ds_link            link,	
                bt_selecionado     selecionado,
                ds_url_foto        foto
        from    tb_presente
    `

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarPresenteNaoSelecionado() {
    let comando = `
        select  id_presente        id, 		
                nm_presente        nome,		 			   
                ds_link            link,	
                bt_selecionado     selecionado,
                ds_url_foto        foto
        from    tb_presente
        where   bt_selecionado = 0
    `

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function selecionarPresente(idPresente) {
    let comando = `
        UPDATE tb_presente 
           SET bt_selecionado = 1 
         WHERE id_presente = ?
    `;

    let resposta = await con.query(comando, [idPresente]);
    return resposta[0].affectedRows;
}