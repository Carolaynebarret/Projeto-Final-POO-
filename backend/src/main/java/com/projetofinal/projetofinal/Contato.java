#package com.uern.poo;

public class Contato {
    private String email;
    private String telefone;
    private String endereco;
    private String link;
    private String redesocial;
    Contato(String email, String telefone, String endereco,String link,String redesocial){
      this.email=email;
      this.telefone=telefone;
      this.endereco=endereco;
      this.link=link;
      this.redesocial=redesocial;
    }
    public String getEmail(){
      return email;
    }
    public void setEmail(String email){
      this.email=email;
    }
    public String getTelefone(){
      return telefone;
    }
    public void setTelefone(String telefone){
      this.telefone=telefone;
    }
    public String getEndereco(){
      return endereco;
    }
    public void setEndereco(String endereco){
      this.endereco=endereco;
    }
    public String getLink(){
      return link;
    }
    public void setLink(String link){
      this.link=link;
    }
    public String getRedesocial(){
      return redesocial;
    }
    public void setRedesocial(String redesocial){
      this.redesocial=redesocial;
    }
}
