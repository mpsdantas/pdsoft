class Pagamento{
  private:
    String tipo;
    bool finalizado;
    float valor;
    int parcelamento;
  public:
    String getTipo();
    bool getFinalizado();
    float getValor();
    int getParcelamento();
    void setTipo(String tipo);
    void setValor(float valor);
    void setParcelamento(int parcelamento);
    bool processarPagamento();
};