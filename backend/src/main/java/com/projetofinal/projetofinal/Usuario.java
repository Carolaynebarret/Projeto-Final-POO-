#package com.uern.poo;

public class Usuario
{
    private String name;
    private String username;
    private String password;
    private String email;
    private Contato contato;
    private Informacao informacao;
    private Curriculo curriculo;
    Usuario(String name, String username,String password,String email,Contato contato,Informacao informacao, Curriculo curriculo)
    {
      this.name=name;
      this.username=username;
      this.password=password;
      this.email=email;
      this.contato=contato;
      this.informacao=informacao;
      this.curriculo=curriculo;
    }
    public String getName(){
      return name;
    }
    public Contato getContato(){
      return contato;
    }
    public Informacao getInformacao(){
      return informacao;
    }
    public Curriculo getCurriculo(){
      return curriculo;
    }
    public String getUsername(){
      return username;
    }
    private String getPassword(){
      return password;
    }
    public String getEmail(){
      return email;
    }
    public void setName(String name){
      this.name=name;
    }
    public void setUsername(String username){
      this.username=username;
    }
    public void setPassword(String password){
      this.password=password;
    }
    public void setEmail(String email){
      this.email=email;
    }
    public void setInformacao(Informacao infomacao){
      this.informacao=informacao;
    }
    public void setContato(Contato contato){
      this.contato=contato;
    }
    public void setCurriculo(Curriculo curriculo){
      this.curriculo=curriculo;
    }
}
