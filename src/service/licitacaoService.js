const neo4j = require('neo4j-driver');

class LicitacaoService {
    constructor() {
        this.driver = neo4j.driver(
            ' bolt://localhost',
            neo4j.auth.basic('neo4j', 'tcctcc')
        );
    }

    // TODO
    getLicitacoes(unidade, tipo, data_inicio, data_fim, pagina, itens, ordenar_por, ordem, id_municipio) {
        return null;
    }

    async getLicitacao(codUnidadeGestora, codTipoLicitacao, codLicitacao) {
        var params = { codUnidadeGestora: codUnidadeGestora, codTipoLicitacao: codTipoLicitacao, codLicitacao: codLicitacao }
        const result = await this.driver.session()
            .run(`MATCH (l:Licitacao) WHERE l.cd_ugestora = {codUnidadeGestora} AND l.cd_tipo_licitacao = {codTipoLicitacao} AND l.numero_licitacao = {codLicitacao} RETURN l `, params);

        const singleRecord = result.records[0];
        const node = singleRecord.get(0);
        await this.driver.session().close();
        return this.licitacaoReducer(node);
    }

    // TODO
    getPropostas(codigoUnidadeGestora, codigoTipoLicitacao, codigoLicitacao, pagina, limite) {
        return null;
    }

    licitacaoReducer(record) {
        return {
            "nomeSetorAtual": record.properties.nome_setor_atual,
            "numeroLicitacao": record.properties.numero_licitacao,
            "nomeEstagioProcessual": record.properties.nome_estagio_processual,
            "valorLicitado": record.properties.valor_licitado,
            "objeto": record.properties.objeto,
            "cdTipoLicitacao": record.properties.cd_tipo_licitacao,
            "url": record.properties.url,
            "id_licitacao": record.properties.id_licitacao,
            "dataHomologacao": record.properties.data_homologacao,
            "valorEstimado": record.properties.valor_estimado,
            "anoHomologacao": record.properties.ano_homologacao,
            "situacaoFracassada": record.properties.situacao_fracassada,
            "cdUGestora": record.properties.cd_ugestora,
            "modalidade": record.properties.modalidade
        }
    }

}

module.exports = LicitacaoService;