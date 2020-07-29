module.exports = {
    Query: {
        licitacao: (_, { codUnidadeGestora, codTipoLicitacao, codLicitacao }, { dataSources }) =>
            dataSources.licitacaoService.getLicitacao(codUnidadeGestora, codTipoLicitacao, codLicitacao)
    }
}