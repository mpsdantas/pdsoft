class Hospedagem{
  private:
    String status;
    vector<Quarto> quartos;
    vector<Date> dataEntrada;
    vector<Date> dataSaida;
    int quantidadeQuartos;

  public:
    String getEstadoReserva();
    Quarto getQuarto(int i);
    vector<Quarto> getQuartos();
    Date getDataSaida(int i);
    Date getDataEntrada(int i);
    void setEstadoReserva(String);
    void addQuarto(Quarto quarto);
    void removeQuarto(int i);
    void alteraQuarto(int i, Quarto quarto);
    void setSaida(int i, Date data);
    void setEntrada(int i, Date data);
};