class Quarto{
  private:
    int numero;
    String tipo;
    bool disponivel;
    int qnt_pessoas;

  public:
    int getNumero();
    String getTipo();
    bool getDisponivel();
    int getQntPessoas();
    void setNumero(int numero);
    void setTipo(String tipo);
    void setDisponivel(bool disponivel);
    void setQntPessoas(int QntPessoas);
};