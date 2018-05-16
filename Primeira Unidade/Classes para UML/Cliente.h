class Cliente{
  private:
    /*Sugestão: os atributos eram publicos e existem metodos de gets e sets uma grande redundancia*/
    String nome;
    String cpf;
    String origem;
  public:
    String getNome();
    String getCpf();
    String getOrigem();
    void setNome(String nome); // correção em relação ao pdf estava com retorno string e não tinha nenhum parametro.
    void setOrigem(String origem);
    void setCpf(String cpf);
};