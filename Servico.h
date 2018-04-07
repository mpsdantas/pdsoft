class Servico{
  private:
    long int id;
    Cliente cliente;
    vector<Pagamento> pagamento;
    float valor;
  public:
    int getId();
    Cliente getCliente();
    Pagamento getPagamento();
    void novoPagamento();
    float getValor();
    Date getData();
    void setValor(float valor);
    void associarCliente(Cliente cliente);
    void alterarPagamento();
};