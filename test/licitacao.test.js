const LicitacaoService = require("../src/service/licitacaoService")

const licitacao = new LicitacaoService();

test('checks if driver is null or undefined', () => {
    expect(licitacao.driver).toBeTruthy();
    expect(licitacao.driver).toBeDefined();
});

test('checks if method getLicitacoes is working', async () => {
    const results = licitacao.getLicitacoes(5);
    const firstValue = results[0];
    expect(results).toBeTruthy();
    expect(results.length).toBe(5);
});

test('checks if method getLicitacao is working', async () => {
    const result = await licitacao.getLicitacao('201173', '11', '000012014');
    expect(result).toBeTruthy();
    expect(result.valorLicitado).toBe(697500.0);
});