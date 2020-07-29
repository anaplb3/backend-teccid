const { gql } = require('apollo-server')

const typeDefs = gql`
    type Candidato {
        id: ID!
        situacao: String
        numero: Int
        municipio: String
        nomeUrna: String
        nome: String
        coligacao: String
        unidadeEstadual: Int
        tipo_eleicao: Int
        uf: String
        grau_instrucao: String
        ocupacao: String
        dataNascimento: String
        genero: String
        cpf: String
        raca: String
        siglaPartido: String
        anoEleicao: String
        cd_eleicao: Int
        cargo: String
        tituloEleitoral: Int
    }

    type Doador {
        nome: String
        cpfCnpj: String
    }

    type Empenho {
        idEmpenho: ID!
        funcao: String
        data: String
        fonteRecursos: Int
        historico: String
        valor: Float
        programa: String
        nomeElemento: String
        numeroObra: Int
        subFuncao: String
        categoriaEconomica: String
        tipoRecursos: String
        nomeSubelemento: String
        naturezaDespesa: String
        cdSubelemento: Int
        cdElemento: Int
        numeroEmpenho: Int
        acao: String
        unidadeOrcamentaria: String
    }

    type Empresa {
        situacaoCadastral: Int
        municipio: String
        cnpj: String
        qualificacaoResponsavel: Int
        cnaeFiscal: Int
        cep: String
        uf: String
        dataInicioAtividade: String
        cdNaturezaJuridica: Int
        capitalSocial: Float
        razaoSocial: String
        porte: Int
        cdMunicipio: Int
        idMatrizFilial: Int
        motivoSituacaoCadastral: Int

    }

    type Licitacao {
        idLicitacao: ID!
        nomeSetorAtual: String
        numeroLicitacao: Int
        nomeEstagioProcessual: String
        valorLicitado: Float
        objeto: String
        cdTipoLicitacao: Int
        url: String
        dataHomologacao: String
        valorEstimado: Float
        anoHomologacao: String
        situacaoFracassada: String
        cdUGestora: Int
        modalidade: String
    }

    type Municipio {
        id: ID!
        esfera: Int
        codigoIbge: Int
        nome: String
        mesoregiao: String
        uf: String
        linkWikipedia: String
        linkIbge: String
        cancelled: String
        codigoSiaf: String
        bandeira: String
    }

    type Participante {
        nome: String
        cpfCnpj: String
    }

    type Partido {
        numero: Int
        nome: String
        sigla: String
    }

    type Pessoa {
        cpf: String
        nome: String
    }

    type Sancao {
        dataInicio: String
        cadastro: String
        tipoSancao: String
        dataFinal: String
    }

    type Socio {
        idSocio: ID!
        percentualCapital: Int
        nomeRepLegal: String
        dataEntradaSociedade: String
        cdQualificSocio: Int
        cdQualificRepLegal: Int
        nome: String
        cpfRepLegal: String
        cnpjEmpresa: String
        cpfCnpj: String
    }

    type UnidadeGestora {
        cdUGestora: ID!
        nomeEsferaJurisdicionado: String
        nomeTipoJurisdicionado: String
        nomeTipoAdministracaoJurisdicionado: String
        municipio: String
        jurisdicionadoId: Int
        nome: String
    }

    type Query {
        licitacoes(limit: Int): [Licitacao]
        licitacao(codUnidadeGestora: String, codTipoLicitacao: String, codLicitacao: String): Licitacao
    }
`

module.exports = typeDefs;