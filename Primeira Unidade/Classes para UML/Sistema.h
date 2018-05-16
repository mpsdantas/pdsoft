class Sistema{
    private:
        /*Sugestão de objetos que estão faltando*/
        Cliente *cliente;
        vector<Cliente> cliente;
        vector<Servicos> servicos;
      public:
        void criarServico();
        void alterarServico();
        void listarServicos();
        void criarCliente();
        void apagarCliente();
        void listarClientes();
        void alterarCliente();
        void gerarRelatorioReservas();
        void gerarRelatorioFinancas();
        void gerarRelatorioServicos();
};